import { getCurrentProject, getCurrentProjectEditor } from '../app/main.js';
import { showToast } from '../controls/dialogs/dialogs.js';
import { ioSVG_convertSVGTagsToGlyph } from '../formats_io/svg_outline_import.js';
import { copyShapesFromTo } from '../panels/actions.js';
import { cancelDefaultEventActions } from './events.js';

export function importSVGtoCurrentItem(svgData, sourceText = 'SVG') {
	// log(`importSVGtoCurrentItem`, 'start');

	const tempGlyph = ioSVG_convertSVGTagsToGlyph(svgData);

	if (tempGlyph && tempGlyph.shapes.length) {
		// Flip
		tempGlyph.flipNS();
		tempGlyph.reverseWinding();

		// Add new Glyph Shapes
		const editor = getCurrentProjectEditor();
		const newShapes = copyShapesFromTo(tempGlyph, editor.selectedItem);
		// log('tempGlyph');
		// log(tempGlyph);

		// log(`updated item glyph`);
		// log(editor.selectedItem);

		editor.history.addState('Imported SVG to glyph ' + editor.selectedItem.name);
		const msShapes = editor.multiSelect.shapes;
		msShapes.clear();
		newShapes.forEach((shape) => msShapes.add(shape));

		if (getCurrentProject().settings.app.moveShapesOnSVGDragDrop) {
			msShapes.setShapePosition(0, msShapes.maxes.height);
		}

		editor.publish('currentItem', editor.selectedItem);
		showToast(`Imported ${tempGlyph.shapes.length} shapes from ${sourceText}`);
	} else {
		showToast('Could not import pasted SVG code.');
	}
	// log(`importSVGtoCurrentItem`, 'end');
}

export async function handlePasteSVGonEditCanvas(event) {
	// log(`handlePasteSVGonEditCanvas`, 'start');
	// log(event);
	// Stop data actually being pasted into div
	// cancelDefaultEventActions(event);

	// log(`\n⮟event.clipboardData⮟`);
	// log(event.clipboardData);
	// log(`\n⮟window.clipboardData⮟`);
	// log(window.clipboardData);
	// log(`\n⮟navigator.clipboard⮟`);
	// log(navigator.clipboard);

	const clipboardData = event.clipboardData || window.clipboardData;
	if (clipboardData) {
		// log(clipboardData);
		let text = clipboardData.getData('Text');
		importSVGtoCurrentItem(text, '<br>the operating system clipboard');
	} else if (navigator?.clipboard?.readText) {
		navigator.clipboard.readText().then((text) => {
			if (text) {
				// log(`text: ${text}`);
				importSVGtoCurrentItem(text, '<br>the operating system clipboard');
			} else {
				showToast('Could not import SVG from the operating system clipboard');
			}
		});
	} else {
		showToast('Could not import SVG from the operating system clipboard');
		// log(`handlePasteSVGonEditCanvas`, 'end');
		return;
	}

	// log(`handlePasteSVGonEditCanvas`, 'end');
}

export function handleDropSVGonEditCanvas(event) {
	// log(`handleDropSVGonEditCanvas`, 'start');

	cancelDefaultEventActions(event);

	const filesInput = event.dataTransfer;
	const file = filesInput.files[0] || '';
	// log('\t filename: ' + f.name);
	let fileSuffix = file.name.split('.');
	fileSuffix = fileSuffix[fileSuffix.length - 1].toLowerCase();
	// log('\t fileSuffix = ' + fileSuffix);

	const reader = new FileReader();

	if (fileSuffix === 'svg') {
		reader.onload = function () {
			importSVGtoCurrentItem(reader.result, '<br>from the dropped SVG file');
		};

		reader.readAsText(file);
	} else {
		showToast('Only SVG files can be dropped on the canvas');
	}
	// log(`handleDropSVGonEditCanvas`, 'end');
}
