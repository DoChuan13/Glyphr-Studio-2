// ----------------------------------------------------------------
// Path Add Point - adds points to an existing path (Pen Plus)
// ----------------------------------------------------------------

import { getCurrentProjectEditor } from '../../app/main.js';
import { round } from '../../common/functions.js';
import {
	closeAllNotations,
	makeAndShowPathAddPointNotation,
} from '../../controls/dialogs/dialogs.js';
import { Path } from '../../project_data/path.js';
import { canvasUIPointSize } from '../draw_edit_affordances.js';
import { cXsX, cYsY, sXcX, sYcY } from '../edit_canvas.js';
import { eventHandlerData } from '../events.js';
import { clickTool, getShapeAtLocation } from './tools.js';

export class Tool_PathAddPoint {
	constructor() {
		this.previewPoint = false;
	}
	mousedown(ev) {
		const editor = getCurrentProjectEditor();
		let singlePath = editor.multiSelect.shapes.singleton;
		let clickedShape = getShapeAtLocation(
			eventHandlerData.mousePosition.x,
			eventHandlerData.mousePosition.y
		);

		if (this.previewPoint && singlePath && singlePath.objType !== 'ComponentInstance') {
			let addedPoint = singlePath.insertPathPoint(
				this.previewPoint.point,
				this.previewPoint.split,
				eventHandlerData.isShiftDown
			);
			if (addedPoint) {
				editor.multiSelect.points.select(addedPoint);
				editor.publish('currentPath', singlePath);
				editor.history.addState('Added point to path');
			}
		} else if (clickedShape) {
			editor.multiSelect.points.clear();
			if (eventHandlerData.isCtrlDown) editor.multiSelect.shapes.add(clickedShape);
			else editor.multiSelect.shapes.select(clickedShape);
			if (clickedShape.objType === 'ComponentInstance') {
				clickTool('pathEdit');
				editor.publish('currentComponentInstance');
			} else {
				editor.publish('whichShapeIsSelected');
			}
			editor.nav.panel = 'Attributes';
		} else {
			editor.selectedTool = 'newPath';
			editor.publish('whichToolIsSelected', editor.selectedTool);
			eventHandlerData.currentToolHandler = editor.eventHandlers.tool_addPath;
			eventHandlerData.currentToolHandler.dragging = true;
			eventHandlerData.currentToolHandler.firstPoint = true;
			eventHandlerData.currentToolHandler.mousedown(ev);
		}

		eventHandlerData.hoverPoint = false;
	}

	mousemove() {
		const editor = getCurrentProjectEditor();
		let singlePath = editor.multiSelect.shapes.singleton;
		let mousePoint = eventHandlerData.mousePosition;
		if (singlePath) {
			let curvePoint = singlePath.findClosestPointOnCurve({
				x: cXsX(mousePoint.x),
				y: cYsY(mousePoint.y),
			});
			if (eventHandlerData.isShiftDown) {
				curvePoint.x = round(curvePoint.x);
				curvePoint.y = round(curvePoint.y);
			}
			if (curvePoint && curvePoint.distance < 20) {
				this.previewPoint = curvePoint;
				let canvasPoint = {
					x: sXcX(curvePoint.x) - canvasUIPointSize / 2,
					y: sYcY(curvePoint.y) - canvasUIPointSize / 2,
				};
				makeAndShowPathAddPointNotation(curvePoint);
				eventHandlerData.hoverPoint = canvasPoint;
			} else {
				this.previewPoint = false;
				eventHandlerData.hoverPoint = false;
				closeAllNotations();
			}
		} else {
			this.previewPoint = false;
			eventHandlerData.hoverPoint = false;
			closeAllNotations();
		}

		editor.editCanvas.redraw();
	}

	mouseup() {}
}
