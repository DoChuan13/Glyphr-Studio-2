import GlyphrStudioProject from './glyphr_studio_project.js';
// import History from './history.js';
import PageOpenProject from '../pages/open_project.js';
import PageGlyphEdit from '../pages/glyph_edit.js';
import PageOverview from '../pages/overview.js';
import { makeElement } from '../common/dom.js';
import {
	log,
	saveFile,
	makeDateStampSuffix,
	json,
	getFirstID,
	clone,
} from '../common/functions.js';
import { MultiSelectPoints, MultiSelectShapes } from './multiselect.js';
import Glyph from '../glyph_elements/glyph.js';
import { makeAppTopBar } from '../app/app.js';
import { normalizeHex } from '../common/unicode.js';

/**
 * Creates a new Glyphr Studio Project Editor.
 * An Editor is all the UI it takes to edit a project,
 * including Pages, Panels, History, Saved State,
 * Import/Export, etc.
 *
 * Many Project Editors can be run side-by-side,
 * editing many Glyphr Studio Projects. Could be
 * in tabs or separate windows, but the App has
 * access to all the Project Editors, enabling
 * cross-project features like glyph copy/paste.
 */
export default class ProjectEditor {
	/**
	 * Initialize a project editor, with defaults
	 * @param {object} newEditor - Glyphr Studio Project File JSON
	 */
	constructor(newProjectEditor = {}) {
		log('ProjectEditor.constructor', 'start');
		// log('passed > newProjectEditor');
		// log(newProjectEditor);

		// PubSub
		this.subscribers = {};

		// Selections
		this.project = newProjectEditor.project;
		this.selectedGlyphID = '0x0042';
		this.selectedComponentID = false;
		this.selectedLigatureID = false;
		this.selectedKernID = false;

		// Navigation
		this.nav = {
			page: newProjectEditor.nav.page || 'Open project',
			panel: newProjectEditor.nav.panel || 'Attributes',
			projectSaved: true,
			stopPageNavigation: true,
		};

		this.pages = {};

		// Canvas
		// Views per work item ID
		this._views = {};
		this.defaultView = {dx: 200, dy: 500, dz: 0.5};
		this.defaultKernView = {dx: 500, dy: 500, dz: 0.5};

		// Canvas
		// Ghost Canvas
		this.canvasSize = 2000;
		this.ghostCanvas = document.createElement('canvas');
		this.ghostCanvas.width = this.canvasSize;
		this.ghostCanvas.height = this.canvasSize;
		this.ghostCTX = this.ghostCanvas.getContext('2d');

		// Canvas
		// Event handlers
		this.eventHandlers = {};
		this.selectedTool = false;

		// History
		// this.history = {};
		// this.history['Glyph edit'] = new History('glyphs', this);
		// this.history.components = new History('components', this);
		// this.history.ligatures = new History('ligatures', this);
		// this.history.kerning = new History('kerning', this);

		// MultiSelect
		this.multiSelect = {
			points: new MultiSelectPoints(),
			shapes: new MultiSelectShapes(),
		};

		// log(this);
		log('ProjectEditor.constructor', 'end');
	}





	// --------------------------------------------------------------
	// PubSub
	// --------------------------------------------------------------

	/**
	 * Sends a new piece of data concerning a topic area that
	 * triggers changes for subscribers
	 * @param {string} topic - keyword to trigger changes
	 * @param {object} data - whatever the new state is
	 */
	publish(topic, data) {
		log(`ProjectEditor.publish`, 'start');
		log(`topic: ${topic}`);
		// log(`data: ${data}`);
		// log(`this.subscribers[topic]: ${this.subscribers[topic]}`);

		if (this.subscribers[topic]) {
			log(`Publishing ${data} to ${this.subscribers[topic].length} subscribers`);
			this.subscribers[topic].forEach((sub) => {
				sub.callback(data);
			});
		} else {
			log(`Nobody subscribed to ${topic}`);
		}
		log(`ProjectEditor.publish`, 'end');
	}

