import { accentColors, uiColors } from './colors.js';
import { log } from './functions.js';

// -------------------
// Logos
// -------------------

/**
 * Creates an SVG of the GS Logo
 * @param {object} oa - object argument
 * @returns {string}
 */
export function makeGlyphrStudioLogo(oa) {
  oa = oa || {};
  const fill = oa.fill || accentColors.blue.l65;
  const width = oa.width || 184;
  const height = width * (55 / 184); // dimensions of the native logo

  const re =
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="' +
    width +
    'px" height="' +
    height +
    'px" viewBox="0 0 ' +
    width +
    ' ' +
    height +
    '" enable-background="new 0 0 ' +
    width +
    ' ' +
    height +
    '" xml:space="preserve">' +
    '<g id="LOGO" fill="' +
    fill +
    '" transform="scale(' +
    width / 184 +
    ')" >' +
    '<polygon points="42,0 36,0 36,40 40,40 40,4 42,4"/>' +
    '<path d="M17,11C8.6,11,0,16.8,0,28c0,8.6,8.8,12.5,17,12.5c4.7,0,9.7-1.3,13-4.1V42c0,5.8-6.7,8.5-13,8.5c-5.5,0-11.4-2-12.7-6.5H6v-4H0v2c0,8.6,8.8,12.5,17,12.5S34,50.6,34,42V28C34,16.8,25.4,11,17,11z M17,36.5c-6.3,0-13-2.7-13-8.5c0-8.9,6.7-13,13-13s13,4.1,13,13C30,33.8,23.3,36.5,17,36.5z"/>' +
    '<path d="M95,11c-8.4,0-17,5.8-17,17v26h6v-4h-2V36.4c3.3,2.8,8.3,4.1,13,4.1c8.2,0,17-3.9,17-12.5C112,16.8,103.4,11,95,11z M95,36.5c-6.3,0-13-2.7-13-8.5c0-8.9,6.7-13,13-13s13,4.1,13,13C108,33.8,101.3,36.5,95,36.5z"/>' +
    '<path d="M176,13.4c-5.5-3.2-12.5-3.2-18,0c-5.2,3-8,8.2-8,14.6v12h6v-4h-2v-8c0-5,2.1-8.9,6-11.2c4.2-2.4,9.8-2.4,14,0c3.9,2.2,6,6.2,6,11.2h4C184,21.5,181.2,16.3,176,13.4z"/>' +
    '<path d="M72,28c0,5.8-6.7,8.5-13,8.5S46,33.8,46,28V16h2v-4h-6v16.5h0c0.3,8.2,8.9,12,17,12c4.7,0,9.7-1.3,13-4.1V42c0,5.8-6.7,8.5-13,8.5c-5.5,0-11.4-2-12.7-6.5H48v-4h-6v2c0,8.6,8.8,12.5,17,12.5S76,50.6,76,42V28V12h-4V28z"/>' +
    '<path d="M144,40h4V28c0-11.2-8.6-17-17-17c-4.8,0-9.7,1.9-13,5.7V4h2V0h-6v40h6v-4h-2v-8c0-8.9,6.7-13,13-13s13,4.1,13,13V40z"/>' +
    '<path d="M159.8,48.6c-1.4,0-2.8-1-2.8-2.8V42h1.4v1H158v2.7c0,1.3,0.9,1.8,1.8,1.8c0.9,0,1.8-0.6,1.8-1.8V43h-0.4v-1h1.4v3.7C162.6,47.6,161.2,48.6,159.8,48.6z"/>' +
    '<path d="M180.8,48.6c-0.7,0-1.4-0.3-1.9-0.7c-0.6-0.5-0.9-1.2-0.9-2.1v-0.9c0-0.9,0.3-1.6,0.9-2.1c0.5-0.5,1.2-0.7,1.9-0.7c1.4,0,2.8,1,2.8,2.8v0.9C183.6,47.6,182.2,48.6,180.8,48.6z M180.8,43c-0.5,0-0.9,0.2-1.3,0.5c-0.4,0.3-0.6,0.8-0.6,1.4v0.9c0,0.6,0.2,1,0.6,1.4c0.9,0.8,3.1,0.6,3.1-1.4v-0.9C182.6,43.6,181.7,43,180.8,43z"/>' +
    '<path d="M145.2,48.6H143v-1.4h1v0.4h1.2c0.8,0,1.8-0.6,1.8-1.8h-4v-1c0-1.9,1.4-2.8,2.9-2.8h2.2v1.4h-1V43h-1.2c-0.9,0-1.8,0.6-1.9,1.8h4v1C148,47.6,146.6,48.6,145.2,48.6z"/>' +
    '<polygon points="176.4,43.4 176.4,42 171.3,42 171.3,43.4 172.3,43.4 172.3,43 173.4,43 173.4,47.6 172.3,47.6 172.3,47.1 171.3,47.1 171.3,48.6 176.4,48.6 176.4,47.1 175.4,47.1 175.4,47.6 174.4,47.6 174.4,43 175.4,43 175.4,43.4"/>' +
    '<polygon points="150,42 150,43.4 151,43.4 151,43 152,43 152,47.6 151.6,47.6 151.6,48.6 153.4,48.6 153.4,47.6 153,47.6 153,43 154,43 154,43.4 155,43.4 155,42"/>' +
    '<path d="M166.5,48.6h-1.9V42h1.9c1.9,0,2.8,1.4,2.8,2.8v0.9C169.3,47.1,168.4,48.6,166.5,48.6z M165.6,47.6h0.9c1.3,0,1.8-0.9,1.8-1.8v-0.9c0-0.9-0.6-1.8-1.8-1.8h-0.9V47.6z"/>' +
    '</g></svg>';
  return re;
}



// -------------------
// Icons
// -------------------
let icons = {};

export function makeIcon(oa) {
  log(`makeIcon`, 'start');
  log(oa);

  let size = oa.size || 50;
  let width = oa.width || size;
  let height = oa.height || size;
  let color = oa.color || 'rgb(76,81,86)';
  let hoverColor = oa.hoverColor || 'rgb(0,170,225)';
  if (oa.hoverColor === false) hoverColor = color;

  let con = '';

  if (icons[oa.name]){
    if (icons[oa.name].outline) {
      con = icons[oa.name].outline;
    } else {
      con = icons[oa.name];
    }
  }


  let re = `
    <svg version="1.1"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" width="${width}px" height="${height}px" viewBox="0 0 ${size} ${size}"
    >
      <defs></defs>
      <rect
        fill="transparent" width="${width}" height="${height}"
        customGuideTransparency="mouseOverIcon('${hoverColor}', this);"
        onmouseout="mouseOutIcon('${color}', this);"
      />
      <g pointer-events="none" fill="${color}">
        ${con}
      </g>
    </svg>
  `;

  log(`makeIcon`, 'end');

  return re;
}

// Panels
icons.panel_chooser =
  '<path d="M14.6,20.2v2.4H9.9v-1.7c-1.3,1.3-2.7,1.9-4.3,1.9c-1.2,0-2.3-0.4-3.2-1.2C1.5,20.8,1,19.7,1,18.5c0-1.3,0.5-2.3,1.5-3.2c1-0.8,2.1-1.3,3.5-1.3c1.3,0,2.5,0.4,3.7,1.2v-1.3c0-0.7-0.1-1.2-0.2-1.6c-0.1-0.4-0.4-0.7-0.9-1c-0.5-0.3-1.1-0.5-1.9-0.5c-1.3,0-2.3,0.5-2.9,1.6l-2.6-0.7c1.1-2.1,3.1-3.2,5.9-3.2c1,0,1.9,0.1,2.7,0.4c0.7,0.3,1.3,0.6,1.7,1.1c0.4,0.4,0.6,0.9,0.7,1.4c0.1,0.5,0.2,1.3,0.2,2.4v6.3H14.6z M9.7,17.5c-1.2-0.9-2.3-1.4-3.5-1.4c-0.7,0-1.4,0.2-1.9,0.6c-0.5,0.4-0.7,1-0.7,1.7c0,0.6,0.2,1.2,0.7,1.6c0.4,0.4,1,0.6,1.8,0.6c1.3,0,2.5-0.5,3.7-1.6V17.5z"/><path d="M17,22.6v-2.4h2.4V5.4H17V3h5v7.9c1.3-1.5,3-2.3,4.9-2.3c1.9,0,3.4,0.6,4.7,1.9c1.3,1.3,1.9,3,1.9,5.1c0,2-0.6,3.7-1.9,5.1c-1.2,1.4-2.8,2.1-4.8,2.1c-1.1,0-2.1-0.2-3-0.7c-0.9-0.5-1.5-1-1.9-1.6v2H17z M22.1,15.8c0,1.4,0.4,2.5,1.3,3.4c0.9,0.8,1.9,1.2,3,1.2c1.2,0,2.2-0.4,3.1-1.3c0.9-0.9,1.3-2.1,1.3-3.5c0-1.4-0.4-2.5-1.3-3.3c-0.9-0.8-1.9-1.2-3-1.2c-1.1,0-2.1,0.4-3,1.2C22.6,13.1,22.1,14.2,22.1,15.8z"/><path d="M48.6,8.8v5.1h-2.4c-0.1-1-0.5-1.7-1.2-2.3c-0.7-0.5-1.5-0.8-2.4-0.8c-1.2,0-2.2,0.4-2.9,1.3c-0.8,0.8-1.1,2-1.1,3.3c0,1.3,0.4,2.4,1.1,3.4c0.7,1,1.7,1.5,3.1,1.5c1.9,0,3.2-0.9,4.1-2.7l2.2,1c-1.2,2.7-3.4,4.1-6.4,4.1c-2.2,0-3.9-0.7-5.1-2.2c-1.2-1.5-1.9-3.2-1.9-5.1c0-2.1,0.7-3.8,2-5.1c1.4-1.3,2.9-2,4.7-2c1.5,0,2.8,0.4,3.8,1.3v-1H48.6z"/><path d="M8.8,36L6.1,39h1.8v2.4H1.3V39h2l4.1-4.6l-3.9-4.2H1.6v-2.4H8v2.4H6.3l2.4,2.7l2.4-2.7H9.7v-2.4h6.4v2.4h-2.2l-3.7,4.2l4.2,4.6h1.7v2.4H9.7V39h1.9L8.8,36z"/><path d="M26,41.2l-4.5-11h-2.3v-2.4H26v2.4h-1.6l2.9,7.5l2.9-7.5h-1.8v-2.4H35v2.4h-2l-6.7,17.3h-4.5v-2.3h2.7L26,41.2z"/><path d="M37.3,41.4v-2.2l8.5-9.2h-5.6v2.6h-2.3v-4.8H49v2.4l-8.6,9h6.2v-2.8H49v5H37.3z"/>';

