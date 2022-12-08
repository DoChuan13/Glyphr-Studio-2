import { makeElement } from '../common/dom.js';
import { makeGlyphrStudioLogo } from '../common/graphics.js';
import { makeErrorMessageBox } from '../controls/dialogs.js';
import { GlyphrStudioProject } from '../project_data/glyphr_studio_project.js';
import { projects } from '../samples/samples.js';
import { uiColors, accentColors } from '../common/colors.js';
import { importOTFFont } from '../io/otf_import.js';
// import { importSVGFont } from '../io/svg_font_import.js';
import { importGlyphrProjectFromText } from '../project_editor/import.js';
import { getGlyphrStudioApp } from '../app/main.js';
import { cancelDefaultEventActions } from '../edit_canvas/events.js';

/**
 * Page > Open Project
 * The first page you see when you open Glyphr Studio.
 * HTML and associated functions for this page.
 */

let importRange = {
	begin: 0x0020,
	end: 0x024f,
};

export const importOverflowCount = 326;

export function makePage_OpenProject() {
	// log(`makePage_OpenProject`, 'start');
	const recent = 1000 * 60 * 60 * 24 * 7; // seven days in milliseconds
	let recentMessage = '';
	const app = getGlyphrStudioApp();
	if (Date.now() - app.versionDate < recent) {
		recentMessage = ` - <a href="http://glyphrstudio.com/help/overview_updates.html" target="_blank">recently updated!</a>`;
	}

	const content = makeElement({
		tag: 'div',
		id: 'app__page',
		innerHTML: `
		<table style="height:100%; width:100%;"><tr>
		<td id="open-project__left-area" vertical-align="middle">
		<div id="open-project__logo"></div>

			<span class="open-project__version-name">${app.versionName}</span>

			<span class="open-project__version-number">${app.version.split('.')[2]}${recentMessage}</span>

			<div class="open-project__blurb">
				For more information visit <a href="http://www.glyphrstudio.com" target="_blank">www.glyphrstudio.com</a><br>
				Glyphr Studio is licensed under a <a href="https://www.gnu.org/licenses/gpl.html" target="_blank">GNU General Public License</a>,
				which is a free / open source "copyleft" license. You are free to use, distribute, and modify Glyphr Studio as long as
				this license and its freeness stays intact.
			</div>
		</td>
		<td id="open-project__right-area" vertical-align="middle">${makeTabs()}</td>
		</tr></table>
		<input type="file" style="display:none" id="openProjectFileChooser"/>`,
	});

	// Tab click
	content.querySelector('#newTab').addEventListener('click', () => changeTab('new'));
	content.querySelector('#loadTab').addEventListener('click', () => changeTab('load'));
	content.querySelector('#examplesTab').addEventListener('click', () => changeTab('examples'));

	// Dragging and dropping to load
	const tableRight = content.querySelector('#open-project__right-area');
	tableRight.addEventListener('dragover', handleDragOver);
	tableRight.addEventListener('drop', handleDrop);
	tableRight.addEventListener('dragleave', handleDragLeave);

	const tableLeft = content.querySelector('#open-project__left-area');
	tableLeft.addEventListener('dragover', handleDragOver);
	tableLeft.addEventListener('drop', handleDrop);
	tableLeft.addEventListener('dragleave', handleDragLeave);

	content.querySelector('#openProjectFileChooser').addEventListener('change', handleDrop);

	// Sample Projects click
	content.querySelector('#loadModegg').addEventListener('click', () => handleLoadSample('modegg'));
	content
		.querySelector('#loadCaliforniaGothic')
		.addEventListener('click', () => handleLoadSample('californiaGothic'));
	content
		.querySelector('#loadMerriweatherSans')
		.addEventListener('click', () => handleLoadSample('merriweatherSans'));

	// Starting a project
	content.querySelector('#openProjectCreateNewProject').addEventListener('click', handleNewProject);

	// log(`makePage_OpenProject`, 'end');
	return content;
}