	/**
	 * Sets up an intent to listen for changes based on a keyword, and
	 * provides a callback function in case a change is published
	 * @param {string} topic - what keyword to listen for
	 * @param {string} subscriberName - the name of the thing listening
	 * @param {function} callback - what to do when a change is triggered
	 * @returns nothing
	 */
	subscribe({topic = false, subscriberName = '', callback = false}) {
		if(!topic) {
			console.warn(`Subscriber was not provided a topic`);
			return;
		}

		if(!callback){
			console.warn(`Subscriber was not provided a callback`);
		}

		if (!this.subscribers[topic]) this.subscribers[topic] = [];
		this.subscribers[topic].push({subscriberName: subscriberName, callback: callback});
	}




	// --------------------------------------------------------------
	// Project
	// --------------------------------------------------------------

	/**
	 * Get the project for this editor
	 * @returns {GlyphrStudioProject}
	 */
	get project() {
		if (!this._project || this._project === {}) {
			this._project = new GlyphrStudioProject();
		}
		return this._project;
	}

	/**
	 * Set the project for this editor
	 * @param {GlyphrStudioProject} gsp - project to set
	 * @returns {GlyphrStudioProject}
	 */
	set project(gsp) {
		this._project = new GlyphrStudioProject(gsp);
	}




	// --------------------------------------------------------------
	// Get Individual Selected Work Items
	// --------------------------------------------------------------

	/**
	 * Returns the appropriate Glyph, Ligature, or Component
	 * based on the current page
	 */
	get selectedWorkItem() {
		// TODO check for what page we're on
		return this.selectedGlyph;
	}

	/**
	 * Returns the appropriate Glyph, Ligature or Component
	 * ID based on the current page
	 */
	get selectedWorkItemID() {
		// TODO check for what page we're on
		return this.selectedGlyphID;
	}

	/**
	 * Returns the selected glyph
	 * @returns {object}
	 */
	get selectedGlyph() {
		log('ProjectEditor GET selectedGlyph', 'start');
		const id = this.selectedGlyphID;
		log(`selectedGlyphID ${id}`);
		const re = this.project.getGlyph(id);
		log('ProjectEditor GET selectedGlyph', 'end');
		return re || new Glyph();
	}

	/**
	 * Returns the selected glyph ID
	 * @returns {string}
	 */
	get selectedGlyphID() {
		// log('ProjectEditor GET selectedGlyphID', 'start');
		if (!this._selectedGlyphID) {
			this._selectedGlyphID = getFirstID(this.project.glyphs);
		}

		// log('ProjectEditor GET selectedGlyphID', 'end');
		return this._selectedGlyphID;
	}

	/**
	 * Returns the selected ligature
	 * @returns {object}
	 */
	get selectedLigature() {
		const re = this.ligatures[this.selectedLigatureID];
		return re;
	}

	/**
	 * Returns the selected ligature ID
	 * @returns {string}
	 */
	get selectedLigatureID() {
		if (!this._selectedLigatureID) {
			this._selectedLigatureID = getFirstID(this.project.ligatures);
		}
		return this._selectedLigatureID;
	}

	/**
	 * Returns the selected kern
	 * @returns {object}
	 */
	get selectedKern() {
		const re = this.kerns[this.selectedKernID];
		return re;
	}

	/**
	 * Returns the selected kern ID
	 * @returns {string}
	 */
	get selectedKernID() {
		if (!this._selectedKernID) {
			this._selectedKernID = getFirstID(this.project.kerning);
		}
		return this._selectedKernID;
	}

	/**
	 * Returns the selected component
	 * @returns {object}
	 */
	get selectedComponent() {
		const re = this.components[this.selectedComponentID];
		return re;
	}

	/**
	 * Returns the selected component ID
	 * @returns {string}
	 */
	get selectedComponentID() {
		if (!this._selectedComponentID) {
			this._selectedComponentID = getFirstID(this.project.components);
		}
		return this._selectedComponentID;
	}




	// --------------------------------------------------------------
	// Set Selected Work Items
	// --------------------------------------------------------------

	/**
	 * Sets the selected glyph
	 * @param {string} id - ID to select
	 */
	set selectedGlyphID(id) {
		log(`ProjectEditor SET selectedGlyphID`, 'start');
		log(`id: ${id}`);
		// Validate ID!
		this._selectedGlyphID = normalizeHex(id);
		this.publish('selectedGlyphID', this.selectedGlyphID);
		log(`ProjectEditor SET selectedGlyphID`, 'end');
	}

	/**
	 * Sets the selected ligature
	 * @param {string} id - ID to select
	 */
	set selectedLigatureID(id) {
		// Validate ID!
		this._selectedLigatureID = id;
	}