icons.panel_layers =
  '<polygon points="25,22 1,11.5 25,1 49,11.5"/><polygon points="25,31 1,20.5 9,17 25,24 41,17 49,20.5"/><polygon points="25,40 1,29.5 9,26 25,33 41,26 49,29.5"/><polygon points="25,49 1,38.5 9,35 25,42 41,35 49,38.5"/>';

icons.panel_guides =
  '<polygon points="4,33 10,39 10,33 "/><polygon points="48,44 0,44 0,46 48,46 48,44 "/><polygon points="48,13 0,13 0,15 48,15 48,13 "/><polygon points="48,6 0,6 0,7 48,7 48,6 "/><polygon points="48,2 0,2 0,4 48,4 48,2 "/><polygon points="48,29 0,29 0,33 48,33 48,29 "/><polygon points="14,0 10,0 10,48 14,48 14,0 "/><polygon points="44.7,0 43.7,0 43.7,48 44.7,48 44.7,0 "/>';

icons.panel_history =
  '<path d="M43.8,11.6L43,12.3c3.1,3.6,5,8.3,5,13.5c0,11.4-9.3,20.7-20.7,20.7c-9.2,0-17-6.1-19.7-14.4l-1,0.3c2.8,8.8,11,15.1,20.7,15.1c12,0,21.7-9.7,21.7-21.7C49,20.4,47,15.4,43.8,11.6z"/><path d="M27.3,2C15.2,2,5.2,11,3.7,22.7H1l5.1,8.1l5.1-8.1H8.8C10.3,13.8,18,7.1,27.3,7.1c5.2,0,9.8,2.1,13.2,5.5L44.1,9C39.8,4.7,33.8,2,27.3,2z"/><polygon points="35.9,18.2 34.8,17.1 27.4,24.5 25.4,20.4 24,21 26.3,25.6 22.7,29.2 23.8,30.3 27,27 34.1,41.2 35.5,40.6 28.2,25.9"/>';

icons.panel_attributes =
  '<polygon points="2,9 9,16 18,5 15,2 9,10 5,6"/><polygon points="20,45 1,45 1,46 20,46 20,45"/><polygon points="20,37 1,37 1,38 20,38 20,37"/><polygon points="20,41 1,41 1,42 20,42 20,41"/><polygon points="20,28 1,28 1,29 20,29 20,28"/><polygon points="20,20 1,20 1,21 20,21 20,20"/><polygon points="20,24 1,24 1,25 20,25 20,24"/><polygon points="49,12 20,12 20,13 49,13 49,12"/><polygon points="49,4 20,4 20,5 49,5 49,4"/><polygon points="49,8 20,8 20,9 49,9 49,8"/><path d="M24,18v13h25V18H24z M26,27l5-5l5,5H26z M42,27l-5-5h10L42,27z"/><path d="M24,35v13h25V35H24z M26,44l5-5l5,5H26z M42,44l-5-5h10L42,44z"/>';

icons.panel_save =
  '<rect x="6" y="15" width="1" height="5"/><rect x="20" y="4" width="4" height="2"/><rect x="6" width="2" height="11"/><rect x="16" width="2" height="11"/><rect x="6" y="10" width="12" height="2"/><rect x="9" y="15" width="9" height="5"/><rect x="6" y="15" width="11" height="1"/><rect x="6" y="19" width="11" height="1"/><polygon points="5,22 2,19 2,2 24,2 24,0 0,0 0,19.8 4.2,24 24,24 24,22"/><polygon points="24,0 22,0 22,2 22,22 22,24 24,24"/>';

// Pages
icons.page_about =
  '<path d="M25,2.5c10.3,0,16,0,19.3,3.2c3.2,3.2,3.2,8.9,3.2,19.3s0,16-3.2,19.3c-3.2,3.2-8.9,3.2-19.3,3.2c-10.3,0-16,0-19.3-3.2C2.5,41,2.5,35.3,2.5,25s0-16,3.2-19.3C9,2.5,14.7,2.5,25,2.5 M25,0C14,0,8,0,4,4C0,8,0,14,0,25s0,17,4,21c4,4,10.1,4,21,4s17,0,21-4c4-4,4-10.1,4-21s0-17-4-21C42,0,36,0,25,0L25,0z"/>' +
  '<path d="M22.9,36.7V23h-3.3v-3.7h7.4v17.5h3.3v3.7H19.6v-3.7H22.9z M22.3,12c0-0.7,0.2-1.3,0.7-1.8c0.5-0.5,1.1-0.7,1.8-0.7c0.7,0,1.3,0.2,1.8,0.7c0.5,0.5,0.7,1.1,0.7,1.8c0,0.7-0.2,1.3-0.7,1.8c-0.5,0.5-1.1,0.7-1.8,0.7c-0.7,0-1.3-0.2-1.8-0.7C22.6,13.3,22.3,12.7,22.3,12z"/>';

icons.page_help =
  '<path d="M25,2.5c10.3,0,16,0,19.3,3.2c3.2,3.2,3.2,8.9,3.2,19.3c0,10.3,0,16-3.2,19.3c-3.2,3.2-8.9,3.2-19.3,3.2c-10.3,0-16,0-19.3-3.2C2.5,41,2.5,35.3,2.5,25c0-10.3,0-16,3.2-19.3C9,2.5,14.7,2.5,25,2.5 M25,0C14,0,8,0,4,4C0,8,0,14,0,25s0,17,4,21c4,4,10.1,4,21,4s17,0,21-4c4-4,4-10.1,4-21s0-17-4-21C42,0,36,0,25,0L25,0z"/>' +
  '<path d="M25.2,32.3h-2.3l-0.5-9.7c0.7,0.2,1.4,0.3,2.1,0.3c1.9,0,3.3-0.5,4.1-1.4s1.3-2.1,1.3-3.4c0-1.5-0.5-2.8-1.4-3.6c-0.9-0.9-2.1-1.3-3.5-1.3c-1.7,0-3,0.5-3.8,1.5S20,16.7,20,18.2c0,0.3,0,0.7,0,1.1h-4.1c0-0.4,0-0.7,0-1c0-3,0.9-5.2,2.7-6.6s3.9-2.1,6.3-2.1c2.9,0,5.2,0.8,6.9,2.4c1.6,1.6,2.4,3.7,2.4,6.2c0,2.5-0.8,4.5-2.3,6c-1.5,1.5-3.3,2.2-5.4,2.2c-0.2,0-0.4,0-0.7,0L25.2,32.3z M21.3,40.5v-5.4h5.4v5.4H21.3z"/>';

icons.page_exportFont =
  '<polygon points="30.1,9.9 40.1,0 50,9.9 42.5,9.9 42.5,18.8 37.6,18.8 37.6,9.9   "/>' +
  '<path d="M15.2,12.7l-9.9,9.9V50h29.8V12.7H15.2z M26.7,29.1h-1.9l0.7-2.9H20L18.8,31h4.7l-0.4,1.8h-4.7l-1.3,5.4h1.7l-0.4,1.8H13l0.4-1.8h1.4l2.9-12h-1.5l0.4-1.8h11.3L26.7,29.1z"/>';

icons.page_exportSVG =
  '<polygon points="40.1,0 30.1,9.9 37.6,9.9 37.6,18.8 42.5,18.8 42.5,9.9 50,9.9"/>' +
  '<path d="M5.3,22.7V50h29.8V12.7H15.2L5.3,22.7zM12.7,36.5c-0.5,0.5-1.2,0.8-2,0.8c-0.8,0-1.6-0.3-2.2-0.9v0.7H7.4v-3.3h1.1v0.8c0.5,1,1.2,1.5,2.1,1.5c0.4,0,0.8-0.1,1.1-0.4c0.3-0.3,0.5-0.6,0.5-1.1c0-0.4-0.1-0.7-0.4-0.9c-0.3-0.2-0.7-0.4-1.4-0.6C9.6,33,9,32.8,8.6,32.6c-0.4-0.2-0.7-0.5-0.9-0.8c-0.2-0.4-0.3-0.8-0.3-1.3c0-0.8,0.3-1.4,0.8-1.8C8.6,28.2,9.2,28,10,28c0.7,0,1.4,0.2,2,0.7v-0.6h1.1v2.7H12v-0.6c-0.5-0.7-1.1-1-1.9-1c-0.5,0-0.9,0.1-1.1,0.3c-0.3,0.2-0.4,0.5-0.4,0.8c0,0.2,0.1,0.5,0.2,0.6c0.1,0.2,0.3,0.3,0.5,0.4c0.2,0.1,0.6,0.2,1.2,0.4c0.8,0.2,1.4,0.4,1.7,0.6c0.4,0.2,0.7,0.5,0.9,0.9c0.3,0.4,0.4,0.9,0.4,1.4C13.5,35.4,13.3,36,12.7,36.5zM27.9,28c1.3,0,2.3,0.4,3.2,1.1v-1h1.1v3H31c-0.2-0.5-0.6-0.9-1.1-1.3c-0.6-0.4-1.2-0.6-1.9-0.6c-1,0-1.8,0.3-2.3,1c-0.6,0.7-0.9,1.5-0.9,2.4c0,1.1,0.3,1.9,1,2.6c0.6,0.6,1.4,0.9,2.3,0.9c0.7,0,1.4-0.2,1.9-0.6c0.6-0.4,0.9-0.9,1-1.6h-1.6v-1.1h3.3c0,0.1,0,0.2,0,0.3c0,1.3-0.4,2.3-1.2,3c-0.8,0.8-1.9,1.1-3.3,1.1c-1.6,0-2.8-0.5-3.6-1.4c-0.8-0.9-1.2-2-1.2-3.3c0-1.3,0.4-2.4,1.2-3.3C25.3,28.4,26.5,28,27.9,28zM18.7,35.3l2.2-6h-1.1v-1.1h3.5v1.1h-1.1l-3,8h-1.2l-3-8h-1.1v-1.1h3.6v1.1h-1L18.7,35.3z"/>';

