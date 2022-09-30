// ----------------------------------------------------------------
// Resize - resizes whole paths (Arrow / Pointer)
// ----------------------------------------------------------------

import { getCurrentProjectEditor } from '../../app/main.js';
import { setCursor } from '../cursors.js';
import { eventHandlerData } from '../events.js';
import { checkForMouseOverHotspot, clickEmptySpace, eventHandler_PathResize } from '../events_mouse.js';
import { clickTool, getPathAtLocation } from './tools.js';

export class Tool_Resize {
	constructor() {
		this.dragging = false;
		this.resizing = false;
		this.rotating = false;
		this.dragSelecting = false;
		this.didStuff = false;
		this.clickedPath = false;
		eventHandlerData.handle = false;

		this.mousedown = function (ev) {
			// log('Tool_Resize.mousedown', 'start');
			// log('x:y ' + eventHandlerData.mouseX + ':' + eventHandlerData.mouseY);
			this.didStuff = false;
			let eh = eventHandlerData;
			eh.handle = false;
			eh.lastX = eh.mouseX;
			eh.firstX = eh.mouseX;
			eh.lastY = eh.mouseY;
			eh.firstY = eh.mouseY;

			this.clickedPath = getPathAtLocation(eh.mouseX, eh.mouseY);
			const editor = getCurrentProjectEditor();
			let selectedPaths = editor.multiSelect.paths;

			eh.handle = selectedPaths.isOverBoundingBoxHandle(eh.mouseX, eh.mouseY);

			// log('clickedPath: ' + this.clickedPath);
			// log('corner: ' + eh.handle);
			this.resizing = false;
			this.dragging = false;
			this.rotating = false;
			this.dragSelecting = false;

			if (eh.handle) {
				if (eh.handle === 'rotate') {
					// log('mousedown - setting rotating = true');
					this.rotating = true;
					eh.rotationCenter = selectedPaths.maxes.center;
					eh.rotationStartTopY =
						selectedPaths.maxes.yMax +
						editor.rotateHandleHeight / editor.view.dz;
				} else {
					// log('clicked on eh.handle: ' + eh.handle);
					this.resizing = true;
				}
				setCursor(eh.handle);
			} else if (this.clickedPath) {
				// log('clicked on path = true');
				this.dragging = true;
			} else if (!eh.multi) {
				// log('clicked on nothing');
				clickEmptySpace();
				this.dragSelecting = true;
				// TODO hotspots
				// findAndCallHotspot(eh.mouseX, eh.mouseY);
			}

			// editor.editCanvas.redraw({ calledBy: 'Event Handler Tool_Resize mousedown' });
		};


		this.mousemove = function (ev) {
			// log(`Tool_Resize.mousemove`, 'start');

			let eh = eventHandlerData;
			const editor = getCurrentProjectEditor();
			let selectedPaths = editor.multiSelect.paths;
			this.didStuff = false;
			let corner = eh.handle || selectedPaths.isOverBoundingBoxHandle(eh.mouseX, eh.mouseY);
			// TODO rapidly shaking new basic paths makes straight sides curved
			if (this.dragging) {
				// log('detected DRAGGING');

				let dz = editor.view.dz;
				let dx = (eh.mouseX - eh.lastX) / dz || 0;
				let dy = (eh.lastY - eh.mouseY) / dz || 0;
				let cur = 'arrowSquare';

				if (this.clickedPath) {
					if (eh.multi)
						selectedPaths.add(this.clickedPath);
					else if (!selectedPaths.isSelected(this.clickedPath)) {
						selectedPaths.select(this.clickedPath);
					}

					if (this.clickedPath.objType === 'ComponentInstance')
						clickTool('pathEdit');
					editor.nav.panel = 'Attributes';
				}

				let singlePath = selectedPaths.singleton;

				if (singlePath) {
					cur = selectedPaths.isOverBoundingBoxHandle(eh.mouseX, eh.mouseY);
					if (!cur) cur = getPathAtLocation(eh.mouseX, eh.mouseY) ? 'arrowSquare' : 'arrow';
					// log(`singleton`);
					dx = singlePath.xLock ? 0 : dx;
					dy = singlePath.yLock ? 0 : dy;
				}

				// log(`dx: ${dx}`);
				// log(`dy: ${dy}`);

				selectedPaths.updatePathPosition(dx, dy);
				this.didStuff = true;
				setCursor(cur);

			} else if (this.resizing) {
				// log('detected RESIZING');
				eventHandler_PathResize();
				this.didStuff = true;

			} else if (this.rotating) {
				// log(`detected ROTATING`);
				let a1 = calculateAngle({ x: cXsX(eh.mouseX), y: cYsY(eh.mouseY) }, eh.rotationCenter);
				let a2 = calculateAngle({ x: cXsX(eh.lastX), y: cYsY(eh.lastY) }, eh.rotationCenter);
				selectedPaths.rotate(a1 - a2, eh.rotationCenter);
				this.didStuff = true;
				setCursor('rotate');

			} else if (corner) {
				// log(`detected CORNER HOVER ${corner}`);
				// hovering over a corner
				setCursor(corner);

			} else if (eh.multi) {
				// log(`detected MULTI-SELECT`);
				setCursor('arrowPlus');

			} else if (getPathAtLocation(eh.mouseX, eh.mouseY)) {
				// log(`detected PATH HOVER`);
				setCursor('arrowSquare');

			} else {
				// log('detected NOTHING');
				setCursor('arrow');
			}

			// checkForMouseOverHotspot(eh.mouseX, eh.mouseY);

			if (this.didStuff) {
				// log('did stuff');
				eh.lastX = eh.mouseX;
				eh.lastY = eh.mouseY;
				eh.undoQueueHasChanged = true;
				editor.publish('currentGlyph', editor.selectedItem);
			} else {
				// log(`did NOT do stuff`);
			}

			// log(`Tool_Resize.mousemove`, 'end');
		};


		this.mouseup = function () {
			// log('Mouse Up');
			let eh = eventHandlerData;
			const editor = getCurrentProjectEditor();

			// New Basic Path
			if (eh.newBasicPathMaxes) {
				eh.newBasicPathMaxes = false;
				eh.lastX = eh.firstX;
				eh.lastY = eh.firstY;
				eventHandler_PathResize();
			}

			// Clicked a path to select
			if (this.clickedPath && !this.didStuff) {
				if (eh.multi) {
					editor.multiSelect.paths.toggle(this.clickedPath);
				} else {
					editor.multiSelect.paths.select(this.clickedPath);
				}

				if (this.clickedPath.objType === 'ComponentInstance') {
					clickTool('pathEdit');
				} else {
					setCursor('arrowSquare');
				}

				editor.publish('whichPathIsSelected', this.clickedPath);
				editor.nav.panel = 'Attributes';
				editor.navigate();
				// editor.publish('selectedPanel', editor.nav.panel);
			}

			// Resized a path
			// if (this.resizing || this.rotating) editor.multiSelect.paths.recalculateMaxes();
			// updateCurrentGlyphWidth();

			// Finish Up
			this.clickedPath = false;
			this.didStuff = false;
			this.dragging = false;
			this.resizing = false;
			this.rotating = false;
			eh.handle = false;
			eh.lastX = -100;
			eh.lastY = -100;
			eh.firstX = -100;
			eh.firstY = -100;
			eh.rotationCenter = false;
			eh.rotationStartTopY = false;
			// TODO history
			// if (eh.undoQueueHasChanged) historyPut('Path Edit tool');
			eh.undoQueueHasChanged = false;
			editor.editCanvas.redraw({ calledBy: 'Event Handler Tool_Resize mouseup' });
			// log('EVENTHANDLER - after Tool_Resize Mouse Up REDRAW');
		};
	}
}