	/**
	 * Sets the selected kern
	 * @param {string} id - ID to select
	 */
	set selectedKernID(id) {
		// Validate ID!
		this._selectedKernID = id;
	}

	/**
	 * Sets the selected component
	 * @param {string} id - ID to select
	 */
	set selectedComponentID(id) {
		// Validate ID!
		this._selectedComponentID = id;
	}




	// --------------------------------------------------------------
	// History
	// --------------------------------------------------------------

	// /**
	//  * Adds to the history queue
	//  * @param {string} description
	//  */
	// historyPut(description) {
	//   if (this.onCanvasEditPage()) {
	//     const queue =
	//       this.nav.page === 'import svg' ? 'Glyph edit' : this.nav.page;
	//     this.history[queue].put(description);
	//   }
	// }

	// /**
	//  * Moves backwards in time in the history queue
	//  */
	// historyPull() {
	//   if (this.onCanvasEditPage()) {
	//     this.closeDialog();
	//     this.closeNotation();
	//     this.history[this.nav.page].pull();
	//   }
	// }

	// /**
	//  * Get the length of the current history queue
	//  * @returns {number}
	//  */
	// historyLength() {
	//   if (this.onCanvasEditPage()) {
	//     return this.history[this.nav.page].queue.length || 0;
	//   }

	//   return 0;
	// }




	// --------------------------------------------------------------
	// Navigation
	// --------------------------------------------------------------

	/**
	 * List of pages the editor supports
	 */
	get tableOfContents() {
		return {
			'Open project': {
				name: 'Open project',
				pageMaker: PageOpenProject,
				iconName: false,
			},
			'Overview': {
				name: 'Overview',
				pageMaker: PageOverview,
				iconName: 'page_glyphEdit',
			},
			'Glyph edit': {
				name: 'Glyph edit',
				pageMaker: PageGlyphEdit,
				iconName: 'page_glyphEdit',
			},
			'Ligatures': {
				name: 'Ligatures',
				pageMaker: false,
				iconName: 'page_ligatures',
			},
			'Components': {
				name: 'Components',
				pageMaker: false,
				iconName: 'page_components',
			},
			'Kerning': {
				name: 'Kerning',
				pageMaker: false,
				iconName: 'page_kerning',
			},
			'Live preview': {
				name: 'Live preview',
				pageMaker: false,
				iconName: 'page_livePreview',
			},
			'Global actions': {
				name: 'Global actions',
				pageMaker: false,
				iconName: 'page_globalActions',
			},
			'Settings': {
				name: 'Settings',
				pageMaker: false,
				iconName: 'page_settings',
			},
			'Import & export': {
				name: 'Import & export',
				pageMaker: false,
				iconName: 'page_importAndExport',
			},
			'Help': {
				name: 'Help',
				pageMaker: false,
				iconName: 'page_help',
			},
			'About': {
				name: 'About',
				pageMaker: false,
				iconName: 'page_about',
			},
		};
	}

	/**
	 * Changes the page of this Project Editor
	 * @param {string} pageName - where to go
	 */
	navigate(pageName) {
		log(`ProjectEditor.navigate`, 'start');
		log(`pageName : ${pageName}`);

		if (pageName) this.nav.page = pageName;
		const wrapper = document.getElementById('app__wrapper');
		// log(`wrapper is:`);
		// log(wrapper);

		if (wrapper) {
			const loader = this.pageLoader();
			wrapper.innerHTML = makeAppTopBar();
			wrapper.appendChild(loader.content);
			if (loader.callback) loader.callback(this.getCurrentPage());
		} else {
			console.warn(`app__wrapper could not be found, navigation failed`);
		}

		log(`ProjectEditor.navigate`, 'end');
	}

	/**
	 * Returns the currently selected page
	 * @returns {object}
	 */
	getCurrentPage() {
		// log(`ProjectEditor.getCurrentPage`, 'start');
		// log(this.pages);
		// log(`ProjectEditor.getCurrentPage`, 'end');
		return this.pages[this.nav.page];
	}