/**
 * Create the tabs for the load project page
 * @returns {string} html content
 */
function makeTabs() {
	// TABS
	let con = `
	<div class="open-project__tabs">
		<button id="newTab">new</button><button id="loadTab">load</button><button id="examplesTab">examples</button>
	</div>`;

	// LOAD
	con += `
	<div class="open-project__tab-content" id="openProjectLoadContent" style="display: none;">
		<h2>Load a file</h2>
		<fancy-button dark onclick="document.getElementById('openProjectFileChooser').click();">
			Browse for a File
		</fancy-button>&ensp; or Drag and Drop:
		<div id="open-project__drop-target">
			Glyphr Studio Project &ensp;(.txt)<br>
			Open Type or True Type Font &ensp;(.otf or .ttf)<br>
			SVG Font &ensp;(.svg)
		</div>
		<div style="width:335px;">${makeErrorMessageBox()}</div>
	</div>`;

	// NEW
	con += `
	<div class="open-project__tab-content" id="openProjectNewContent" style="display: none;">
		<h2>Start a new Glyphr Studio Project</h2>
		Project name: &nbsp; <input id="open-project__project-name" type="text" value="My Font" autofocus/><br>
		<fancy-button id="openProjectCreateNewProject">Start a new font from scratch</fancy-button>
	</div>`;

	// EXAMPLES
	con += `
	<div class="open-project__tab-content" id="openProjectExampleProjects" style="display: none;">
		<h2>Load an example project</h2>

		Modegg is a project that utilizes Glyphr Studio features, like Components:<br><br>
		<fancy-button dark id="loadModegg">Modegg</fancy-button><br><br>

		California Gothic is an all-caps display font:<br><br>
		<fancy-button dark id="loadCaliforniaGothic">California Gothic</fancy-button><br><br>

		Merriweather Sans is an open-source font imported from an Open Type file:<br><br>
		<fancy-button dark id="loadMerriweatherSans">Merriweather Sans</fancy-button><br><br>
	</div>`;

	return '<div class="open-project__tab-wrapper">' + con + '</div>';
}

/**
 * Handle tab changes
 * @param {string} tab - which tab to select
 */
function changeTab(tab) {
	const contentNew = document.getElementById('openProjectNewContent');
	const contentLoad = document.getElementById('openProjectLoadContent');
	const contentExamples = document.getElementById('openProjectExampleProjects');
	// let contentRecent = document.getElementById('recent_content');

	const tabNew = document.getElementById('newTab');
	const tabLoad = document.getElementById('loadTab');
	const tabExamples = document.getElementById('examplesTab');
	// let tabRecent = document.getElementById('recent_tab');

	contentNew.style.display = 'none';
	contentLoad.style.display = 'none';
	contentExamples.style.display = 'none';
	// contentRecent.style.display = 'none';

	tabNew.style.borderBottomColor = 'rgba(127, 127, 127, 0.5)';
	tabLoad.style.borderBottomColor = 'rgba(127, 127, 127, 0.5)';
	tabExamples.style.borderBottomColor = 'rgba(127, 127, 127, 0.5)';
	// tabRecent.style.borderBottomColor = 'rgba(127, 127, 127, 0.5)';

	if (tab === 'load') {
		contentLoad.style.display = 'block';
		tabLoad.style.borderBottomColor = '#2EB5FA';
	} else if (tab === 'examples') {
		contentExamples.style.display = 'block';
		tabExamples.style.borderBottomColor = '#2EB5FA';
	} else {
		// default to new
		contentNew.style.display = 'block';
		tabNew.style.borderBottomColor = '#2EB5FA';
	}
}

/**
 * Handle file drop
 * @param {object} event - drop event
 */
