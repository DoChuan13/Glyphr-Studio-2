import { addAsChildren, makeElement, textToNode } from '../common/dom';
import { showModalDialog } from '../controls/dialogs/dialogs';
import { makeOneSettingsRow } from './settings';

export function makeSettingsTabContentFont() {
	const tabContent = makeElement({
		tag: 'div',
		className: 'settings-page__tab-content settings-table',
		id: 'tab-content__font',
		innerHTML: `
			<h1>Font metadata</h1>
			<p>
				These settings will be exported with any font you save,
				and will be used around Glyphr Studio while you are making edits.
			</p>
		`,
	});

	addAsChildren(tabContent, [
		makeOneSettingsRow('font', 'family'),
		makeOneSettingsRow('font', 'style'),
		makeOneSettingsRow('font', 'version'),
		makeOneSettingsRow('font', 'description'),
		makeOneSettingsRow('font', 'panose'),
		makePanoseLauncherRow(),
		textToNode('<h2>Font metrics</h2>'),
		textToNode('<h3>Key metrics</h3>'),
		makeOneSettingsRow('font', 'upm'),
		makeOneSettingsRow('font', 'ascent'),
		makeOneSettingsRow('font', 'descent'),
		makeOneSettingsRow('font', 'capHeight'),
		makeOneSettingsRow('font', 'xHeight'),
		textToNode('<h3>Other metrics</h3>'),
		makeOneSettingsRow('font', 'overshoot'),
		makeOneSettingsRow('font', 'lineGap'),
		makeOneSettingsRow('font', 'italicAngle'),
		textToNode('<h2>Links</h2>'),
		makeOneSettingsRow('font', 'designer'),
		makeOneSettingsRow('font', 'designerURL'),
		makeOneSettingsRow('font', 'manufacturer'),
		makeOneSettingsRow('font', 'manufacturerURL'),
		makeOneSettingsRow('font', 'license'),
		makeOneSettingsRow('font', 'licenseURL'),
		makeOneSettingsRow('font', 'copyright'),
		makeOneSettingsRow('font', 'trademark'),
		textToNode('<h2>Properties for SVG Fonts</h2>'),
		makeOneSettingsRow('font', 'variant'),
		makeOneSettingsRow('font', 'weight'),
		makeOneSettingsRow('font', 'stretch'),
		makeOneSettingsRow('font', 'stemv'),
		makeOneSettingsRow('font', 'stemh'),
		makeOneSettingsRow('font', 'slope'),
		makeOneSettingsRow('font', 'underlinePosition'),
		makeOneSettingsRow('font', 'underlineThickness'),
		makeOneSettingsRow('font', 'strikethroughPosition'),
		makeOneSettingsRow('font', 'strikethroughThickness'),
		makeOneSettingsRow('font', 'overlinePosition'),
		makeOneSettingsRow('font', 'overlineThickness'),
	]);

	return tabContent;
}

function makePanoseLauncherRow() {
	const button = makeElement({ tag: 'a', content: 'Launch the interactive PANOSE builder' });
	button.addEventListener('click', showPanoseBuilderDialog);
	return [
		textToNode('<span></span>'),
		textToNode('<span></span>'),
		button,
		textToNode('<span></span>'),
	]
}

function showPanoseBuilderDialog() {
	let dialogWrapper = makeElement({
		innerHTML: `
			<h1>PANOSE builder</h1>
			<p>
				PANOSE is a system that uses ten digits to describe the font's visual style.  A good overview can be found on <a href="https://monotype.github.io/panose/pan1.htm" target="_blank">Monotype's GitHub page</a>. Each digit has a special meaning based on its position. There are many details that will go into choosing the right values for each digit, so having the PANOSE reference website open will help you choose.
				<br><br>
				This builder only contains the value names for each digit. Once you are done deciding which digit goes in each spot, the result will be saved back to the Settings page.
			</p>
			<div class="settings-page__panose-builder-table">
				<div class="list__column-header">value</div>
				<div class="list__column-header">name</div>
				<div class="list__column-header">options</div>

				<div id="panose-0-value" class="panose-value">#</div>
				<div id="panose-0-name" class="panose-name">Family Kind</div>
				<option-chooser id="panose-0-chooser">
					<option>Any</option>
					<option>No Fit</option>
					<option>Latin Text</option>
					<option>Latin Hand Written</option>
					<option>Latin Decorative</option>
					<option>Latin Symbol</option>
				</option-chooser>

				<div id="panose-1-value" class="panose-value">#</div>
				<div id="panose-1-name" class="panose-name"></div>
				<option-chooser id="panose-1-chooser"></option-chooser>

				<div id="panose-2-value" class="panose-value">#</div>
				<div id="panose-2-name" class="panose-name"></div>
				<option-chooser id="panose-2-chooser"></option-chooser>

				<div id="panose-3-value" class="panose-value">#</div>
				<div id="panose-3-name" class="panose-name"></div>
				<option-chooser id="panose-3-chooser"></option-chooser>

				<div id="panose-4-value" class="panose-value">#</div>
				<div id="panose-4-name" class="panose-name"></div>
				<option-chooser id="panose-4-chooser"></option-chooser>

				<div id="panose-5-value" class="panose-value">#</div>
				<div id="panose-5-name" class="panose-name"></div>
				<option-chooser id="panose-5-chooser"></option-chooser>

				<div id="panose-6-value" class="panose-value">#</div>
				<div id="panose-6-name" class="panose-name"></div>
				<option-chooser id="panose-6-chooser"></option-chooser>

				<div id="panose-7-value" class="panose-value">#</div>
				<div id="panose-7-name" class="panose-name"></div>
				<option-chooser id="panose-7-chooser"></option-chooser>

				<div id="panose-8-value" class="panose-value">#</div>
				<div id="panose-8-name" class="panose-name"></div>
				<option-chooser id="panose-8-chooser"></option-chooser>

				<div id="panose-9-value" class="panose-value">#</div>
				<div id="panose-9-name" class="panose-name"></div>
				<option-chooser id="panose-9-chooser"></option-chooser>
			</div>
			<br><br>
			<fancy-button>Save</fancy-button>
			<fancy-button secondary>Cancel</fancy-button>
	`});
	showModalDialog(dialogWrapper, 600);
	refreshPanoseBuilderTable();
}

function refreshPanoseBuilderTable() {
	let displayedValues = '0 _ _ _ _ _ _ _ _ _';
	let values = displayedValues.split(' ');

	for (let i = 0; i < 10; i++) {
		document.getElementById(`panose-${i}-value`).innerHTML = values[i];
	}

}