	/**
	 * Sets the current view to the appropriate Page
	 * @returns {object} Page Loader object - {string} content and {function} callback
	 */
	pageLoader() {
		log(`ProjectEditor.pageLoader`, 'start');
		const editorContent = makeElement({ tag: 'div', id: 'app__main-content' });

		// Default page loader fallback
		let currentPageLoader = {
			content: makeElement({tag: 'h1', innerHTML: 'Uninitialized page content'}),
			callback: false,
		};

		let currentPage = this.nav.page;
		let currentPageMaker = this.tableOfContents[currentPage].pageMaker;
		log(`page detected as ${currentPage}`);

		if (!currentPageMaker) {
			console.warn(`No page maker for ${currentPage}`);
			currentPageLoader.content.innerHTML += `<br>${currentPage}`;
		} else {
			if (!this.pages[currentPage]) {
				this.pages[currentPage] = new currentPageMaker();
			}
			// If there is a page maker and a loader, set it
			currentPageLoader = this.pages[currentPage].pageLoader();
		}

		// Append results
		editorContent.appendChild(currentPageLoader.content);

		// log(`this.pages`);
		// log(this.pages);

		log(`ProjectEditor.pageLoader`, 'end');

		return { content: editorContent, callback: currentPageLoader.callback };
	}

	/**
	 * Returns True if the current page has a glyph chooser panel
	 * @returns {boolean}
	 */
	onChooserPanelPage() {
		const nh = this.nav.page;
		return (
			nh === 'Glyph edit' ||
			nh === 'components' ||
			nh === 'kerning' ||
			nh === 'import svg' ||
			nh === 'ligatures'
		);
	}

	/**
	 * Returns true if the current page has an Edit Canvas
	 * @returns {boolean}
	 */
	onCanvasEditPage() {
		const nh = this.nav.page;
		return (
			nh === 'Glyph edit' ||
			nh === 'components' ||
			nh === 'kerning' ||
			nh === 'ligatures'
		);
	}

	/**
	 * Returns true if the current page has no panels
	 * @returns {boolean}
	 */
	onNoNavPage() {
		const nh = this.nav.page;
		return (
			nh === 'font settings' ||
			nh === 'project settings' ||
			nh === 'global actions' ||
			nh === 'export font' ||
			nh === 'help' ||
			nh === 'about'
		);
	}





	// --------------------------------------------------------------
	// Views
	// --------------------------------------------------------------
	/**
	 * Sets the view for the current work item on the current page
	 */
	set view(oa){
		log(`ProjectEditor SET view`, 'start');
		var wid = this.selectedWorkItemID;

		// Ensure there are at least defaults
		if(!this._views[wid]){
			// log(`\t no view, getting default`);
			this._views[wid] = this.view;
		}
		// log(`\t setting ${JSON.stringify(oa)}`);

		// Check for which to set
		if(isFinite(oa.dx)){ this._views[wid].dx = oa.dx; }
		if(isFinite(oa.dy)){ this._views[wid].dy = oa.dy; }
		if(isFinite(oa.dz)){ this._views[wid].dz = oa.dz; }

		log(`set as ${JSON.stringify(this._views[wid])}`);
		log(`ProjectEditor SET view`, 'end');
		return this._views[wid];
	}

	/**
	 * Gets the current view for the current work item on the current page
	 */
	get view(){
		log(`ProjectEditor GET view`, 'start');

		var wid = this.selectedWorkItemID;
		var re = false;

		if(this._views[wid]){
			re = this._views[wid];
		} else if(this.nav.page === 'Kerning') {
			re = clone(this.defaultKernView);
		} else {
			re = clone(this.defaultView);
		}

		log(`returning ${JSON.stringify(re)}`);
		log(`ProjectEditor GET view`, 'end');

		return re;
	}

	/**
	 * Check to see if a work item has a view set already
	 * @param {string} id - work item id to check
	 * @returns boolean
	 */
	viewExists(id){
		return !!this._views[id];
	}




	// --------------------------------------------------------------
	// Panels
	// --------------------------------------------------------------

	/**
	 * List of panels the editor supports
	 */
	 get listOfPanels() {
		return {
			'Chooser': {
				name: 'Chooser',
				panelMaker: false,
				iconName: 'panel_chooser',
			},
			'Layers': {
				name: 'Layers',
				panelMaker: false,
				iconName: 'panel_layers',
			},
			'Guides': {
				name: 'Guides',
				panelMaker: false,
				iconName: 'panel_guides',
			},
			'History': {
				name: 'History',
				panelMaker: false,
				iconName: 'panel_history',
			},
			'Attributes': {
				name: 'Attributes',
				panelMaker: false,
				iconName: 'panel_attributes',
			},
		};
	 }





