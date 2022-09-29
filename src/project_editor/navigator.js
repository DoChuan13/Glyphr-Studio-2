import { PageOpenProject } from '../pages/open_project.js';
import { PageGlyphEdit } from '../pages/glyph_edit.js';
import { PageOverview } from '../pages/overview.js';
import { PageAbout } from '../pages/about.js';

import { getCurrentProjectEditor } from '../app/main.js';
import { addAsChildren, makeElement } from '../common/dom.js';
import { makeGlyphChooserContent } from '../panels/glyph_chooser.js';
import { makeAppTopBar } from '../app/app.js';
import { makeIcon } from '../common/graphics.js';
import { accentColors } from '../common/colors.js';

// --------------------------------------------------------------
// Navigation
// --------------------------------------------------------------
export class Navigator {

	constructor() {
		this.page = 'Open project';
		this.panel = 'Attributes';
		this.pageMakers = {};
	}

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
				iconName: 'page_overview',
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
				pageMaker: PageAbout,
				iconName: 'page_about',
			},
		};
	}

	/**
	 * Changes the page of this Project Editor
	 * @param {string} pageName - where to go
	 */
	navigate(pageName) {
		log(`Navigator.navigate`, 'start');
		log(`pageName : ${pageName}`);

		if (pageName) this.page = pageName;
		const wrapper = document.getElementById('app__wrapper');

		// log(`wrapper before:`);
		// log(wrapper);

		if (wrapper) {
			const pageContent = this.makePageContent();
			wrapper.innerHTML = makeAppTopBar();
			wrapper.appendChild(pageContent);
		} else {
			console.warn(`app__wrapper could not be found, navigation failed`);
		}

		log(`Navigator.navigate`, 'end');
	}

	/**
	 * Sets the current view to the appropriate Page
	 * @returns {object} Page Loader object - {string} content and {function} callback
	 */
	makePageContent() {
		// log(`Navigator.makePageContent`, 'start');
		const editorContent = makeElement({ tag: 'div', id: 'app__main-content' });

		// Default page loader fallback
		let pageContent = makeElement({tag: 'h1', innerHTML: 'Uninitialized page content'});
		let currentPageMaker = this.tableOfContents[this.page].pageMaker;
		// log(`page detected as ${this.page}`);

		if (!currentPageMaker) {
			console.warn(`No page maker for ${this.page}`);
			pageContent.innerHTML += `<br>${this.page}`;
		} else {
			if (!this.pageMakers[this.page]) {
				this.pageMakers[this.page] = new currentPageMaker();
			}
			// If there is a page maker and a loader, set it
			pageContent = this.pageMakers[this.page].makePageContent();
		}

		// Append results
		editorContent.appendChild(pageContent);

		// log(`this.pageMakers`);
		// log(this.pageMakers);

		// log(`Navigator.makePageContent`, 'end');

		return editorContent;
	}

	/**
	 * Returns True if the current page has a glyph chooser panel
	 * @returns {boolean}
	 */
	get isOnChooserPanelPage() {
		const nh = this.page;
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
	get isOnEditCanvasPage() {
		const nh = this.page;
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
	get isOnNoNavPage() {
		const nh = this.page;
		return (
			nh === 'font settings' ||
			nh === 'project settings' ||
			nh === 'global actions' ||
			nh === 'export font' ||
			nh === 'help' ||
			nh === 'about'
		);
	}
}




// --------------------------------------------------------------
// Helpers
// --------------------------------------------------------------

export function makeNavButton(properties = {}) {
	let title = properties.title || 't i t l e';
	let superTitle = properties.superTitle || 's u p e r t i t l e';
	let level = properties.level || '';

	return `
		<button
			data-nav-type="${superTitle}"
			class="nav-button"
			id="nav-button${level? `-${level}` : ''}"
			title="${title}"
		>
			${makeNavButtonContent(title, superTitle)}
		</button>
	`;
}

export function makeNavButtonContent(title, superTitle) {
	return `
		<span class="nav-button__super-title">${superTitle}</span>
		<span class="nav-button__title" title="${title}">${title}</span>
	`;
}

export function toggleNavDropdown(parentElement) {
	let dropdown = document.getElementById('nav-dropdown');

	if(dropdown) {
		closeAllDialogs();
	} else {
		showNavDropdown(parentElement);
	}
}

export function showNavDropdown(parentElement) {
	// log(`showNavDropdown`, 'start');
	let size = '500px';
	let rect = parentElement.getBoundingClientRect();
	let parentStyle = getComputedStyle(parentElement);
	let top = rect.top + rect.height - 3;

	let dropdownContent = makeElement({tag: 'h3', content: 'Uninitialized'});
	let dropdownType = parentElement.getAttribute('data-nav-type');
	// log(`dropdownType: ${dropdownType}`);

	if(dropdownType === 'PAGE') {
		dropdownContent = makePageChooserContent();
		size = `${parentElement.parentElement.getBoundingClientRect().width-2}px`;
	}

	if(dropdownType === 'EDITING') {
		dropdownContent = makeGlyphChooserContent((glyphID) => {
			const editor = getCurrentProjectEditor();
			editor.selectedGlyphID = glyphID;
			closeAllDialogs();
		});
		size = '80%';
	}

	if(dropdownType === 'PANEL') {
		dropdownContent = makePanelChooserContent();
		size = `${rect.width-2}px`;
	}

	let dropDown = makeElement({
		tag: 'dialog',
		id: 'nav-dropdown',
		attributes: {style: `
			left: ${rect.left+1}px;
			top: ${top}px;
			width: ${size};
			background-color: ${parentStyle.backgroundColor};
			border-color: ${parentStyle.backgroundColor};
		`}
	});

	dropDown.addEventListener('mouseleave', closeAllDialogs);

	addAsChildren(dropDown, dropdownContent);
	// log(`dropDown:`);
	// log(dropDown);
	closeAllDialogs();
	document.getElementById('app__wrapper').appendChild(dropDown);
	// log(`showNavDropdown`, 'end');
}

function makePageChooserContent(){
	// log(`makePageChooserContent`, 'start');

	let content = makeElement();
	let pageButton;
	let toc = getCurrentProjectEditor().nav.tableOfContents;

	Object.keys(toc).forEach((pageName) => {
		if(pageName !== 'Open project' && toc[pageName].pageMaker){
		// if(pageName !== 'Open project'){
			pageButton = makeNavButton_Page(pageName, toc[pageName].iconName);
			content.appendChild(pageButton);
		}
	});

	// log(`makePageChooserContent`, 'end');
	return content;
}

function makeNavButton_Page(pageName, iconName) {
	let button = makeElement({tag: 'button', className: 'nav-dropdown__button'});
	button.innerHTML += makeIcon({name: iconName, color: accentColors.blue.l90});
	button.appendChild(makeElement({content: pageName}));
	button.addEventListener('click', () => getCurrentProjectEditor().navigate(pageName));
	return button;
}

function makePanelChooserContent(){
	// log(`makePanelChooserContent`, 'start');

	let content = makeElement();
	let pageButton;
	let panels = listOfPanels();
	let shownPanels = ['Attributes', 'Layers', 'History', 'Guides'];

	shownPanels.forEach((panelName) => {
		pageButton = makeNavButton_Panel(panelName, panels[panelName].iconName);
		content.appendChild(pageButton);
	});

	// log(`makePanelChooserContent`, 'end');
	return content;
}

function makeNavButton_Panel(panelName, iconName) {
	let button = makeElement({tag: 'button', className: 'nav-dropdown__button'});
	button.innerHTML += makeIcon({name: iconName, color: accentColors.blue.l90});
	button.appendChild(makeElement({content: panelName}));
	button.addEventListener('click', () => {
		const editor = getCurrentProjectEditor();
		editor.nav.panel = panelName;
		editor.navigate();
	});
	return button;
}

/**
 * List of panels the editor supports
 */
function listOfPanels() {
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