icons.page_importAndExport =
  '<polygon points="40.1,0 30.1,9.9 37.6,9.9 37.6,18.8 42.5,18.8 42.5,9.9 50,9.9"/>' +
  '<polygon points="30,40 40,50 50,40 42.5,40 42.5,31 37.5,31 37.5,40"/>' +
  '<path d="M9.4,30.2c-0.6,0.7-0.9,1.5-0.9,2.5c0,1,0.3,1.9,0.9,2.6s1.4,1,2.3,1c1,0,1.7-0.4,2.4-1.1s0.9-1.5,0.9-2.5c0-1-0.3-1.8-0.9-2.5c-0.6-0.7-1.4-1-2.4-1C10.8,29.2,10,29.6,9.4,30.2z"/>' +
  '<path d="M5.3,22.7V50h29.8V12.7H15.2L5.3,22.7z M25.3,36.2h1.2v-6.9h-1.2v-1.2h7.2v2.8h-1.1v-1.6h-3.5V32h3v1.2h-3v3H29v1.2h-3.7V36.2z M17.1,28.1h7.5v3.5h-1.1v-2.4h-1.9v6.9h1.2v1.2H19v-1.2h1.2v-6.9h-1.9v2.4h-1.1V28.1z M16.6,32.7c0,1.4-0.5,2.5-1.4,3.4s-2.1,1.4-3.5,1.4c-0.9,0-1.7-0.2-2.5-0.6c-0.8-0.4-1.3-1-1.7-1.8C7.2,34.3,7,33.5,7,32.7c0-1.3,0.4-2.5,1.3-3.4c0.9-0.9,2-1.4,3.4-1.4c1.4,0,2.6,0.5,3.5,1.4C16.1,30.3,16.6,31.4,16.6,32.7z"/>';

icons.page_settings =
  '<path d="M50,26.1c0-0.3,0-0.6,0-1c0-2.5-0.4-4.9-1.1-7.2l-4.1-0.6c-0.6-1.5-1.3-2.9-2.1-4.2l1.6-4c-1.6-2-3.6-3.7-5.8-5.2l-3.5,2.2c-1.6-0.8-3.3-1.5-5-1.9l-1.3-4C27.5,0.1,26.3,0,25,0c-1.3,0-2.5,0.1-3.8,0.3l-1.3,4c-1.8,0.4-3.5,1.1-5,1.9L11.4,4C9.3,5.5,7.3,7.2,5.7,9.2l1.6,4c-0.9,1.3-1.6,2.7-2.1,4.2l-4.1,0.6C0.4,20.2,0,22.6,0,25.2c0,0.3,0,0.6,0,1l3.9,2.1c0.2,1.2,0.4,2.3,0.8,3.5l-2.8,3.1C3,37.5,4.6,40,6.6,42.1l4.3-0.9c0.6,0.6,1.3,1.1,2,1.6L12.7,47c2.6,1.5,5.5,2.5,8.5,3l2.7-3.4c0.4,0,0.7,0.1,1.1,0.1c0.4,0,0.7,0,1.1-0.1l2.7,3.4c3.1-0.5,6-1.5,8.5-3l-0.2-4.3c0.7-0.5,1.4-1,2-1.6l4.3,0.9c2-2.2,3.6-4.6,4.7-7.4l-2.8-3.1c0.4-1.1,0.6-2.3,0.8-3.5L50,26.1z M25,41.1c-8.8,0-16-7.2-16-16.1c0-8.9,7.1-16.1,16-16.1c8.8,0,16,7.2,16,16.1C41,33.9,33.8,41.1,25,41.1z"/>' +
  '<path d="M25,36.2c4.2,0,8.7-2,8.7-6.4v-7.2c0-5.7-4.4-8.8-8.7-8.8c-4.3,0-8.7,3-8.7,8.8c0,4.4,4.5,6.4,8.7,6.4c2.4,0,4.9-0.7,6.6-2.1v2.8c0,3-3.4,4.4-6.6,4.4c-2.8,0-5.8-1-6.5-3.3h0.9v-2.1h-3.1v1C16.3,34.2,20.8,36.2,25,36.2z M25,26.9c-3.2,0-6.6-1.4-6.6-4.4c0-4.6,3.4-6.7,6.6-6.7c3.2,0,6.6,2.1,6.6,6.7C31.6,25.6,28.2,26.9,25,26.9z"/>';

icons.page_globalActions =
  '<path d="M46.1,37.1l-7.5-7.5C41.3,26.8,43,23,43,18.8c0-3.6-1.3-7-3.4-9.6c0,1.2-0.3,2.4-0.7,3.8c-1.2,3.5-3.6,7.2-6.8,10.4c-4.6,4.6-10,7.5-14.2,7.6c2.6,2.1,6,3.4,9.6,3.4c4,0,7.6-1.5,10.4-4l3.3,3.3c-8,7.3-20.4,7.1-28.1-0.6c-7.7-7.7-7.9-20.1-0.6-28.1L16,8.4c-2.5,2.8-4,6.4-4,10.4c0,3.6,1.3,6.9,3.3,9.6c3.3,1.7,9.9-1,15.3-6.5c3-3,5.3-6.4,6.3-9.6c0.8-2.3,0.8-4.3,0.2-5.6c-2.6-2.1-6-3.4-9.6-3.4c-4.2,0-8,1.7-10.8,4.4L9.2,0.2C9-0.1,8.7-0.1,8.5,0.2s-0.2,0.5,0,0.7l1.8,1.8c-8.5,9.2-8.3,23.6,0.6,32.5c3.7,3.7,8.3,5.9,13.1,6.6V45c-5.1,0.1-9,0.7-9,1.5v2c0,0.8,4.7,1.5,10.5,1.5S36,49.3,36,48.5v-2c0-0.8-3.9-1.4-9-1.5v-3c0.1,0,0.3,0,0.4,0c5.7,0,11.4-2.1,15.9-6.3l2,2c0.1,0.1,0.2,0.2,0.4,0.2s0.3-0.1,0.4-0.2C46.3,37.6,46.3,37.3,46.1,37.1z"/>';

icons.page_livePreview =
  '<path d="M4,36v-3h3V17.5H3V22H0v-8h19v8h-3v-4.5h-4V33h3v3H4z"/>' +
  '<path d="M37,33v3h-7v-1.7c-1.3,1.3-2.6,2-4.1,2c-1.8,0-3.3-0.7-4.5-2.2c-1.2-1.5-1.8-3.3-1.8-5.4c0-2.1,0.6-3.9,1.8-5.4 c1.2-1.5,2.7-2.2,4.5-2.2c1.7,0,3,0.7,4.1,2v-6h-2v-3h6v19H37z M30.2,28.7c0-1.4-0.3-2.4-0.9-3c-0.6-0.6-1.3-0.9-2-0.9 c-0.9,0-1.6,0.4-2.1,1.1c-0.5,0.7-0.7,1.6-0.7,2.8c0,1.1,0.2,2,0.7,2.8c0.5,0.8,1.2,1.1,2.1,1.1c0.8,0,1.5-0.3,2-0.9 S30.2,30.1,30.2,28.7z"/>' +
  '<rect x="42" y="10" width="2" height="32"/><rect x="36" y="8" width="6" height="2"/><rect x="44" y="8" width="6" height="2"/><rect x="36" y="42" width="6" height="2"/><rect x="44" y="42" width="6" height="2"/>';

icons.page_kerning =
  '<path d="M34.1,38.7l-9-23.8h-3.3v-3.4h10.6v3.4h-3.1L36.1,33l6.7-18.1h-3.1v-3.4H50v3.4h-3.3l-8.9,23.8H34.1z"/>' +
  '<path d="M25.3,35.1l-7.4-20.2h3.3v-0.3v-3v0H7.4v0v3v0.3h3.1L3.3,35.1H0v3.4h10.6v-3.4H7.3L9.4,29h9.7l2,6.1h-3.3v3.4h10.5v-3.4H25.3z M10.4,25.8l3.6-11h0.6l3.5,11H10.4z"/>' +
  '<rect y="44" width="27" height="2"/>' +
  '<rect x="26.3" y="40" width="2" height="10"/>' +
  '<rect x="23" y="4" width="27" height="2"/>' +
  '<rect x="21.8" width="2" height="10"/>';

icons.page_ligatures =
  '<path id="ligatures" d="M39.8,39.3V17.1h-5h-0.4h-7h0c0-0.8,0-1.8,0-3.2c0-1.2,0.2-2.9,1.3-3.7c1-0.8,2.4-0.7,3.1-0.6c0,0,1.6,0.4,1.8,1.9c0.2,1.5,1.6,2.5,3,2.3c1.5-0.2,2.5-1.6,2.3-3c-0.5-4.1-4-6.1-6.3-6.5c-2.9-0.5-5.5,0.2-7.5,1.8c-0.9,0.8-1.9,2-2.5,3.8c-1.2-1.7-3.1-2.6-5.7-2.6c-1.9,0-3.5,0.6-4.9,1.9c-1.4,1.2-2.1,3.5-2.1,6.8v1.2H6v4.7h3.9v17.6H6V44h12.3H23h7.3h5H44v-4.7H39.8z M15.2,15.9c0-1.8,0.1-3,0.4-3.5c0.3-0.5,0.8-0.8,1.6-0.8c1.2,0,1.8,0.9,2,2.6l2.7-0.4c0,0,0,0.1,0,0.1c0,1.2,0,2.3,0,3.2h-6.8V15.9z M15.2,39.3V21.8h7v17.6H15.2z M30.4,39.3h-2.9V21.8h7v0h0.1v17.5H30.4z"/>';

