import { makeElement } from '../controls/controls.js';
import { log } from '../common/functions.js';
import makePanel_GlyphAttributes from '../panels/attributes_glyph.js';
import { getCurrentProjectEditor } from '../app/main.js';

/**
 * Page > Glyph Edit
 * The main edit surface for Glyphr Studio
 * Comprised of Panels of tools, and the Edit Canvas
 */
export default class PageGlyphEdit {
  /**
   * Initialize this page
   */
  constructor() {}

  /**
   * Load the Open Project page
   * @returns {object} HTML Element + callback function
   */
  pageLoader() {
    log(`PageGlyphEdit.pageLoader`, 'start');
    let selectedGlyph = getCurrentProjectEditor().selectedGlyph;
    log('selected glyph');
    log(selectedGlyph);

    const content = makeElement({
      tag: 'div',
      id: 'app__page',
      innerHTML: `
      <div class="glyph-edit__page">
        <div class="glyph-edit__left-area">
          <div class="glyph-edit__nav-area">
            <button class="nav-button l1">
              <span class="nav-button__super-title">PAGE</span>
              <span class="nav-button__title">Glyph edit</span>
            </button>
            <button class="nav-button l2">
              <span class="nav-button__super-title">EDITING</span>
              <span class="nav-button__title">${selectedGlyph.name}</span>
            </button>
            <button class="nav-button l3" class="glyph-edit__nav-area__span">
              <span class="nav-button__super-title">PANEL</span>
              <span class="nav-button__title">Attributes</span>
            </button>
          </div>
          <div id="glyph-edit__panel">
            <h3>Glyph</h3>
            ${makePanel_GlyphAttributes()}
          </div>
        </div>
        <div class="glyph-edit__tools-area">t<br>o<br>o<br>l<br>s</div>
        <div class="glyph-edit__right-area">
          <canvas-display glyphs="A"></canvas-display>
        </div>
      </div>
    `,
    });

    const callback = function () {
      // let can = document.querySelector('canvas-display');
      // if (can) can.redraw();
      // log(`PageGlyphEdit.pageLoader.callback`, 'end');
    };

    log(`PageGlyphEdit.pageLoader`, 'end');

    return { content: content, callback: callback };
  }
}

/* cSpell:disable */
/*

// -------------------
// Redraw
// -------------------
  function redraw_GlyphEdit() {
    // log('redraw_GlyphEdit', 'start');
    _UI.redrawing = true;

    let sg = getSelectedWorkItem();
    let editmode = getEditMode();

    // if (sg) sg.calcMaxes();
    // log('Selected WI ' + sg.name);

    // draw grids
    drawGrid();
    drawGuides();

    // load glyph info
    if (sg && sg.shapes.length) {
      let v = getView('Redraw');
      if (sg.contextGlyphs) drawContextGlyphs();
      sg.drawGlyph(_UI.glyphEditCTX, v);
    } else {
      _UI.redrawing = false;
      return;
    }

    _UI.multiSelect.shapes.draw_PathOutline();

    if (editmode === 'arrow') {
      _UI.multiSelect.shapes.draw_BoundingBox();
      _UI.multiSelect.shapes.draw_BoundingBoxHandles();
    } else if (editmode === 'rotate') {
      _UI.multiSelect.shapes.draw_RotationAffordance();
    } else if (editmode === 'pen') {
      if (_UI.eventhandlers.multi) sg.drawMultiSelectAffordances(_UI.colors.blue);
      _UI.multiSelect.points.draw_PathPointHandles();
      _UI.multiSelect.shapes.draw_PathPoints();
      // _UI.multiSelect.points.draw_PathPoints();

      if (_UI.eventhandlers.hoverpoint) {
        let hp = _UI.eventhandlers.hoverpoint;
        _UI.glyphEditCTX.fillStyle = hp.fill;
        _UI.glyphEditCTX.fillRect(hp.x, hp.y, hp.size, hp.size);
      }
    } else if (editmode === 'newpath') {
      _UI.multiSelect.points.draw_PathPointHandles();
      _UI.multiSelect.shapes.draw_PathPoints();
      // _UI.multiSelect.points.draw_PathPoints();
    }

    _UI.redrawing = false;
    // log('redraw_GlyphEdit', 'end');
  }
*/
