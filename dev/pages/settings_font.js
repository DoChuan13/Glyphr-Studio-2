/**
  Page > Font Settings
  HTML and associated functions for this page.
**/

/*
  function loadPage_fontsettings() {
    // debug("LOADING PAGE >> loadPage_fontsettings");
    // SETTINGS
    let ps = getCurrentProject().projectSettings;
    let meta = getCurrentProject().metadata;

    let content = '<h1 class=\'pagetitle\'>Font Settings</h1><div class=\'pagecontent textpage\'>';

    content += '<h1>Font Name</h1>';
    content += '<input type=\'text\' maxlength=31 style=\'width:300px; padding:8px; font-size:1.2em;\' value=\''+meta.font_family+'\' onchange=\'getCurrentProject().metadata.font_family = this.value.substr(0, 31);\'/><span class=\'unit\'>(max 31 characters)</span>';

    content += '<h1>Glyph Proportions</h1>';

    content += '<h3>Key Metrics</h3>'+
          '<table class=\'settingstable\'>'+
          '<tr><td>Ascent height: </td><td><input type=\'number\' value=\''+ps.ascent+'\' onchange=\'getCurrentProject().projectSettings.ascent = Math.abs(parseInt(this.value));\'></td><td><span class=\'unit\'>(em units)</span></td></tr>' +
          '<tr><td>Cap height: </td><td><input type=\'number\' value=\''+ps.capheight+'\' onchange=\'getCurrentProject().projectSettings.capheight = Math.abs(parseInt(this.value));\'></td><td><span class=\'unit\'>(em units)</span></td></tr>' +
          '<tr><td>x Height: </td><td><input type=\'number\' id=\'metric-xheight\' value=\''+ps.xheight+'\' onchange=\'getCurrentProject().projectSettings.xheight = Math.abs(parseInt(this.value));\'></td><td><span class=\'unit\'>(em units)</span></td></tr>' +
          '<tr><td>Descent height: </td><td><input type=\'number\' id=\'metric-des\' value=\''+ps.descent+'\' onchange=\'getCurrentProject().projectSettings.descent = Math.abs(parseInt(this.value))*-1;\'/></td><td><span class=\'unit\'>(em units)</span></td></tr>' +
          '<tr><td><b>Total Units per Em: </b></td><td><input type=\'number\' value=\''+ps.upm+'\' onchange=\'getCurrentProject().projectSettings.upm = Math.abs(parseInt(this.value));\'/></td><td><span class=\'unit\'>(em units)</span></td></tr>' +
          '</table>';

    content += '<h3>Overshoot</h3>'+
          'Round letters usually extend a little above the x height line and below the baseline. ' +
          'A light guideline will show this overshoot distance.<br>' +
          '<table class=\'settingstable\'>'+
          '<tr><td>Overshoot:</td><td><input type=\'number\' value=\''+ps.overshoot+'\' onchange=\'getCurrentProject().projectSettings.overshoot = this.value;\'></td><td><span class=\'unit\'>(em units)</span></td></tr>'+
          '</table>';

    content += '<h3>Default Side Bearings</h3>' +
          'Side Bearings are the amount of blank space that is added to the left or right of glyphs when they are displayed. This metric can be set individually per glyph, but will default to this value if not set. '+
          '<table class=\'settingstable\'>'+
          '<tr><td>Left Side Bearing: </td><td><input type=\'number\' value=\''+ps.defaultLSB+'\' onchange=\'getCurrentProject().projectSettings.defaultLSB = Math.abs(parseInt(this.value)) || 0;\'></td><td><span class=\'unit\'>(em units)</span></td></tr>'+
          '<tr><td>Right Side Bearing: </td><td><input type=\'number\' value=\''+ps.defaultRSB+'\' onchange=\'getCurrentProject().projectSettings.defaultRSB = Math.abs(parseInt(this.value)) || 0;\'></td><td><span class=\'unit\'>(em units)</span></td></tr>'+
          '</table>';


    // GLYPHS
    content += '<h1>Glyph Ranges</h1>'+
          'Glyph ranges are based on the <a href=\'http://en.wikipedia.org/wiki/Unicode\' target=\'_blank\'>Unicode Standard</a>, which assigns a <a href=\'http://en.wikipedia.org/wiki/Hexadecimal\' target=\'_blank\'>hexadecimal number</a> to all possible glyphs in a font. ';

    content += '<h3>Standard Glyph Ranges&ensp;'+helpUI(unicodeInputHelp())+'</h3>'+
          'The most common glyph sets are built into Glyphr Studio, and can be toggled with the checkboxes below.';

    content += '<table class=\'settingstable\'><tr>'+
          '<td class=\'uicolumn\'>'+checkUI('getCurrentProject().projectSettings.glyphrange.basicLatin', ps.glyphrange.basicLatin)+'</td>'+
          '<td><label for=\'basicLatin\'><b>Basic Latin</b> - Unicode glyphs 0x0020 through 0x007E</label></td></tr>'+
          '<tr><td>&nbsp;</td><td colspan=\'2\'><div class=\'glyphrangepreview\'>';
          let bl = _UI.basiclatinorder;
          for (let t=0; t<bl.length; t++) {
 content += (hexToChars(bl[t]) + ' ');
}
    content += '</div></td></tr></table>';

    content += '<table class=\'settingstable\'><tr>'+
          '<td class=\'uicolumn\'>'+checkUI('getCurrentProject().projectSettings.glyphrange.latinSupplement', ps.glyphrange.latinSupplement)+'</td>'+
          '<td><label for=\'latinSupplement\'><b>Latin Supplement</b> - Unicode glyphs 0x00A0 through 0x00FF</label></td></tr>'+
          '<tr><td>&nbsp;</td><td colspan=\'2\'><div class=\'glyphrangepreview\'>';
          for (let s=_UI.glyphrange.latinSupplement.begin; s<=_UI.glyphrange.latinSupplement.end; s++) {
 content += (decToHTML(s) + ' ');
}
    content += '</div></td></tr></table>';

    content += '<table class=\'settingstable\'><tr>'+
          '<td class=\'uicolumn\'>'+checkUI('getCurrentProject().projectSettings.glyphrange.latinExtendedA', ps.glyphrange.latinExtendedA)+'</td>'+
          '<td><label for=\'latinExtendedA\'><b>Latin Extended-A</b> - Unicode glyphs 0x0100 through 0x017F</label></td></tr>'+
          '<tr><td>&nbsp;</td><td colspan=\'2\'><div class=\'glyphrangepreview\'>';
          for (let a=_UI.glyphrange.latinExtendedA.begin; a<=_UI.glyphrange.latinExtendedA.end; a++) {
 content += (hexToChars(a) + ' ');
}
    content += '</div></td></tr></table>';


    content += '<table class=\'settingstable\'><tr>'+
          '<td class=\'uicolumn\'>'+checkUI('getCurrentProject().projectSettings.glyphrange.latinExtendedB', ps.glyphrange.latinExtendedB)+'</td>'+
          '<td><label for=\'latinExtendedB\'><b>Latin Extended-B</b> - Unicode glyphs 0x0180 through 0x024F</label></td></tr>'+
          '<tr><td>&nbsp;</td><td colspan=\'2\'><div class=\'glyphrangepreview\'>';
          for (let b=_UI.glyphrange.latinExtendedB.begin; b<=_UI.glyphrange.latinExtendedB.end; b++) {
 content += (hexToChars(b) + ' ');
}
    content += '</div></td></tr></table>';

    content += '<h3>Custom Glyph Ranges&ensp;'+helpUI(unicodeInputHelp())+'</h3>'+
          'Additional glyph ranges above 0x024F can be included here. '+
          'A nice overview of glyph ranges can be found at <a href=\'https://en.wikipedia.org/wiki/Unicode_block\' target=\'_blank\'>Wikipedia\'s Unicode Block page</a>.<br>' +
          'Custom glyph ranges are inclusive, must be unique (non-overlapping), must be greater than 0x024F and less than 0xFFFF.<br><br>'+
          '<table class=\'settingstable\'><tr><td class=\'uicolumn\'>'+checkUI('getCurrentProject().projectSettings.glyphrange.filternoncharpoints', ps.glyphrange.filternoncharpoints)+'</td>'+
          '<td><label for=\'filternoncharpoints\'>Filter out reserved Unicode code points.</label></td></tr></table>'+
          '<table class=\'settingstable\'><tr>'+
          '<td>begin:<br><input type=\'text\' id=\'customrangebegin\'></td>'+
          '<td>end:<br><input type=\'text\' id=\'customrangeend\'></td>'+
          '<td style=\'vertical-align:bottom;\'><button onclick=\'addCustomGlyphRange();\'>Add Range</button></td>'+
          '<td style=\'vertical-align:bottom;\'><div id=\'customrangeerror\'>bad range input</div></td>'+
          '</tr></table>'+
          '<div id=\'customrangetable\'></div>';


    // METADATA
    content += '<h1>Font Metadata</h1>';

    content += '<table class="settingstable metadatatable">';
    for (let m in meta) {
 if (meta.hasOwnProperty(m) && m!== 'font_family') {
      if (meta[m] === '{{sectionbreak}}') {
        content += '<tr><td colspan="3"><p style="margin-bottom:10px;">';
        if (m === 'shared') {
          content += '<h2>Shared</h2>';
          content += 'These properties are shared between all font file formats.';
        } else if (m === 'otf') {
          content += '<h2>OTF</h2>';
          content += 'These properties will be saved with Open Type files when they are exported.';
        } else if (m === 'svg') {
          content += '<h2>SVG</h2>';
          content += 'These properties are based on the CSS @font-face standard. More information can be found at the W3C\'s <a href=\'http://www.w3.org/TR/CSS2/fonts.html\' target=\'_blank\'>Fonts Page</a> and their <a href=\'http://www.w3.org/TR/2008/REC-CSS2-20080411/fonts.html#select\' target=\'_blank\'>CSS @font-face Page</a>.';
        }
        content += '</p></td></tr>';
      } else {
        meta[m] = meta[m] || '""';
        content += '<tr>';
        content += '<td class="propname" style="padding-top:8px;">' + m.replace(/_/g, '-') + '</td>';
        content += '<td><input type="text" value="'+escapeTableValue(meta[m])+'" onchange="getCurrentProject().metadata.'+m+' = trim(this.value);"/></td>';
        content += '<td class="prophelp" style="padding-top:8px;">'+_UI.metadataHelp[m]+'</td>';
        content += '</tr>';
      }
    }
}
    content += '</table>';


    // Finish and show table
    content += '</div>';
    getEditDocument().getElementById('mainwrapper').innerHTML = content;
    updateCustomRangeTable();
  }


  function escapeTableValue(val) {
    // debug('\n escapeTableValue - START');
    // debug('\t typeof val = ' + typeof val);
    // debug(val);

    if (typeof val === 'string') {
      if (val === '""' || val === '\'\'') return '';
      if (val.indexOf('\'') > -1) {
        // debug('\t replacing single quotes');
        // val = val.replace(/'/g, '\x27');
        val = val.replace(/'/g, '&apos;');
      }
      if (val.indexOf('"') > -1) {
        // debug('\t replacing double quotes');
        // val = val.replace(/"/g, '\x22');
        val = val.replace(/"/g, '&quot;');
      }
    }

    // debug('\t returning ' + JSON.stringify(val));
    return val;
  }
*/