icons.page_components =
  '<path d="M0,49.9v-3.3h3.4V25.9H0v-3.3h7v11c1.9-2.1,4.2-3.2,6.9-3.2c2.6,0,4.8,0.9,6.6,2.7c1.8,1.8,2.7,4.2,2.7,7.1c0,2.8-0.9,5.2-2.6,7.1c-1.7,1.9-4,2.9-6.7,2.9c-1.5,0-2.9-0.3-4.2-1C8.5,48.6,7.6,47.8,7,47v2.8H0z M7.1,40.4c0,2,0.6,3.5,1.8,4.7c1.2,1.2,2.6,1.7,4.2,1.7c1.7,0,3.1-0.6,4.3-1.8c1.2-1.2,1.8-2.9,1.8-4.9c0-2-0.6-3.6-1.8-4.7c-1.2-1.1-2.6-1.7-4.2-1.7c-1.6,0-3,0.6-4.2,1.7C7.8,36.6,7.1,38.3,7.1,40.4z"/>' +
  '<path d="M18.9,6.8c0,2,0.6,3.5,1.8,4.7c1.2,1.2,2.6,1.7,4.2,1.7c1.7,0,3.1-0.6,4.3-1.8s1.8-2.9,1.8-4.9c0-2-0.6-3.6-1.8-4.7c-1.2-1.1-2.6-1.7-4.2-1.7c-1.6,0-3,0.6-4.2,1.7S18.9,4.6,18.9,6.8z"/>' +
  '<path d="M50,46.6v3.3h-7.1v-2.8c-1.9,2.1-4.1,3.1-6.8,3.1c-2.5,0-4.6-0.8-6.5-2.5s-2.8-4.1-2.8-7.2c0-3.1,1-5.6,2.9-7.4c1.9-1.8,4.1-2.7,6.5-2.7c2.6,0,4.8,1,6.7,3.1v-7.5h-3.7v-3.3h7.4v24H50z M30.7,40.4c0,2.1,0.6,3.7,1.8,4.8c1.2,1.1,2.6,1.7,4.3,1.7c1.6,0,3-0.6,4.3-1.8c1.2-1.2,1.9-2.8,1.9-4.9c0-2.1-0.6-3.7-1.9-4.8c-1.3-1.1-2.7-1.6-4.3-1.6c-1.7,0-3.1,0.6-4.3,1.9C31.3,37,30.7,38.5,30.7,40.4z"/>' +
  '<rect x="16.4" y="26.6" transform="matrix(0.8321 0.5547 -0.5547 0.8321 18.1105 -5.0629)" width="2" height="1.5"/>' +
  '<rect x="18.1" y="23.6" transform="matrix(0.8321 0.5547 -0.5547 0.8321 17.0248 -6.3814)" width="2" height="2.6"/>' +
  '<rect x="20" y="20.7" transform="matrix(0.8321 0.5547 -0.5547 0.8321 15.7303 -7.9538)" width="2" height="2.6"/>' +
  '<rect x="21.9" y="17.8" transform="matrix(0.8321 0.5547 -0.5547 0.8321 14.4354 -9.5264)" width="2" height="2.6"/>' +
  '<polygon points="25,17.8 23.3,16.7 25,14.2 26.7,16.7"/>' +
  '<rect x="29.6" y="23.9" transform="matrix(0.5547 0.8321 -0.8321 0.5547 34.5215 -14.6524)" width="2.6" height="2"/>' +
  '<rect x="27.7" y="21" transform="matrix(0.5547 0.8321 -0.8321 0.5547 31.2197 -14.3328)" width="2.6" height="2"/>' +
  '<rect x="25.7" y="18.1" transform="matrix(0.5547 0.8321 -0.8321 0.5547 27.9188 -14.0128)" width="2.6" height="2"/>' +
  '<rect x="31.8" y="26.4" transform="matrix(0.5548 0.832 -0.832 0.5548 37.2821 -14.9216)" width="1.5" height="2"/>';

icons.page_glyphEdit =
  '<path d="M15.4,19.4v2.7h-5.3v-1.9c-1.5,1.4-3.1,2.1-4.9,2.1c-1.4,0-2.6-0.5-3.6-1.4c-1-0.9-1.5-2.1-1.5-3.5c0-1.4,0.5-2.6,1.6-3.6c1.1-0.9,2.4-1.4,4-1.4c1.4,0,2.8,0.4,4.2,1.3v-1.5c0-0.8-0.1-1.4-0.2-1.8c-0.1-0.4-0.5-0.8-1-1.1C8,9,7.3,8.8,6.4,8.8c-1.5,0-2.6,0.6-3.3,1.8L0.2,9.9c1.3-2.4,3.5-3.6,6.6-3.6c1.2,0,2.2,0.2,3,0.5c0.8,0.3,1.5,0.7,1.9,1.2c0.4,0.5,0.7,1,0.8,1.6c0.1,0.6,0.2,1.5,0.2,2.7v7.1H15.4z M9.8,16.4c-1.3-1-2.6-1.5-4-1.5c-0.8,0-1.5,0.2-2.1,0.7c-0.6,0.5-0.8,1.1-0.8,1.9c0,0.7,0.2,1.3,0.7,1.8s1.2,0.7,2,0.7c1.5,0,2.8-0.6,4.1-1.8V16.4z"/>' +
  '<path d="M15.9,22.1v-2.7h2.7V2.7h-2.7V0h5.7v8.9c1.5-1.7,3.4-2.6,5.6-2.6c2.1,0,3.9,0.7,5.3,2.2c1.4,1.5,2.2,3.4,2.2,5.8c0,2.3-0.7,4.2-2.1,5.8c-1.4,1.6-3.2,2.3-5.4,2.3c-1.2,0-2.3-0.3-3.4-0.8s-1.7-1.1-2.2-1.8v2.3H15.9z M21.6,14.4c0,1.6,0.5,2.9,1.5,3.8s2.1,1.4,3.4,1.4c1.3,0,2.5-0.5,3.5-1.5c1-1,1.5-2.3,1.5-4c0-1.6-0.5-2.9-1.5-3.8C29,9.5,27.9,9,26.6,9c-1.3,0-2.4,0.5-3.4,1.4C22.1,11.3,21.6,12.7,21.6,14.4z"/>' +
  '<path d="M49.5,6.7v5.8h-2.7c-0.1-1.1-0.6-2-1.4-2.6s-1.7-0.9-2.7-0.9c-1.4,0-2.5,0.5-3.3,1.4c-0.8,1-1.3,2.2-1.3,3.8c0,1.5,0.4,2.7,1.2,3.8s2,1.7,3.5,1.7c2.1,0,3.7-1,4.6-3l2.5,1.2c-1.4,3.1-3.8,4.6-7.2,4.6c-2.4,0-4.4-0.8-5.7-2.5c-1.4-1.7-2.1-3.6-2.1-5.7c0-2.3,0.8-4.2,2.3-5.7c1.5-1.5,3.3-2.3,5.3-2.3c1.7,0,3.1,0.5,4.3,1.5V6.7H49.5z"/>' +
  '<path d="M8.8,36.6l-3.1,3.6h2v2.8H0v-2.8h2.3l4.8-5.4l-4.6-4.9H0.4V27h7.4v2.8h-2l2.9,3.1l2.8-3.1H9.9V27h7.5v2.8h-2.6l-4.3,4.9l5,5.4h2v2.8H9.9v-2.8h2.2L8.8,36.6z"/>' +
  '<path d="M26,42.6l-5.2-12.8h-2.6V27H26v2.8h-1.9l3.4,8.8l3.4-8.8h-2.1V27h7.7v2.8h-2.4L26.3,50H21v-2.7h3.1L26,42.6z"/>' +
  '<path d="M36.3,42.9v-2.6l9.9-10.7h-6.5v3h-2.7V27H50v2.8L40,40.3h7.3V37H50v5.8H36.3z"/>';

// Misc
icons.back =
  '<polygon points="37,23 20,23 25,18 22,15 12,25 22,35 25,32 20,27 37,27 "/>';

icons.more = '<polygon points="0,0 0,10 5,5"/>';

icons.keyboard =
  '<rect x="12" y="29" width="26" height="7"/><rect y="29" width="10" height="7"/><rect y="21" width="8" height="6"/><rect x="10" y="21" width="6" height="6"/><rect x="18" y="21" width="6" height="6"/><rect x="26" y="21" width="6" height="6"/><rect x="34" y="21" width="6" height="6"/><rect x="42" y="21" width="8" height="6"/><rect x="6" y="13" width="6" height="6"/><rect x="14" y="13" width="6" height="6"/><rect x="22" y="13" width="6" height="6"/><rect x="38" y="13" width="6" height="6"/><rect x="30" y="13" width="6" height="6"/><rect x="46" y="13" width="4" height="6"/><rect y="13" width="4" height="6"/><rect x="40" y="29" width="10" height="7"/>';