function handleDrop(event) {
	const app = getGlyphrStudioApp();
	// log('handleDrop', 'start');
	document.getElementById('open-project__right-area').innerHTML = 'Loading File...';
	document.getElementById('open-project__right-area').style.backgroundColor = uiColors.offWhite;

	cancelDefaultEventActions(event);

	let f = event.dataTransfer || document.getElementById('openProjectFileChooser');
	f = f.files[0];
	// log('filename: ' + f.name);
	let fname = f.name.split('.');
	fname = fname[fname.length - 1].toLowerCase();
	// log('fname = ' + fname);

	const reader = new FileReader();

	if (fname === 'otf' || fname === 'ttf') {
		reader.onload = function () {
			// log('reader.onload::OTF or TTF', 'start');
			app.temp.droppedFileContent = reader.result;
			importOTFFont();
			// log('reader.onload:: OTF or TTF', 'end');
		};

		reader.readAsArrayBuffer(f);
	} else if (fname === 'svg' || fname === 'txt') {
		reader.onload = function () {
			// log('reader.onload::SVG or TXT', 'start');
			app.temp.droppedFileContent = reader.result;
			if (fname === 'svg') {
				// log('File = .svg');
				// importSVGFont();
			} else if (fname === 'txt') {
				// log('File = .txt');
				importGlyphrProjectFromText();
				// navigate();
			}
			// log('reader.onload::SVG OR TXT', 'end');
		};

		reader.readAsText(f);
	} else {
		// let con = '<h3>Unsupported file type</h3>';
		// con += "Glyphr Studio can't import ." + fname + ' files.<br>';
		// con += 'Try loading another file.';
		// document.getElementById(
		//   'open-project__right-area'
		// ).innerHTML = makeTabs();
		// changeTab('load');
		// showErrorMessageBox(con);
		// document.getElementById(
		//   'open-project__right-area'
		// ).style.backgroundColor = _UI.colors.gray.offWhite;
	}

	// log('handleDrop', 'end');
}

/**
 * Handle Message event
 * @param {object} event - event
 */
function handleMessage(event) {
	const app = getGlyphrStudioApp();
	// assume strings are SVG fonts
	app.temp.droppedFileContent = event.data;

	if (typeof event.data === 'string') {
		// importSVGFont(false);
		// assume array buffers are otf fonts
	} else if (event.data instanceof ArrayBuffer) {
		// importOTFFont(false);
	}
}

/**
 * Handle DragOver event
 * @param {object} event - event
 */
function handleDragOver(event) {
	cancelDefaultEventActions(event);
	event.dataTransfer.dropEffect = 'copy';

	const dropZone = document.getElementById('open-project__right-area');
	dropZone.style.backgroundColor = accentColors.blue.l95;
	dropZone.innerHTML = 'Drop it!';
}

/**
 * Handle DragLeave event
 * @param {object} event - event
 */
function handleDragLeave(event) {
	cancelDefaultEventActions(event);

	const dropZone = document.getElementById('open-project__right-area');
	dropZone.style.backgroundColor = accentColors.gray.offWhite;
	dropZone.innerHTML = makeTabs();
	changeTab('load');
}

/**
 * Create a new project from scratch
 */
function handleNewProject() {
	const app = getGlyphrStudioApp();
	setTimeout(function () {
		const editor = app.getCurrentProjectEditor();
		editor.project = new GlyphrStudioProject();
		editor.nav.page = 'Glyph edit';
		app.navigate();
	}, 5);
}

/**
 * Load a project sample
 * @param {string} name - which sample to load
 */
function handleLoadSample(name) {
	const app = getGlyphrStudioApp();
	document.getElementById('openProjectExampleProjects').innerHTML =
		'<h2>Load an Example project</h2>Loading example project...';

	setTimeout(function () {
		let editor = app.getCurrentProjectEditor();
		editor.project = new GlyphrStudioProject(projects[name]);
		editor.nav.page = 'Glyph edit';
		app.navigate();
	}, 5);
}