	// --------------------------------------------------------------
	// Save
	// --------------------------------------------------------------

	/**
	 * Save a Glyphr Project Text File
	 * @param {boolean} overwrite - for Electron app, overwrite current working file
	 */
	saveGlyphrProjectFile(overwrite) {
		// log('SAVEGLYPHRPROJECTVILE');
		// log('' + this.project.projectSettings.formatSaveFile);

		// desktop overwrite / save as logic
		if (window && window.process && window.process.type) {
			if (overwrite) {
				window.saveFileOverwrite = true;
			} else {
				window.saveFileOverwrite = false;
			}
		}

		let saveData = this.project.save();

		if (this.project.projectSettings.formatSaveFile) saveData = json(saveData);
		else saveData = JSON.stringify(saveData);

		// log('saveGlyphrProjectFile - \n'+saveData);
		const fileName =
			this.project.projectSettings.name +
			' - Glyphr Project - ' +
			makeDateStampSuffix() +
			'.txt';

		saveFile(fileName, saveData);

		this.closeDialog();
		this.setProjectAsSaved();
	}
}

/*

window._UI = {


		icons: {},
		cursors: {},

		// Shared edit pages
		popOut: false,
		multiSelect: {
				shapes: false, // Selected Shapes
				points: false, // Selected Points
		},
		glyphChooser: {
				dropdown: false,
				panel: {
						fname: 'selectGlyph',
						selected: 'basicLatin',
						choices: 'glyphs',
				},
				dialog: {
						fname: 'selectGlyph',
						selected: 'basicLatin',
						choices: 'glyphs',
				},
				getShapeOptions: {
						srcAutoWidth: false,
						srcWidth: false,
						srcLSB: false,
						srcRSB: false,
				},
				cache: false,
		},
		canvasHotSpots: [],
		canvasHotSpotHovering: false,
		multiSelectThickness: 2,
		rotateHandleHeight: 40,
		selectedTool: 'pathedit', // pathedit, pathaddpoint, shaperesize, pan, newrect, newoval, newpath
		focusElement: false,
		redrawing: false,
		redraw: {
				redrawCanvas: true,
				redrawTools: true,
				redrawPanels: true,
				calledBy: '',
		},
		thumbSize: 50,
		thumbGutter: 5,
		showGrid: true, // display the grid
		showGuides: true, // display guides
		showGuidesLabels: true, // display guide labels
		showOvershoots: true, // display overshoot guides
		clipboardShape: false,
		glyphEditCanvas: false,
		glyphEditCanvasSize: 2000, // How big the viewport canvas is
		glyphEditCTX: false,
		defaultView: {
				dx: 200, // X offset for the canvas origin
				dy: 500, // Y offset for the canvas origin
				dz: 0.5, // Zoom or scale of the canvas
		},
		views: {}, // Holds the unique views per char & component
		thumbView: {},
		mins: {
				xMax: -999999,
				xMin: 999999,
				yMax: -999999,
				yMin: 999999,
		},
		maxes: {
				xMax: 999999,
				xMin: -999999,
				yMax: 999999,
				yMin: -999999,
		},
		contextGlyphs: {
				string: '',
				advancewidth: false,
				leftseq: false,
				rightseq: false,
		},
		timeout: false,
		toastTimeout: false,
		history: {},

		// page: glyphedit
		selectedGlyph: false, // f is 0x0066

		// page: ligatures
		selectedLigature: false,

		// page: components
		selectedComponent: false,

		// page: kerning
		selectedKern: false,
		defaultKernView: {
				dx: 500, // X offset for the canvas origin
				dy: 500, // Y offset for the canvas origin
				dz: 0.5, // Zoom or scale of the canvas
		},
		guides: {
				leftGroupXMax: {type: 'vertical', location: 0, name: 'left group', color: 'rgb(255,0,255)'},
				rightGroupXMin: {type: 'vertical', location: 0, name: 'right group', color: 'rgb(255,0,255)'},
		},

		// page: test drive
		testDrive: {
				glyphSequence: {},
				ctx: false,
				canvas: false,
				sampleText: '',
				fontScale: 100,
				fontSize: 48,
				lineGap: false,
				padSize: 0,
				showGlyphExtras: false,
				showLineExtras: false,
				showPageExtras: false,
				flattenGlyphs: false,
				cache: {},
		},

		// page: import svg
		selectedSVGImportTarget: false,
		importSVG: {
				scale: true,
				move: true,
				ascender: false,
				capHeight: false,
				descender: false,
				overshootTop: false,
				overshootBottom: false,
				svgCode: false,
		},

		// page: openproject
		overflowCount: 326,
		spinning: true,
		importRange: {
				begin: 0x0020,
				end: 0x024F,
		},

		notDefGlyphShapes: '[]',

		// page: font settings
		metadataHelp: {
				font_family: '',
				font_style: 'regular, italic, oblique',
				font_variant: 'normal, small-caps',
				font_weight: 'normal, bold, or a number 100-900',
				font_stretch: 'normal, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded',
				panose_1: 'Uses ten digits to describe the font\'s visual style.  A good overview can be found here (archived): <a href="https://web.archive.org/web/20140913211804/http://www.monotype.com/services/pan2" target="_blank">monotype.com/services/pan2</a>.',
				stemv: 'Average measurement of vertical stems.',
				stemh: 'Average measurement of horizontal stems.',
				slope: 'If italic, this is the slant angle, measured counterclockwise from vertical. Or zero for non-italic fonts.',
				underline_position: '',
				underline_thickness: '',
				strikethrough_position: '',
				strikethrough_thickness: '',
				overline_position: '',
				overline_thickness: '',
				designer: '',
				designerURL: '',
				manufacturer: '',
				manufacturerURL: '',
				license: '',
				licenseURL: '',
				version: 'Like: Version 0.1',
				description: '',
				copyright: '',
				trademark: '',
		},
};
*/