/*
//  ---------------------
//  CURSORS
//  ---------------------
_UI.cursors.arrow =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAdCAYAAACnmDyCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPJJREFUeNpiYNB2/M9ABcAEJqlgGNigLYtmUMEwoAEPv/7/v+Xszf+UGQY1iFLDmJA5uhpqZHuTCV2AXMOYsAmSYxgTLglSDWPCJ0mKYUyEFBBrGBMxzibGMCZiA5OQYUykRDE+w5hITXi4DGMiJztgM4yJ3CyKbhgTJQUHsmEspGiUN3PCKcdCoiHSJBkEs/nhqX2oElf3PyM6QUINMQFhZK8QStksWA25uv8stPRECVii8hqGIUDg7WLvR7yrQBIQbEyoTAdhfHnNBN0lyKAwNT6dlLAiuqbB5Sqi0lF7VVEj0FX1SEImlFamxrjCEiDAABxblO2iGQyVAAAAAElFTkSuQmCC") 0 0, default';
_UI.cursors.arrowCircle =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAYAAAD5h919AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaJJREFUeNpiYNB2/M9AB8AEJulgGdiiLYtm0MEyoAUPv/7/v+Xszf+0tQxqEa0tY0Lm6Gqo0SwYmdAFaGUZEzZBWljGhEuC2pYx4ZOkpmVMhBRQyzImYhRRwzImYhVSahkTKYopsYyJVA3kWsZETjCQYxkTuZFLqmVMlCRZUixjIcVgeTMnsh3FQqIl0lS1CObyh6f2oUpc3f+MahkWaokJCCMHFd640HYMAOL7YHkIvg8Ww1XDQhUZY5ODy2OxhM/C93/vyh1wdfVz1/wHiaFaBjUMwxIg8M5v8CVY1QNdj2wJDIPEwD6DAkYkjSbAODiLtU2BFFfg4Ly6nxEqJwAk32PEJWo0KALVP2CCxQdWS4CgMDU+nei4wg6EgeqFmcAW4LAEBPoLEmahZ1KkVPgBSD5Ys2Unhr55K9aCqOdQLjtR+ai9qqgR6Kt6JCETZE839k9d/+nLF4akiGCwAMji/tkLQcxeRByR1gY0hvrkLEbyBnoeiBWgIs+hlhyA8h8wMlATaDsqgOMEFbwFJQbqWgSxDGQRO5T3E2jJWxADIMAAQ+gDzqOrNPQAAAAASUVORK5CYII=") 0 0, default';
_UI.cursors.arrowMinus =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAYAAAD5h919AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAShJREFUeNpiYNB2/M9AB8AEJulgGdiiLYtm0MEyoAUPv/7/v+Xszf+0tQxqEa0tY0Lm6Gqo0SwYmdAFaGUZEzZBWljGhEuC2pYx4ZOkpmVMhBRQyzImYhRRwzImYhVSahkTKYopsYyJVA3kWsZETjCQYxkTuZFLqmVMlCRZUixjIcVgeTMnsh3FQqIl0lS1CObyh6f2oUpc3f+MahkWaokJCCMHFaUlAwtWS67uPwutfVEiniplHYYlQODtYu9HLV8xImlEsQSlTYEUV2CLr+5nRJYnaAtYvbajMRjjAIUTFqThbcAgyWHDMLWMRLeUcPmKSB8RlY/aq4oagYbXIwmZoASLtqMUkCWJQ/tz4n2E8Jkx1PCzaOK8QJIXh67PQPWfGYYdAAgwAMo/uhuR9L9QAAAAAElFTkSuQmCC") 0 0, default';
_UI.cursors.arrowPlus =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAYAAAD5h919AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVxJREFUeNpiYNB2/M9AB8AEJulgGdiiLYtm0MEyoAUPv/7/v+Xszf+0tQxqEa0tY0Lm6Gqo0SwYmdAFaGUZEzZBWljGhEuC2pYx4ZOkpmVMhBRQyzImYhRRwzImYhVSahkTKYopsYyJVA3kWsZETjCQYxkTuZFLqmVMlCRZUixjIcVgeTMnsh3FQqIl0lS1CObyh6f2oUpc3f+MahkWaokJCCMHFVFxAZKHYXwWwS25uv8sGKNFPDEAIxTQLUKxBAq8Xez9SPYVwndSQMyLEkfYLAGBrRMbNgMV4/cVboufQuVBccsIYhiDMQ5QOGFBGt4GDJIcNgyNM15GoltKSGEPDgGwKzF9BFKHJb9JE5WP2quKGoGa65GETJCSPCM8TmDBha4GCBhJygywIEaLS6gcKOI/IfkIZNFnIP4CohkZqAlQgxFk0XNYJmeiqkWQYOSDFlXPoT4CA4AAAwCK8s/Dau8eIAAAAABJRU5ErkJggg==") 0 0, default';
_UI.cursors.arrowSquare =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAfCAYAAAD5h919AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUNJREFUeNpiYNB2/M9AB8AEJulgGdiiLYtm0MEyoAUPv/7/v+Xszf+0tQxqEa0tY0Lm6Gqo0SwYmdAFaGUZEzZBWljGhEuC2pYx4ZOkpmVMhBRQyzImYhRRwzImYhVSahkTKYopsYyJVA3kWsZETjCQYxkTuZFLqmVMlCRZUixjIcVgeTMnsh3FQqIl0lS1CObyh6f2oUpc3f+MXIsYwRUfkoFQS0yg3DMwucs3bjH4xGWALGNErzjx2gBVz4LFJyZAybNQQ1AiHhfA8DmWOGXCaQkQeLvY+yErJqtU0HaUAmJeJlyWgMDWiQ2b0ZMzGUASiMEWmWCzBAYKU+PTKfYVOOhAFuCwBAT6CxJmUcFXxOWj9qqiRqCv6pGETEhP3qRFrDE0yZ4lOnlDHPWckYFaAJS6IBGPDTxnYaAe+IxPDiDAAB2lmR3ulvBGAAAAAElFTkSuQmCC") 0 0, default';

_UI.cursors.slice =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAfCAYAAADXwvzvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN1JREFUeNpiYNB2/M9ABmACk2RoZmIgE4A1blk0g2RbKbORHFspt5FUW1E06mqokR84xNqKoZFYW7EGDjG2YtVIjK04o4OQrTg1ErIVbwLAZytejfhsJZjkcNlKUCMuW4lK5NhsJUojNluJzlbotrIQo0nezAlDjIUYDQ9P7QPTl2/cYvCJy/jPcHU/IwtQUBCo4D2yk4CSGBoIp1+gPx5+/Q/GW87eRKFhbJAaokMVZCsIwFyDzUZjbLaCQxSCjYlyLi4NjDhtZWA4A+WZAEPxLPEFp7ZjGj5pgAADAHXih9fZ4xdeAAAAAElFTkSuQmCC") 0 0, default';
_UI.cursors.rotate =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAfCAYAAAD0ma06AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZVJREFUeNrclrFOw0AMQOMqG0KCL+gWUaFMjZgpMyMzK3wSM9/ATHfUThUCuvEFICHmcG7j4DjOna8JQmCpatXz+Z3PPtuQWOV4VnrXH+dgseFVev0sD8YnZ2/4++72xmvr/PJ6u+fh/nC8B+9dBwYrKD/KvMDV87ob7GBoB9dSbTPCrCAS0qN91YGBYLQOmutcgR3CC3QetTxGj7gttAEhGIHySTZbPa0/VO8m2b5bm0swQjVb37DlS+niV3/wv/zi6tR9Tw0ZOK10GzakvTpJpGINixULUHq3WbB4pcVf3JIEjmSWsYe8jIYpySZllAwhRhhKSsoik4rYkkcPPgzsf51FzGWkva8zMtbDxPDPATeF4McEHzirDvhwg822l4ci6NZ2NHgMf+Vad4FSIwiHRVT5naFVAQ/ngvCykUCWJKr0eLfQoNCCJslCdm1LrdRmoLous8RszTTYdHFc0GYUyxDlg3WOiQTVhqOQsLml0OoseGO6lYUF3AB5ijqYngwDd14pTXWB7gFRb3XANvV/5UuAAQBCI5UEkaELxQAAAABJRU5ErkJggg==") 14 15, default';

_UI.cursors.pen =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARJJREFUeNpiYNB2/M9AEQAZQIEhTCAiJzGagVxDwAZIS4gzbFk0g0xDoF54+PX//y1nb5LhHSQDyDMEqBimiTxDoBqRDSDNEDT/k2oIE4yhq6GGIQkSIxw7WPyO7ApCLmFCtxEbwO8SXP6Gxg4hlzCCDTi1Dy4gb+aEYj6yHAhcvnGLwScug4Hh6n5GDC9gAyAN+LyJYUB7ZREKG1e4wAALukBUoA/EJk01gpqxGoBsCNHZmRIAMsAEPeTJKROMsaVAdIycPjATFR5DsCUsqFoDvIbgSpHIqZIRq3cYGM5gS4XoABR2jHhzKR4DYAGPMxqBCckRW+yAxKDiJrD8QFRZAa+AIF4kDrQv3dxASCNAgAEAZ9VjjmJBijwAAAAASUVORK5CYII=") 0 0, default';
_UI.cursors.penCircle =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcBJREFUeNpiYNB2/M8wAIAJTA6A5WCLcxKj6W452GJpCXGGLYtm0NlykGVA/PDr//9bzt78Ty/LmZA5uhpqdPQ50BKYT0G+ppfPmWA+pb/P0eIX5mta+5wJ2ZfogLY+xxK3yL6mlc8xUjU2QBuf44pXaGqnlc+Z0AV84jKwsqntcyZCCi7fuMVATHRQbHF7ZREKm1oWoQMWdIGoQB+IzzTVaGYpVouRLadbJUHv+thE3syJ7hYzQvOyMZA88/DUPryKYQ4EZSlwVru6nxGtTAgAkv1ArAAVeQDEhUB1G/AVJMbYiksQxlagQNUaIFvKZ+H7v3flDria+rlr/oPEoA5iINpyXCUY1lJM2/E+sqUwDBIDyWEPanTLgcEOYhIV9KDg1nYUAHLf41IPjSJFoNoHuFP11f1nMeIOT3yTAISBDhQmmJ2ABYgjNsNBYlBxE7gDr+7/AEpIa7bsxFA/b8VaEPUcymUnueaCxTc0KrCpBScuUIJCjl9o4iqGph8p3HGMXG4v3dxQ2dZXD+WagKMBv0PRsxPIp71AfACeva7uf0vQYgrqeAVwnKKCt8iJi5FmRRMkIcHi9CfMpzAAEGAAoeyCpVoYUnwAAAAASUVORK5CYII=") 0 0, default';
_UI.cursors.penMinus =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVhJREFUeNpiYNB2/M8wAIAJTA6A5WCLcxKj6W452GJpCXGGLYtm0NlykGVA/PDr//9bzt78Ty/LmZA5uhpqdPQ50BKYT0G+ppfPmWA+pb/P0eIX5mta+5wJ2ZfogLY+xxK3yL6mlc8xUjU2QBuf44pXaGqnlc8ZwRaf2gcXkDdzQlGALAcCl2/cYvCJy2BguLqfkWpBjQ2ALCImOii2uL2yCIVNLYvQAQu6QFSgD8Rnmmo0sxSrxciW062SoHd9bIKekulj8dX9Z4m1HKQGhKlbmGg7GmMrLkEYW4ECVWtAE8txlWDUKMUYsVrOwHAGW6mFLejhJRgxjkAq7ViwSJ6FFaUELUUD+BwKVq/tyAs0/zPOfAwtQByBivejG4ZkoQnUkXgdgwZ4gfgz9qBGr7mgFuOzEE2PFJCUxCH7HKj3GV4fg8vqqqJGoIX1RFmIAJ/JlBvmACDAAPWLM0aWt73RAAAAAElFTkSuQmCC") 0 0, default';
_UI.cursors.penPlus =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXpJREFUeNpiYNB2/M8wAIAJTA6A5WCLcxKj6W452GJpCXGGLYtm0NlykGVA/PDr//9bzt78Ty/LmZA5uhpqdPQ50BKYT0G+ppfPmWA+pb/P0eIX5mta+5wJ2ZfogLY+xxK3yL6mlc8xUjU2QBuf44pXaGqnlc+Z0AV84jKwsqntcyZCCi7fuMVATHRQbHF7ZREKm1oWoQMWdIGoQB+IzzTVaGYpVouRLadbJUHv+thE3sxpACy+uv8ssZaD1IAwwSwFLQeIy3bajsbYiksQxlagQNUa4CuUiM/vaJbjKsEIlmLIFms7SgExL7oSRqyWMzCcATEfntpHMOiBUcWIraUK0osRfTC1WC1GdjUei+GGIllMhHo+oPrPOPMxtABxBCrej24Yki9MoAkTmxx2HzMwgIIcv8WX18w8APQFURai+VwKSD5FkjEhuuSCl9VVRY1AC+vxWogJPuMQ+4Isx0iztjqqj58DHf2M9kUmJNj5QJ0UsKVYQgEgwACxwVGVMoHDYAAAAABJRU5ErkJggg==") 0 0, default';
_UI.cursors.penSquare =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWZJREFUeNpiYNB2/M8wAIAJTA6A5WCLcxKj6W452GJpCXGGLYtm0NlykGVA/PDr//9bzt78Ty/LmZA5uhpqdPQ50BKYT0G+ppfPmWA+pb/P0eIX5mta+5wJ2ZfogLY+xxK3yL6mlc8xUjU2QBuf44pXaGqnlc+Z0AV84jKwsqntcyZCCi7fuMVATHRQbHF7ZREKm1oWoQMWdIGoQB+IzzTVaGYpVouRLadbJUHv+thE3syJ7hYzQvOyMZA88/DUPryKYQ4EZSlwVru6nxGlXscHkNWiFSTG2IpLEMZWoEDVGuAqiDD0EyjFUCzHVYJhLcUIWaztKAXEvNhT9dX9Z4GSoDg/A+LiC3oyspoklP6MPVWDLMcZH5jxTfXsBCxAHLEZDhKDipsQ40CSChBwGb1m5gFgsGPzoQk4VGhRcsHL6qqiRqCF9cRaSErwM1K9ZAClXkRCQgfPgY5/RtDHZILPxMgBBBgA4nlavXX9OPwAAAAASUVORK5CYII=") 0 0, default';

_UI.cursors.crosshairs =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHdJREFUeNpiYCAFaDvOB+L/YJpmAGjBw6///4MtIgEwMdABjFoyasngsWSBvJkTmGYYbIARWkQkEPIBw9X9iViLGSL0MoKLilP78KoCB9HV/YywogWZTYxeFmg4E/YJDMAsQMQR8XoHDxgt6kctGbVkaBf1AAEGAMBRMaRlDAehAAAAAElFTkSuQmCC") 12 12, crosshair';
_UI.cursors.crosshairsCircle =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASdJREFUeNpiYCAFaDvOB+L/YJquAGjpw6///4MtpxAwMQwQGLV41OJRixfImzmBaYahChihxV8CIZ8yXN2fiLUIJVcvrBjEh1GKSDQ2SXqRAAs03gi7Ggau7mdEi3Pi9Q49MFotjlpMAmChUVoIAJL9QKwAFXkAxIXArLiBdokLaCmfhe//3pU74IVI/dw1/0FiUAfRzOL7yJbCMEgMJEebONZ2FAAFb4iPO4YUVEwBqEZhoKpFYaDlwqRZDKplQGU11toGLP8BlJDWbNmJITVvxVoQ9RzKZWemeooWU3x44tzFCA52NgZDHS2wEMghHVNnM/z89asRmsK/MNIpO4F82gvEB2DZi5GmpQQkIQmjib4FRgmNLYZYDrKYHcr7CbT0LYgBEGAANUzSIEqdxeYAAAAASUVORK5CYII=") 12 12, crosshair';
_UI.cursors.crosshairsSquare =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAK9JREFUeNpiYCAFaDvOB+L/YJquAGjpw6///4MtpxAwMQwQGLV41OJRixfImzmBaYahChihxV8CIZ8yXN2fiLUIJVcvrBjEh1GKSDQ2SXqRAAs03gi7Ggau7mdEi3Pi9Q49MFotjlpMAmChRTrAKw/Njiy08M3DU/uwikPLeQaaWUwgRKSA5GeWAYheyQGtFknzMaSWSRzNTvhSL+6GAG1TryQO2ee0TNWf8ckBBBgA6OV4hjhWgkEAAAAASUVORK5CYII=") 12 12, crosshair';

//  ---------------------
//  TOOLS
//  ---------------------
function makeToolButton(oa) {
  // log("MAKETOOLBUTTON - oa: " + json(oa));

  let color_outline = _UI.colors.blue.l75;
  let color_fill = _UI.colors.gray.l40;

  if (oa.selected) {
    color_outline = 'black';
    color_fill = 'white';
  } else if (oa.disabled) {
    color_outline = _UI.colors.gray.l40;
    color_fill = _UI.colors.gray.l30;
  }

  let re = '<svg version="1.1" ';
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ';
  re += 'x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20"> ';

  let ic = icons[oa.name];
  if (ic.fill) {
    re += '<g pointer-events="none" fill="' + color_fill + '">';
    re += ic.fill;
    re += '</g>';
  }

  re += '<g pointer-events="none" fill="' + color_outline + '">';
  re += ic.outline;
  re += '</g>';

  re += '</svg>';

  return re;
}

icons.tool_arrow = {
  fill:
    '<rect x="11" y="14" width="1" height="4"/><rect x="12" y="16" width="1" height="2"/><rect x="9" y="12" width="1" height="2"/><rect x="5" y="3" width="2" height="1"/><rect x="10" y="7" width="1" height="9"/><rect x="5" y="6" width="5" height="6"/><rect x="12" y="9" width="1" height="3"/><rect x="11" y="8" width="1" height="4"/><rect x="14" y="11" width="1" height="1"/><rect x="13" y="10" width="1" height="2"/><rect x="5" y="15" width="1" height="1"/><rect x="5" y="2" width="1" height="1"/><rect x="5" y="14" width="2" height="1"/><rect x="5" y="13" width="3" height="1"/><rect x="5" y="4" width="3" height="1"/><rect x="5" y="12" width="4" height="1"/><rect x="5" y="5" width="4" height="1"/>',
  outline:
    '<rect x="4" width="1" height="17"/><rect x="5" y="1" width="1" height="1"/><rect x="7" y="3" width="1" height="1"/><rect x="6" y="2" width="1" height="1"/><rect x="9" y="5" width="1" height="1"/><rect x="8" y="4" width="1" height="1"/><rect x="11" y="7" width="1" height="1"/><rect x="10" y="6" width="1" height="1"/><rect x="11" y="12" width="5" height="1"/><rect x="12" y="8" width="1" height="1"/><rect x="13" y="9" width="1" height="1"/><rect x="14" y="10" width="1" height="1"/><rect x="15" y="11" width="1" height="1"/><rect x="11" y="18" width="2" height="1"/><rect x="5" y="16" width="1" height="1"/><rect x="6" y="15" width="1" height="1"/><rect x="7" y="14" width="1" height="1"/><rect x="8" y="13" width="1" height="1"/><rect x="9" y="14" width="1" height="2"/><rect x="10" y="16" width="1" height="2"/><rect x="11" y="12" width="1" height="2"/><rect x="12" y="14" width="1" height="2"/><rect x="13" y="16" width="1" height="2"/>',
};

icons.tool_penPlus = {
  fill:
    '<rect x="5" y="4" width="5" height="14"/><rect x="10" y="8" width="2" height="6"/><rect x="3" y="8" width="2" height="6"/>',
  outline:
    '<rect id="MINUS_SHAPE" x="14" y="16" width="5" height="1"/><rect id="PLUS_SHAPE" x="16" y="14" width="1" height="5"/><rect x="4" y="16" width="1" height="3"/><rect x="10" y="16" width="1" height="3"/><rect x="7" y="1" width="1" height="12"/><rect x="4" y="18" width="7" height="1"/><rect x="4" y="16" width="7" height="1"/><rect x="8" y="2" width="1" height="2"/><rect x="9" y="4" width="1" height="2"/><rect x="10" y="6" width="1" height="2"/><rect x="3" y="8" width="1" height="2"/><rect x="2" y="10" width="1" height="2"/><rect x="12" y="10" width="1" height="2"/><rect x="6" y="10" width="3" height="2"/><rect x="3" y="12" width="1" height="2"/><rect x="4" y="14" width="1" height="2"/><rect x="6" y="2" width="1" height="2"/><rect x="5" y="4" width="1" height="2"/><rect x="4" y="6" width="1" height="2"/><rect x="11" y="8" width="1" height="2"/><rect x="11" y="12" width="1" height="2"/><rect x="10" y="14" width="1" height="2"/>',
};

icons.tool_penMinus = {
  fill:
    '<rect x="5" y="4" width="5" height="14"/><rect x="10" y="8" width="2" height="6"/><rect x="3" y="8" width="2" height="6"/>',
  outline:
    '<rect id="MINUS_SHAPE" x="14" y="16" width="5" height="1"/><rect x="4" y="16" width="1" height="3"/><rect x="10" y="16" width="1" height="3"/><rect x="7" y="1" width="1" height="12"/><rect x="4" y="18" width="7" height="1"/><rect x="4" y="16" width="7" height="1"/><rect x="8" y="2" width="1" height="2"/><rect x="9" y="4" width="1" height="2"/><rect x="10" y="6" width="1" height="2"/><rect x="3" y="8" width="1" height="2"/><rect x="2" y="10" width="1" height="2"/><rect x="12" y="10" width="1" height="2"/><rect x="6" y="10" width="3" height="2"/><rect x="3" y="12" width="1" height="2"/><rect x="4" y="14" width="1" height="2"/><rect x="6" y="2" width="1" height="2"/><rect x="5" y="4" width="1" height="2"/><rect x="4" y="6" width="1" height="2"/><rect x="11" y="8" width="1" height="2"/><rect x="11" y="12" width="1" height="2"/><rect x="10" y="14" width="1" height="2"/>',
};

icons.tool_pen = {
  fill:
    '<rect x="7" y="4" width="5" height="14"/><rect x="12" y="8" width="2" height="6"/><rect x="5" y="8" width="2" height="6"/>',
  outline:
    '<rect x="6" y="16" width="1" height="3"/><rect x="12" y="16" width="1" height="3"/><rect x="9" y="1" width="1" height="12"/><rect x="6" y="18" width="7" height="1"/><rect x="6" y="16" width="7" height="1"/><rect x="10" y="2" width="1" height="2"/><rect x="11" y="4" width="1" height="2"/><rect x="12" y="6" width="1" height="2"/><rect x="5" y="8" width="1" height="2"/><rect x="4" y="10" width="1" height="2"/><rect x="14" y="10" width="1" height="2"/><rect x="8" y="10" width="3" height="2"/><rect x="5" y="12" width="1" height="2"/><rect x="6" y="14" width="1" height="2"/><rect x="8" y="2" width="1" height="2"/><rect x="7" y="4" width="1" height="2"/><rect x="6" y="6" width="1" height="2"/><rect x="13" y="8" width="1" height="2"/><rect x="13" y="12" width="1" height="2"/><rect x="12" y="14" width="1" height="2"/>',
};

icons.tool_slice = {
  fill: '<polygon points="6,15 6,19 13,19 13,1 "/>',
  outline:
    '<rect x="13" width="1" height="16"/><rect x="6" y="19" width="7" height="1"/><rect x="6" y="17" width="1" height="3"/><rect x="12" y="16" width="1" height="4"/><rect x="6" y="17" width="7" height="1"/><rect x="11" y="3" width="1" height="2"/><rect x="12" y="1" width="1" height="2"/><rect x="10" y="5" width="1" height="2"/><rect x="9" y="7" width="1" height="2"/><rect x="8" y="9" width="1" height="2"/><rect x="7" y="11" width="1" height="2"/><rect x="6" y="13" width="1" height="2"/><rect x="5" y="15" width="1" height="2"/>',
};

icons.tool_shapeResize = {
  fill:
    '<rect x="1" y="1" display="inline" fill="#FFFFFF" width="4" height="4"/><rect x="8" y="8" display="inline" fill="#FFFFFF" width="4" height="4"/><rect x="15" y="15" display="inline" fill="#FFFFFF" width="4" height="4"/><rect x="15" y="1" display="inline" fill="#FFFFFF" width="4" height="4"/><rect x="1" y="15" display="inline" fill="#FFFFFF" width="4" height="4"/>',
  outline:
    '<rect x="16" y="5" width="1" height="10"/><rect x="5" y="16" width="10" height="1"/><rect x="5" y="3" width="10" height="1"/><rect x="3" y="5" width="1" height="10"/><rect x="1" y="1" width="4" height="1"/><rect x="1" y="4" width="4" height="1"/><rect x="1" y="1" width="1" height="4"/><rect x="4" y="1" width="1" height="4"/><rect x="15" y="1" width="4" height="1"/><rect x="15" y="4" width="4" height="1"/><rect x="15" y="1" width="1" height="4"/><rect x="18" y="1" width="1" height="4"/><rect x="15" y="15" width="4" height="1"/><rect x="15" y="18" width="4" height="1"/><rect x="15" y="15" width="1" height="4"/><rect x="18" y="15" width="1" height="4"/><rect x="1" y="15" width="4" height="1"/><rect x="1" y="18" width="4" height="1"/><rect x="1" y="15" width="1" height="4"/><rect x="4" y="15" width="1" height="4"/><rect x="8" y="8" width="4" height="1"/><rect x="8" y="11" width="4" height="1"/><rect x="8" y="8" width="1" height="4"/><rect x="11" y="8" width="1" height="4"/>',
};

icons.tool_newRect = {
  fill: '<rect x="2" y="2" width="12" height="12"/>',
  outline:
    '<rect x="1" y="1" width="13" height="1"/><rect x="1" y="13" width="13" height="1"/><rect x="14" y="16" width="5" height="1"/><rect x="1" y="2" width="1" height="12"/><rect x="13" y="2" width="1" height="12"/><rect x="16" y="14" width="1" height="5"/>',
};

icons.tool_newOval = {
  fill:
    '<rect x="6" y="2" width="4" height="1"/><rect x="6" y="12" width="4" height="1"/><rect x="5" y="10.1" width="4" height="1"/><rect x="2" y="6" width="1" height="3"/><rect x="13" y="6" width="1" height="3"/><rect x="11" y="5.1" width="1" height="3"/><rect x="3" y="3" width="10" height="9"/>',
  outline:
    '<rect x="6" y="1" width="4" height="1"/><rect x="4" y="2" width="2" height="1"/><rect x="6" y="13" width="4" height="1"/><rect x="1" y="6" width="1" height="3"/><rect x="2" y="4" width="1" height="2"/><rect x="10" y="2" width="2" height="1"/><rect x="13" y="4" width="1" height="2"/><rect x="4" y="12" width="2" height="1"/><rect x="2" y="9" width="1" height="2"/><rect x="10" y="12" width="2" height="1"/><rect x="13" y="9" width="1" height="2"/><rect x="14" y="6" width="1" height="3"/><rect x="14" y="16" width="5" height="1"/><rect x="16" y="14" width="1" height="5"/><rect x="12" y="3" width="1" height="1"/><rect x="12" y="11" width="1" height="1"/><rect x="3" y="11" width="1" height="1"/><rect x="3" y="3" width="1" height="1"/>',
};

icons.tool_newPath = {
  fill:
    '<rect x="5" y="2" width="5" height="13"/><rect x="10" y="4" width="2" height="11"/><rect x="3" y="9" width="2" height="6"/><rect x="6" y="15" width="3" height="1"/><rect x="12" y="6" width="2" height="7"/><rect x="2" y="2" width="3" height="1"/><rect x="4" y="3" width="3" height="1"/>',
  outline:
    '<rect x="14" y="16" width="5" height="1"/><rect x="16" y="14" width="1" height="5"/><rect x="8" y="2" width="2" height="1"/><rect x="2" y="1" width="6" height="1"/><rect x="6" y="16" width="3" height="1"/><rect x="10" y="3" width="1" height="1"/><rect x="11" y="4" width="1" height="1"/><rect x="12" y="5" width="1" height="1"/><rect x="1" y="1" width="1" height="2"/><rect x="2" y="3" width="2" height="1"/><rect x="4" y="4" width="1" height="1"/><rect x="2" y="10" width="1" height="4"/><rect x="3" y="9" width="1" height="1"/><rect x="3" y="14" width="1" height="1"/><rect x="5" y="5" width="1" height="3"/><rect x="4" y="8" width="1" height="1"/><rect x="12" y="13" width="1" height="1"/><rect x="11" y="14" width="1" height="1"/><rect x="9" y="15" width="2" height="1"/><rect x="4" y="15" width="2" height="1"/><rect x="13" y="11" width="1" height="2"/><rect x="13" y="6" width="1" height="2"/><rect x="14" y="8" width="1" height="3"/>',
};

icons.tool_popOut = {
  outline:
    '<rect x="18" y="1" width="1" height="11"/><rect x="6" y="1" width="2" height="11"/><rect x="6" y="1" width="13" height="1"/><rect x="6" y="11" width="13" height="1"/><rect x="13" y="11" width="1" height="8"/><rect x="1" y="8" width="2" height="11"/><rect x="1" y="8" width="7" height="1"/><rect x="1" y="18" width="13" height="1"/>',
};

icons.tool_popIn = {
  outline:
    '<rect x="1" y="1" width="2" height="18"/><rect x="7" y="1" width="2" height="18"/><rect x="18" y="1" width="1" height="17"/><rect x="1" y="18" width="18" height="1"/><rect x="1" y="1" width="18" height="1"/>',
};

icons.tool_zoomEm = {
  outline:
    '<polygon points="15,3 11,3 11,5 13,5 13,6 12,6 12,7 11,7 11,8 10,8 9,8 9,7 8,7 8,6 7,6 7,5 9,5 9,3 5,3 3,3 3,5 3,9 5,9 5,7 6,7 6,8 7,8 7,9 8,9 8,10 8,11 7,11 7,12 6,12 6,13 5,13 5,11 3,11 3,15 3,17 5,17 9,17 9,15 7,15 7,14 8,14 8,13 9,13 9,12 10,12 11,12 11,13 12,13 12,14 13,14 13,15 11,15 11,17 15,17 17,17 17,15 17,11 15,11 15,13 14,13 14,12 13,12 13,11 12,11 12,10 12,9 13,9 13,8 14,8 14,7 15,7 15,9 17,9 17,5 17,3"/><rect x="18" y="1" width="1" height="18"/><rect x="1" y="18" width="18" height="1"/><rect x="1" y="1" width="18" height="1"/><rect x="1" y="1" width="1" height="18"/>',
};

icons.tool_zoom1to1 = {
  outline:
    '<rect x="5" y="4" width="2" height="12"/><rect x="14" y="4" width="2" height="12"/><rect x="18" y="1" width="1" height="18"/><rect x="1" y="1" width="1" height="18"/><rect x="13" y="5" width="1" height="1"/><rect x="4" y="5" width="1" height="1"/><rect x="9" y="11" width="2" height="2"/><rect x="9" y="7" width="2" height="2"/><rect x="1" y="1" width="18" height="1"/><rect x="1" y="18" width="18" height="1"/>',
};

icons.tool_zoomIn = {
  outline:
    '<rect x="9" y="3" width="2" height="14"/><rect x="3" y="9" width="14" height="2"/>',
};

icons.tool_zoomOut = {
  outline: '<rect x="3" y="9" width="14" height="2"/>',
};

icons.tool_pan = {
  fill:
    '<rect x="9" y="1" width="2" height="18"/><rect x="1" y="9" width="18" height="2"/><rect x="2" y="7" width="2" height="6"/><rect x="7" y="16" width="6" height="2"/><rect x="16" y="7" width="2" height="6"/><rect x="7" y="2" width="6" height="2"/>',
  outline:
    '<rect x="8" y="4" width="1" height="5"/><rect x="8" y="11" width="1" height="5"/><rect x="11" y="4" width="1" height="5"/><rect x="11" y="11" width="1" height="5"/><rect x="4" y="8" width="4" height="1"/><rect x="11" y="8" width="5" height="1"/><rect x="4" y="11" width="4" height="1"/><rect x="4" y="12" width="1" height="2"/><rect x="4" y="6" width="1" height="2"/><rect x="2" y="12" width="1" height="1"/><rect x="1" y="11" width="1" height="1"/><rect x="0" y="9" width="1" height="2"/><rect x="1" y="8" width="1" height="1"/><rect x="3" y="6" width="1" height="1"/><rect x="2" y="7" width="1" height="1"/><rect x="3" y="13" width="1" height="1"/><rect x="11" y="11" width="5" height="1"/><rect x="12" y="15" width="2" height="1"/><rect x="6" y="15" width="2" height="1"/><rect x="12" y="17" width="1" height="1"/><rect x="13" y="16" width="1" height="1"/><rect x="11" y="18" width="1" height="1"/><rect x="9" y="19" width="2" height="1"/><rect x="8" y="18" width="1" height="1"/><rect x="7" y="17" width="1" height="1"/><rect x="6" y="16" width="1" height="1"/><rect x="15" y="6" width="1" height="2"/><rect x="15" y="12" width="1" height="2"/><rect x="17" y="7" width="1" height="1"/><rect x="16" y="6" width="1" height="1"/><rect x="18" y="8" width="1" height="1"/><rect x="19" y="9" width="1" height="2"/><rect x="18" y="11" width="1" height="1"/><rect x="17" y="12" width="1" height="1"/><rect x="16" y="13" width="1" height="1"/><rect x="6" y="4" width="2" height="1"/><rect x="12" y="4" width="2" height="1"/><rect x="7" y="2" width="1" height="1"/><rect x="6" y="3" width="1" height="1"/><rect x="8" y="1" width="1" height="1"/><rect x="9" y="0" width="2" height="1"/><rect x="11" y="1" width="1" height="1"/><rect x="12" y="2" width="1" height="1"/><rect x="13" y="3" width="1" height="1"/>',
};

icons.tool_kern = {
  fill:
    '<rect x="1" y="9" width="18" height="2"/><rect x="2" y="7" width="2" height="6"/><rect x="16" y="7" width="2" height="6"/>',
  outline:
    '<rect x="4" y="8" width="12" height="1"/><rect x="4" y="11" width="12" height="1"/><rect x="4" y="12" width="1" height="2"/><rect x="4" y="6" width="1" height="2"/><rect x="2" y="12" width="1" height="1"/><rect x="1" y="11" width="1" height="1"/><rect y="9" width="1" height="2"/><rect x="1" y="8" width="1" height="1"/><rect x="3" y="6" width="1" height="1"/><rect x="2" y="7" width="1" height="1"/><rect x="3" y="13" width="1" height="1"/><rect x="15" y="6" width="1" height="2"/><rect x="15" y="12" width="1" height="2"/><rect x="17" y="7" width="1" height="1"/><rect x="16" y="6" width="1" height="1"/><rect x="18" y="8" width="1" height="1"/><rect x="19" y="9" width="1" height="2"/><rect x="18" y="11" width="1" height="1"/><rect x="17" y="12" width="1" height="1"/><rect x="16" y="13" width="1" height="1"/><rect x="9" y="2" width="2" height="16"/>',
};

//  --------------------
//  Custom UI
//  --------------------

function makePointButton(type, selected) {
  let color = _UI.colors.gray.l40;
  let bgcolor = 'transparent';

  if (selected) {
    color = actionButtonIconColors.blueOutline;
    bgcolor = _UI.colors.gray.offWhite;
  }

  // log("MAKEPOINTBUTTON - " + type + " selected: " + selected + " color: " + color);
  let re = '';

  <button class="pointtypebutton" style="background-color:' +
    bgcolor +
    ';" ';
  onclick="_UI.multiSelect.points.setPointType(\'' +
    type +
    "'); historyPut('Point Type: " +
    type +
    "'); redraw({calledBy:'pointDetails'});\" ";
  re += 'title="point type: ' + type + '" ';
  re += '>';
  re += '<svg version="1.1" ';
  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ';
  re += 'x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20" ';
  re += '><g fill="' + color + '">';
  re += '<rect x="8" y="8" width="1" height="4"/>';
  re += '<rect x="11" y="8" width="1" height="4"/>';
  re += '<rect x="8" y="8" width="4" height="1"/>';
  re += '<rect x="8" y="11" width="4" height="1"/>';
  re += '<rect x="4" y="4" width="1" height="1"/>';
  re += '<rect x="5" y="5" width="1" height="1"/>';
  re += '<rect x="6" y="6" width="1" height="1"/>';
  re += '<rect x="7" y="7" width="1" height="1"/>';
  re += '<circle cx="3" cy="3" r="1.5"/>';

  switch (type) {
    case 'corner':
      re += '<rect x="7" y="12" width="1" height="1"/>';
      re += '<rect x="6" y="13" width="1" height="1"/>';
      re += '<rect x="5" y="14" width="1" height="1"/>';
      re += '<rect x="4" y="15" width="1" height="1"/>';
      re += '<circle cx="3" cy="17" r="1.5"/>';
      break;

    case 'symmetric':
      re += '<rect x="12" y="12" width="1" height="1"/>';
      re += '<rect x="13" y="13" width="1" height="1"/>';
      re += '<rect x="14" y="14" width="1" height="1"/>';
      re += '<rect x="15" y="15" width="1" height="1"/>';
      re += '<circle cx="17" cy="17" r="1.5"/>';
      break;

    case 'flat':
      re += '<rect x="12" y="12" width="1" height="1"/>';
      re += '<rect x="13" y="13" width="1" height="1"/>';
      re += '<circle cx="15" cy="15" r="1.5"/>';
      break;
  }

  re += '</g></svg></button>';

  return re;
}

//  -------------------------------
//  LOCK, CHECKBOX, SLIDERS, HELP
//  -------------------------------

function lockUI(varname, currbool, idname) {
  // log("CHECKUI -  varname:" + varname + " doredraw:" + doredraw);
  let restcolor = _UI.colors.gray.l90;
  let selcolor = actionButtonIconColors.blueOutline;

  let re =
    '<svg ' +
    'version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" ' +
    'x="0px" y="0px" width="26px" height="26px" viewBox="0 0 26 26" enable-background="new 0 0 26 26" ' +
    'id=' +
    idname +
    ' ' +
    'class="lockui" ' +
    'style="background-color:' +
    (currbool ? _UI.colors.gray.l80 : 'white') +
    '" ' +
    'onclick="' +
    // 'log(\'Clicked on checkbox '+varname+'\'); ' +
    varname +
    ' = !' +
    varname +
    '; ' +
    // 'historyPut(\'Toggled '+idname+': '+!currbool+'\'); '+
    "redraw({calledBy:'checkbox " +
    idname +
    "'}); " +
    '">';
  <path fill="' +
    (currbool ? selcolor : restcolor) +
    '" d="M17,12V8h-1V7h-1V6h-4v1h-1v1H9v4H8v8h10v-8H17z M15,12h-4V9h1V8h2v1h1V12z"/>';
  re += '</svg>';
  return re;
}

function checkUI(varname, currbool, doredraw, invert) {
  // log("CHECKUI -  varname:" + varname + " doredraw:" + doredraw);
  let idname = varname.split('.');
  idname = idname[idname.length - 1];
  if (invert) currbool = !currbool;

  let re = '<input type="checkbox"';
  re += currbool ? ' checked ' : ' ';
  re += 'id="' + idname + '"';
  re += 'onclick="' + varname + ' = !' + varname + ';';

  if (doredraw) {
    re += " historyPut('Toggled " + idname + ': ' + !currbool + "');";
    re += " redraw({calledBy:'checkbox " + idname + "', redrawTools:false});";
  }

  re += '"/>';

  return re;
}

function sliderUI(varname, id, rdpanels, rdtools) {
  rdpanels = rdpanels || false;
  rdtools = rdtools || false;

  let psct = getCurrentProject().projectSettings.colors[varname];
  let re =
    'transparency:<input type="range" min="0" max="100" value="' +
    psct +
    '" step="1" ';
  oninput="updateTransparency(\'' +
    varname +
    "', '" +
    id +
    "', this.value, " +
    rdpanels +
    ', ' +
    rdtools +
    ');"/>';
  re += '<span id="' + id + '">' + psct + '</span>%';

  return re;
}

function updateTransparency(varname, id, value, rdpanels, rdtools) {
  rdpanels = rdpanels || false;
  rdpanels = rdpanels && _UI.currentPanel === 'npGuides';
  rdtools = rdtools || false;

  getCurrentProject().projectSettings.colors[varname] = value;
  document.getElementById(id).innerHTML = value;
  redraw({
    calledBy: 'updateTransparency',
    redrawPanels: rdpanels,
    redrawTools: rdtools,
  });
}

function helpUI(message) {
  let re =
    '<button class="customui" style="margin-left:4px;" ' +
    'title="quick help tip" ' +
    'onclick="openDialog(\'' +
    message +
    '\');">' +
    '<svg version="1.1" ' +
    'xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
    'x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20">' +
    '<circle fill="' +
    _UI.colors.gray.l80 +
    '" cx="9" cy="9" r="9"/>' +
    '<path fill="' +
    _UI.colors.gray.l90 +
    '" d="M8,12v-1c0-0.8,0.4-1.2,0.7-1.7C9,9,9.5,8.5,10.2,7.9c0.5-0.4,0.8-0.7,1-1c0.2-0.3,0.2-0.5,0.2-0.8c0-0.6-0.2-1.1-0.7-1.5C10.2,4.2,9.7,4,9.1,4C8.4,4,7.9,4.1,7.4,4.5C7,4.9,6.7,5.5,6.6,6.3L5,6.1C5.2,5,5.6,4.2,6.3,3.6S7.9,2.8,9,2.8c1.1,0,2.1,0.3,2.8,0.9S13,5,13,5.9c0,0.5-0.1,1-0.4,1.4c-0.2,0.4-0.7,0.9-1.5,1.5c-0.6,0.5-1,0.9-1.2,1.2c-0.2,0.3-0.2,0.2-0.3,0.9L8,12z"/>' +
    '<ellipse fill="' +
    _UI.colors.gray.l90 +
    '" cx="8.8" cy="14.5" rx="1.4" ry="1.2"/>' +
    '</svg></button>';

  // log("HELPUI - output:\n"+re);
  return re;
}

*/