// --------------------------------------------------------------
// OLD IMPORT STUFF
// --------------------------------------------------------------
function isOutOfBounds(uni) {
	if (!uni.length) return true;

	for (let u = 0; u < uni.length; u++) {
		if (parseInt(uni[u]) > importRange.end || parseInt(uni[u]) < importRange.begin) return true;
	}

	return false;
}

function make_ImportFilter(chars, kerns, functionName) {
	let re =
		'<div class="openproject_tile" style="width:500px; height:auto;">' +
		'<h2>Whoa, there...</h2><br>' +
		"The font you're trying to import has <b>" +
		chars +
		' glyphs</b>';
	if (kerns) re += ' and <b>' + kerns + ' kern pairs</b>.  ';
	else re += '.  ';
	re +=
		'Glyphr Studio has a hard time with super-large fonts like this.  ' +
		'We recommend pairing it down a little:<br><br>';

	re += '<table>';

	re +=
		'<tr><td class="checkcol"><input type="checkbox" onclick="checkFilter(\'basic\');" id="basic" checked/></td><td>';
	re +=
		'<h3>Only import Latin glyphs</h3>' +
		'This includes Latin and Latin Extended Unicode ranges<br>(0x0020 - 0x024F).<br><br>';
	re += '</td></tr>';

	re +=
		'<tr><td class="checkcol"><input type="checkbox" onclick="checkFilter(\'custom\');" id="custom"/></td><td>';
	re +=
		'<h3>Import a custom range of glyphs</h3>' +
		'A nice overview of glyph ranges can be found at<br><a href="https://en.wikipedia.org/wiki/Unicode_block" target="_blank">Wikipedia\'s Unicode Block page</a>.<br>' +
		'<table class="settingstable"><tr>' +
		"<td>begin:<br><input type=\"text\" onchange=\"checkFilter('custom');document.getElementById('import-font-button').disabled = 'disabled';\" value=\"" +
		decToHex(importRange.begin) +
		'" id="custom-range-begin"></td>' +
		"<td>end:<br><input type=\"text\" onchange=\"checkFilter('custom');document.getElementById('import-font-button').disabled = 'disabled';\" value=\"" +
		decToHex(importRange.end) +
		'" id="custom-range-end"></td>' +
		'<td><br><button onclick="checkFilter(\'custom\');">Set Range</button></td>' +
		'<td style="padding-top:20px;">' +
		'</td>' +
		'<td><br><div id="custom-range-error">bad range input</div></td>' +
		'</tr></table><br>';
	re += '</td></tr>';

	re +=
		'<tr><td class="checkcol"><input type="checkbox" onclick="checkFilter(\'everything\');" id="everything"/></td><td>';
	re += '<h3>Import all the glyphs</h3>' + "Don't say we did't try to warn you.";
	re += '</td></tr>';

	re += '</table>';

	re +=
		'<br><br><button class="button__call-to-action" id="import-font-button" onclick="' +
		functionName +
		'(true);">Import Font</button>';

	return re;
}

function setFontImportRange() {
	const range = getCustomRange(false);
	if (range) {
		importRange = range;
		document.getElementById('custom-range-begin').value = range.begin;
		document.getElementById('custom-range-end').value = range.end;
	}
}

function checkFilter(id) {
	if (id === 'basic') {
		document.getElementById('basic').checked = true;
		document.getElementById('custom').checked = false;
		document.getElementById('everything').checked = false;
		importRange.begin = 0x0020;
		importRange.end = 0x024f;
	} else if (id === 'custom') {
		document.getElementById('basic').checked = false;
		document.getElementById('custom').checked = true;
		document.getElementById('everything').checked = false;
		setFontImportRange();
	} else if (id === 'everything') {
		document.getElementById('basic').checked = false;
		document.getElementById('custom').checked = false;
		document.getElementById('everything').checked = true;
		importRange.begin = 0x0000;
		importRange.end = 0xffff;
	}

	document.getElementById('import-font-button').disabled = false;
}