/*
// ---------------------------------------------------------------------
//    Global Get Selected Glyph and Shape
// ---------------------------------------------------------------------
		/**
		 * Get the selected glyph's left side bearing
		 * @returns {number}
		 *
		getSelectedGlyphLeftSideBearing() {
				// log('getSelectedGlyphLeftSideBearing');
				let sc = getSelectedWorkItem();
				if (!sc) return 0;
				if (sc.objType === 'component') return 0;
				if (!sc.isAutoWide) return 0;
				return sc.leftSideBearing || this.project.projectSettings.defaultLSB;
		}

		/**
		 * Get the selected glyph's right side bearing
		 * @returns {number}
		 *
		getSelectedGlyphRightSideBearing() {
				// log('getSelectedGlyphLeftSideBearing');
				let sc = getSelectedWorkItem();
				if (!sc) return 0;
				if (sc.objType === 'component') return 0;
				if (!sc.isAutoWide) return 0;
				return sc.rightSideBearing || this.project.projectSettings.defaultRSB;
		}

		/**
		 * Updates the selected glyphs width
		 *
		updateCurrentGlyphWidth() {
				let sc = getSelectedWorkItem();
				if (!sc) return;
				if (editor.nav.page === 'Glyph edit') {
						sc.changed();
				} else if (editor.nav.page === 'components' && sc) {
						let lsarr = sc.usedIn;
						if (lsarr) for (let c=0; c<lsarr.length; c++) getGlyph(lsarr[c]).changed();
				}
		}

function existingWorkItem() {
		let len = 0;
		let nph = _UI.currentPanel;

		if (editor.nav.page === 'ligatures') {
				len = Object.keys(getCurrentProject().ligatures).length;
				if (!len) {
						_UI.selectedLigature = false;
						if (nph !== 'npNav') nph = 'npChooser';
						return false;
				}
		} else if (editor.nav.page === 'components') {
				len = Object.keys(getCurrentProject().components).length;
				if (!len) {
						_UI.selectedComponent = false;
						if (nph !== 'npNav') nph = 'npChooser';
						return false;
				}
		} else if (editor.nav.page === 'kerning') {
				len = Object.keys(getCurrentProject().kerning).length;
				if (!len) {
						_UI.selectedKern = false;
						if (nph !== 'npNav') nph = 'npAttributes';
						return false;
				}
		}

		return true;
}

function getSelectedWorkItem() {
		// log('getSelectedWorkItem', 'start');
		// log('currentPage: ' + editor.nav.page);
		let re;

		switch (editor.nav.page) {
				case 'Glyph edit':
						if (!_UI.selectedGlyph) _UI.selectedGlyph = '0x0041';
						re = getGlyph(_UI.selectedGlyph, true);
						// log('case glyph edit, returning ' + re.name);
						return re;
				case 'import svg':
						if (!_UI.selectedSVGImportTarget) _UI.selectedSVGImportTarget = '0x0041';
						re = getGlyph(_UI.selectedSVGImportTarget, true);
						// log('case import svg, returning ' + re.name);
						return re;
				case 'ligatures':
						re = getGlyph(_UI.selectedLigature, true);
						// log('case glyph edit, returning ' + re.name);
						return re;
				case 'components':
						re = getGlyph(_UI.selectedComponent, false);
						// log('case components, returning ' + re.name);
						return re;
				case 'kerning':
						// log('case KERN - selkern = ' + _UI.selectedKern);
						if (!_UI.selectedKern) _UI.selectedKern = getFirstID(getCurrentProject().kerning);
						re = getCurrentProject().kerning[_UI.selectedKern] || false;
						// log('case kerning, returning ' + re);
						return re;
		}

		return false;
}

function getSelectedWorkItemID() {
		switch (editor.nav.page) {
				case 'Glyph edit': return _UI.selectedGlyph;
				case 'import svg': return _UI.selectedSVGImportTarget;
				case 'ligatures': return _UI.selectedLigature;
				case 'components': return _UI.selectedComponent;
				case 'kerning': return _UI.selectedKern;
		}

		return false;
}

function getSelectedWorkItemChar() {
		let swiid = getSelectedWorkItemID();
		return hexToChars(swiid);
}

function getSelectedWorkItemName() {
		// log('getSelectedWorkItemName', 'start');
		let wi = getSelectedWorkItem();
		// log('wi = '+wi);
		return wi.name || wi.getName() || '[name not found]';
}

function getSelectedWorkItemShapes() {
		// log('GETSELECTEDGLYPHSHAPES');
		let rechar = getSelectedWorkItem();
		return rechar? rechar.shapes : [];
}

function markSelectedWorkItemAsChanged() {
		// log('markSelectedWorkItemAsChanged', 'start');
		let wi = getSelectedWorkItem();

		if (wi && wi.changed) {
				// log('marking as changed');
				wi.changed(true, true);
		}

		// log('markSelectedWorkItemAsChanged', 'end');
}

function selectGlyph(c, dontnavigate) {
		// log('selectGlyph', 'start');
		// log('selecting ' + getGlyph(c, true).name + ' from value ' + c);

		_UI.selectedGlyph = c;
		clickEmptySpace();
		markSelectedWorkItemAsChanged();

		if (!dontnavigate) {
				// log('selecting ' + getCurrentProject().glyphs[c].glyphhtml + ' and navigating.');
				navigate({panel: 'npAttributes'});
		}

		// log('selectGlyph', 'end');
}

function selectComponent(c, dontnavigate) {
		// log('SELECTCOMPONENT - selecting ' + getGlyph(c, true).name + ' from value ' + c);

		_UI.selectedComponent = c;
		clickEmptySpace();
		markSelectedWorkItemAsChanged();

		if (!dontnavigate) {
				// log('SELECTCOMPONENT: selecting ' + getCurrentProject().components[c].name + ' and navigating.');
				navigate({panel: 'npAttributes'});
		}
}

function selectLigature(c, dontnavigate) {
		// log('SELECTLIGATURE - selecting ' + getGlyph(c, true).name + ' from value ' + c);

		_UI.selectedLigature = c;
		clickEmptySpace();
		markSelectedWorkItemAsChanged();

		if (!dontnavigate) {
				// log('SELECTLIGATURE: selecting ' + getCurrentProject().ligatures[c].glyphhtml + ' and navigating.');
				navigate({panel: 'npAttributes'});
		}
}

function selectSVGImportTarget(c, dontnavigate) {
		// log('SELECTSVGIMPORTTARGET - selecting ' + getGlyph(c, true).name + ' from value ' + c);

		_UI.selectedSVGImportTarget = c;

		if (!dontnavigate) {
				// log('SELECTSVGIMPORTTARGET: selecting ' + c + ' and navigating.');
				navigate({panel: 'npAttributes'});
		}
}
*/
