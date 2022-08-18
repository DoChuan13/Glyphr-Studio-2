//	---------------------
//	Action Buttons
//	---------------------

let makeActionButton = {};
export { makeActionButton };
import { accentColors, uiColors } from '../common/colors.js';

export function svgWrap(content) {
	let re = `
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px" width="30px" height="30px" viewBox="0 0 30 30"
		>
			<defs></defs>
			${content}
		</svg>
	`;

	return re;
}

let actionButtonIconColors = {
	darkFill: accentColors.blue.l15,
	lightFill: accentColors.gray.l60,
	disabledFill: accentColors.gray.l95,
	disabledOutline: accentColors.gray.l90,
	blueOutline: accentColors.blue.l65,
	greenOutline: accentColors.green.l75,
	grayOutline: accentColors.gray.l50,
	redX: uiColors.red,
};

makeActionButton.LinkToGlyph = function() {
	let re = '';
	let green = actionButtonIconColors.greenOutline;

	re += `
		<path fill="${green}" d="M18,8.8L8.8,18c-0.5,0.5-1.3,0.5-1.8,0s-0.5-1.3,0-1.8L16.2,7c0.5-0.5,1.3-0.5,1.8,0S18.5,8.3,18,8.8z"/>
		<path fill="${green}" d="M7.5,21.2c-1.1,1.1-2.8,1.8-4.1,0.5s-0.6-3,0.5-4.1l5.9-5.9c-1.8-0.5-3.8,0.1-5.5,1.8L2,15.7c-2.4,2.4-2.6,5.7-0.5,7.8s5.4,2,7.8-0.5l2.3-2.3c1.7-1.7,2.3-3.7,1.8-5.5L7.5,21.2z"/>
		<path fill="${green}" d="M21.2,7.5c1.1-1.1,1.8-2.8,0.5-4.1s-3-0.6-4.1,0.5l-5.9,5.9c-0.5-1.8,0.1-3.8,1.8-5.5L15.7,2c2.4-2.4,5.7-2.6,7.8-0.5s2,5.4-0.5,7.8l-2.3,2.3c-1.7,1.7-3.7,2.3-5.5,1.8L21.2,7.5z"/>
		<rect x="21" y="15" fill="' + green + '" width="3" height="15"/>
		<rect x="15" y="21" fill="' + green + '" width="15" height="3"/>
	`;

	return svgWrap(re);
};

makeActionButton.reverseWinding = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let gray = actionButtonIconColors.grayOutline;

	re += `
		<path fill="${gray}" d="M3.7,7.8V5L0,8.7l3.7,3.7V9.6c6.2,0,11.2,5,11.2,11.2h1.9C16.8,13.6,10.9,7.8,3.7,7.8z"/>
		<path fill="${blue}" d="M25.2,22.3C25.2,10,15.2,0,3,0v3.2c10.5,0,19.1,8.6,19.1,19.1h-4.8l6.4,6.4l6.4-6.4H25.2z"/>
	`;

	return svgWrap(re);
};

makeActionButton.resetPathPoint = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let gray = actionButtonIconColors.grayOutline;

	// Other handles
	re += `
		<circle display="inline" fill="${gray}" cx="20" cy="27" r="3"/>
		<circle display="inline" fill="${gray}" cx="27" cy="13" r="3"/>
		<line display="inline" fill="none" stroke="${gray}" stroke-miterlimit="10" x1="20" y1="27" x2="13" y2="13"/>
		<line display="inline" fill="none" stroke="${gray}" stroke-miterlimit="10" x1="13" y1="13" x2="27" y2="13"/>
	`;

	// Handles
	re += `
		<line stroke="${blue}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${blue}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${blue}" cx="3" cy="23" r="3"/>
		<circle fill="${blue}" cx="23" cy="3" r="3"/>
	`;

	return svgWrap(re);
};

makeActionButton.alignPointsY = function() {
	return svgWrap(`
		<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0" y="14" width="30" height="2" stroke="null"/>
		<rect height="7" width="7" y="12" x="19" fill="#FFFFFF"/>
		<path d="m25,12l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		<rect stroke="null" height="7" width="7" y="12" x="4.4991" fill="#FFFFFF"/>
		<path d="m11,12l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
	`);
};

makeActionButton.alignPointsX = function() {
	return svgWrap(`
		<g transform="rotate(90 15,15.000000000000002)">
			<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0" y="14" width="30" height="2" stroke="null"/>
		</g>
		<g>
		<rect height="7" width="7" y="12" x="19" fill="#FFFFFF"/>
			<path d="m25,12l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
		<g>
			<rect stroke="null" height="7" width="7" y="12" x="4.4991" fill="#FFFFFF"/>
			<path d="m11,12l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
	`);
};


makeActionButton.alignHandlesV = function() {
	return svgWrap(`
		<rect height="21.88405" width="1" y="4.05797" x="14.42029" stroke-width="null" fill="rgb(0,170,255)"/>
		<circle r="3" cy="3" cx="14.85507" fill="#002b41"/>
		<circle r="3" cy="27" cx="15" fill="rgb(0,170,255/>
	`);
};


makeActionButton.alignHandlesH = function() {
	return svgWrap(`
		<g transform="rotate(90 15.023782730102539,15.000000000000002)">
			<rect height="21.88405" width="1" y="4.05797" x="14.42029" stroke-width="null" fill="rgb(0,170,255)"/>
			<circle r="3" cy="3" cx="14.85507" fill="#002b41"/>
			<circle r="3" cy="27" cx="15.19249" fill="rgb(0,170,255)"/>
		</g>
	`);
};


makeActionButton.alignHandlesH2Y = function() {
	return svgWrap(`
		<line transform="rotate(112 23.985507965087894,18.362319946289062)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="18.98551" y1="23.36232" x2="28.98551" y2="13.36232"/>
		<line transform="rotate(-73 6.9999999999999964,9.999999999999998)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="15" x2="11" y2="5"/>
		<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="26" x2="12" y2="17" transform="rotate(-9 6.999999999999964,21.999999999999993)"/>
		<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="17" y1="15" x2="27" y2="5" transform="rotate(-48 22.000000000000007,9.100000381469728)"/>
		<rect stroke="null" height="2" width="30" y="2" x="0" stroke-dasharray="2,2" stroke-width="3" fill="#999ea3"/>
		<circle fill="#002b41" cx="22" cy="3" r="3"/>
		<circle fill="#002b41" cx="3" cy="3" r="3"/>
		<circle fill="rgb(0,170,255)" cx="3" cy="27" r="3"/>
		<circle fill="rgb(0,170,255)" cx="25.98551" cy="22.36232" r="3"/>
		<g>
			<rect fill="#FFFFFF" x="18.98551" y="9.36232" width="7" height="7"/>
			<path fill="rgb(0,170,255)" d="m24.98551,9.36232l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
		</g>
		<g>
			<rect fill="#FFFFFF" x="8.9991" y="14" width="7" height="7"/>
			<path fill="rgb(0,170,255)" d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
		</g>
	`);
};


makeActionButton.alignHandlesH1Y = function() {
	// H1 lightblue by convention
	return svgWrap(`
		<line y2="18" x2="30" y1="28" x1="20" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(112 25.000000000000004,23)"/>
		<line y2="5" x2="11" y1="15" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(-73 6.9999999999999964,9.999999999999998)"/>
		<line transform="rotate(-9 6.999999999999964,21.999999999999993)" y2="17" x2="12" y1="26" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<line transform="rotate(-48 22.109889984130866,12.836263656616214)" y2="8.73626" x2="27.10989" y1="18.73626" x1="17.10989" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<circle r="3" cy="6.73626" cx="22.10989" fill="#002b41"/>
		<circle r="3" cy="3" cx="3" fill="#002b41"/>
		<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0.14493" y="26" width="30" height="2" stroke="null"/>
		<circle r="3" cy="27" cx="3" fill="rgb(0,170,255)"/>
		<circle r="3" cy="27" cx="27" fill="rgb(0,170,255)"/>
		<g>
			<rect height="7" width="7" y="14" x="20" fill="#FFFFFF"/>
			<path d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
		<g>
			<rect height="7" width="7" y="14" x="8.9991" fill="#FFFFFF"/>
			<path d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
	`);
};


makeActionButton.alignHandlesH1YCross = function() {
	// H1 lightblue by convention
	return svgWrap(`
		<line transform="rotate(112 25.000000000000004,23)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="20" y1="28" x2="30" y2="18"/>
		<line transform="rotate(-73 6.9999999999999964,9.999999999999998)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="15" x2="11" y2="5"/>
		<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="26" x2="12" y2="17" transform="rotate(-9 6.999999999999964,21.999999999999993)"/>
		<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="17.10989" y1="18.73626" x2="27.10989" y2="8.73626" transform="rotate(-48 22.109889984130866,12.836263656616214)"/>
		<circle fill="rgb(0,170,255)" cx="22.10989" cy="6.73626" r="3"/>
		<circle fill="#002b41" cx="3" cy="3" r="3"/>
		<rect stroke="null" height="2" width="30" y="26" x="0.14493" stroke-dasharray="2,2" stroke-width="3" fill="#999ea3"/>
		<circle fill="rgb(0,170,255)" cx="3" cy="27" r="3"/>
		<circle fill="#002b41" cx="27" cy="27" r="3"/>
		<g>
			<rect fill="#FFFFFF" x="20" y="14" width="7" height="7"/>
			<path fill="rgb(0,170,255)" d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
		</g>
		<g>
			<rect fill="#FFFFFF" x="8.9991" y="14" width="7" height="7"/>
			<path fill="rgb(0,170,255)" d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
		</g>
	`);
};


makeActionButton.alignHandlesH2YCross = function() {
	// H1 lightblue by convention
	return svgWrap(`
		<line y2="18" x2="30" y1="28" x1="20" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(112 25.000000000000004,23)"/>
		<line y2="5" x2="11" y1="15" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(-73 6.9999999999999964,9.999999999999998)"/>
		<line transform="rotate(-9 6.999999999999964,21.999999999999993)" y2="17" x2="12" y1="26" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<line transform="rotate(-48 22.109889984130866,12.836263656616214)" y2="8.73626" x2="27.10989" y1="18.73626" x1="17.10989" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<circle r="3" cy="6.73626" cx="22.10989" fill="#002b41"/>
		<circle r="3" cy="3" cx="3" fill="rgb(0,170,255)"/>
		<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0.14493" y="26" width="30" height="2" stroke="null"/>
		<circle r="3" cy="27" cx="3" fill="#002b41"/>
		<circle r="3" cy="27" cx="27" fill="rgb(0,170,255)"/>
		<g>
			<rect height="7" width="7" y="14" x="20" fill="#FFFFFF"/>
			<path d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
		<g>
			<rect height="7" width="7" y="14" x="8.9991" fill="#FFFFFF"/>
			<path d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
	`);
};


makeActionButton.alignHandlesHY = function() {
	return svgWrap(`
		<line transform="rotate(112 25.000000000000004,23)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="20" y1="28" x2="30" y2="18"/>
		<line transform="rotate(-73 6.9999999999999964,9.999999999999998)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="15" x2="11" y2="5"/>
		<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="26" x2="12" y2="17" transform="rotate(-9 6.999999999999964,21.999999999999993)"/>
		<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="17" y1="15" x2="27" y2="5" transform="rotate(-48 22.000000000000007,9.100000381469728)"/>
		<rect stroke="null" height="2" width="30" y="2" x="0" stroke-dasharray="2,2" stroke-width="3" fill="#999ea3"/>
		<circle fill="#002b41" cx="22" cy="3" r="3"/>
		<circle fill="#002b41" cx="3" cy="3" r="3"/>
		<rect stroke="null" height="2" width="30" y="26" x="0.14493" stroke-dasharray="2,2" stroke-width="3" fill="#999ea3"/>
		<circle fill="rgb(0,170,255)" cx="3" cy="27" r="3"/>
		<circle fill="rgb(0,170,255)" cx="27" cy="27" r="3"/>
		<g>
			<rect fill="#FFFFFF" x="20" y="14" width="7" height="7"/>
			<path fill="rgb(0,170,255)" d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
		</g>
		<g>
			<rect fill="#FFFFFF" x="8.9991" y="14" width="7" height="7"/>
			<path fill="rgb(0,170,255)" d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
		</g>
	`);
};


makeActionButton.alignHandlesYCross = function() {
	return svgWrap(`
		<line y2="18" x2="30" y1="28" x1="20" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(112 25,23)"/>
		<line y2="5" x2="11" y1="15" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(-73 7,10)"/>
		<line transform="rotate(-9 7,22)" y2="17" x2="12" y1="26" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<line transform="rotate(-48 22,9.10)" y2="5" x2="27" y1="15" x1="17" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0" y="2" width="30" height="2" stroke="null"/>
		<circle r="3" cy="3" cx="22" fill="rgb(0,170,255)"/>
		<circle r="3" cy="3" cx="3" fill="#002b41"/>
		<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0" y="26" width="30" height="2" stroke="null"/>
		<circle r="3" cy="27" cx="3" fill="rgb(0,170,255)"/>
		<circle r="3" cy="27" cx="27" fill="#002b41"/>
		<g>
			<rect height="7" width="7" y="14" x="20" fill="#FFFFFF"/>
			<path d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
		<g>
			<rect height="7" width="7" y="14" x="6" fill="#FFFFFF"/>
			<path d="m12.38818,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
	`);
};


makeActionButton.alignHandlesH2X = function() {
	return svgWrap(`
		<g transform="rotate(90, 15, 15)"> <line transform="rotate(112 23.985507965087894,18.362319946289062)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="18.98551" y1="23.36232" x2="28.98551" y2="13.36232"/>
			<line transform="rotate(-73 6.9999999999999964,9.999999999999998)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="15" x2="11" y2="5"/>
			<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="26" x2="12" y2="17" transform="rotate(-9 6.999999999999964,21.999999999999993)"/>
			<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="17" y1="15" x2="27" y2="5" transform="rotate(-48 22.000000000000007,9.100000381469728)"/>
			<rect stroke="null" height="2" width="30" y="2" x="0" stroke-dasharray="2,2" stroke-width="3" fill="#999ea3"/>
			<circle fill="#002b41" cx="22" cy="3" r="3"/>
			<circle fill="#002b41" cx="3" cy="3" r="3"/>
			<circle fill="rgb(0,170,255)" cx="3" cy="27" r="3"/>
			<circle fill="rgb(0,170,255)" cx="25.98551" cy="22.36232" r="3"/>
			<g>
				<rect fill="#FFFFFF" x="18.98551" y="9.36232" width="7" height="7"/>
				<path fill="rgb(0,170,255)" d="m24.98551,9.36232l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
			</g>
			<g>
				<rect fill="#FFFFFF" x="8.9991" y="14" width="7" height="7"/>
				<path fill="rgb(0,170,255)" d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
			</g>
		</g>
	`);
};


makeActionButton.alignHandlesH1X = function() {
	// H1 lightblue by convention
	return svgWrap(`
		<g transform="rotate(90, 15, 15)"> <title>Layer 1</title> <line y2="18" x2="30" y1="28" x1="20" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(112 25.000000000000004,23)"/>
			<line y2="5" x2="11" y1="15" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(-73 6.9999999999999964,9.999999999999998)"/>
			<line transform="rotate(-9 6.999999999999964,21.999999999999993)" y2="17" x2="12" y1="26" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
			<line transform="rotate(-48 22.109889984130866,12.836263656616214)" y2="8.73626" x2="27.10989" y1="18.73626" x1="17.10989" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
			<circle r="3" cy="6.73626" cx="22.10989" fill="#002b41"/>
			<circle r="3" cy="3" cx="3" fill="#002b41"/>
			<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0.14493" y="26" width="30" height="2" stroke="null"/>
			<circle r="3" cy="27" cx="3" fill="rgb(0,170,255)"/>
			<circle r="3" cy="27" cx="27" fill="rgb(0,170,255)"/>
			<g>
				<rect height="7" width="7" y="14" x="20" fill="#FFFFFF"/>
				<path d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
			</g>
			<g>
				<rect height="7" width="7" y="14" x="8.9991" fill="#FFFFFF"/>
				<path d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
			</g>
		</g>
	`);
};


makeActionButton.alignHandlesH1XCross = function() {
	// H1 lightblue by convention
	return svgWrap(`
		<g transform="rotate(90, 15, 15)"> <line transform="rotate(112 25.000000000000004,23)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="20" y1="28" x2="30" y2="18"/>
			<line transform="rotate(-73 6.9999999999999964,9.999999999999998)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="15" x2="11" y2="5"/>
			<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="26" x2="12" y2="17" transform="rotate(-9 6.999999999999964,21.999999999999993)"/>
			<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="17.10989" y1="18.73626" x2="27.10989" y2="8.73626" transform="rotate(-48 22.109889984130866,12.836263656616214)"/>
			<circle fill="rgb(0,170,255)" cx="22.10989" cy="6.73626" r="3"/>
			<circle fill="#002b41" cx="3" cy="3" r="3"/>
			<rect stroke="null" height="2" width="30" y="26" x="0.14493" stroke-dasharray="2,2" stroke-width="3" fill="#999ea3"/>
			<circle fill="rgb(0,170,255)" cx="3" cy="27" r="3"/>
			<circle fill="#002b41" cx="27" cy="27" r="3"/>
			<g>
				<rect fill="#FFFFFF" x="20" y="14" width="7" height="7"/>
				<path fill="rgb(0,170,255)" d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
			</g>
			<g>
				<rect fill="#FFFFFF" x="8.9991" y="14" width="7" height="7"/>
				<path fill="rgb(0,170,255)" d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
			</g>
		</g>
	`);
};


makeActionButton.alignHandlesH2XCross = function() {
	// H1 lightblue by convention
	return svgWrap(`
		<line y2="20" x2="12" y1="30" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(202 6.999999999999999,25)"/>
		<line y2="1.93637" x2="23.86659" y1="11.93637" x1="14.86659" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(17 19.720403671264645,7.41451835632324)"/>
		<line transform="rotate(81 8.475528717041014,6.845491409301759)" y2="2.33934" x2="13.55375" y1="11.33934" x1="3.55375" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<line transform="rotate(42 17.257812499999993,23.00495529174805)" y2="18.30274" x2="21.58898" y1="28.30274" x1="11.58898" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<circle transform="rotate(90 23.26374053955078,22.109889984130863)" r="3" cy="22.10989" cx="23.26374" fill="#002b41"/>
		<circle transform="rotate(90 27,3.000000000000002)" r="3" cy="3" cx="27" fill="rgb(0,170,255)"/>
		<rect transform="rotate(90 2.9999999999999987,15.14492988586426)" fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="-12" y="14.14493" width="30" height="2" stroke="null"/>
		<circle transform="rotate(90 3,3.0000000000000004)" r="3" cy="3" cx="3" fill="#002b41"/>
		<circle transform="rotate(90 2.999999999999997,27.000000000000004)" r="3" cy="27" cx="3" fill="rgb(0,170,255)"/>
		<g transform="rotate(90 12.999999999999998,23.000000000000004)"> <rect height="7" width="7" y="20" x="10" fill="#FFFFFF"/>
			<path d="m16,20l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
		<g transform="rotate(90 13,11.999099731445314)"> <rect height="7" width="7" y="8.9991" x="10" fill="#FFFFFF"/>
			<path d="m16,8.9991l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
	`);
};


makeActionButton.alignHandlesHX = function() {
	return svgWrap(`
		<g transform="rotate(90, 15, 15)"> <line transform="rotate(112 25.000000000000004,23)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="20" y1="28" x2="30" y2="18"/>
			<line transform="rotate(-73 6.9999999999999964,9.999999999999998)" stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="15" x2="11" y2="5"/>
			<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="2" y1="26" x2="12" y2="17" transform="rotate(-9 6.999999999999964,21.999999999999993)"/>
			<line stroke="rgb(0,170,255)" fill="none" stroke-miterlimit="10" x1="17" y1="15" x2="27" y2="5" transform="rotate(-48 22.000000000000007,9.100000381469728)"/>
			<rect stroke="null" height="2" width="30" y="2" x="0" stroke-dasharray="2,2" stroke-width="3" fill="#999ea3"/>
			<circle fill="#002b41" cx="22" cy="3" r="3"/>
			<circle fill="#002b41" cx="3" cy="3" r="3"/>
			<rect stroke="null" height="2" width="30" y="26" x="0.14493" stroke-dasharray="2,2" stroke-width="3" fill="#999ea3"/>
			<circle fill="rgb(0,170,255)" cx="3" cy="27" r="3"/>
			<circle fill="rgb(0,170,255)" cx="27" cy="27" r="3"/>
			<g>
				<rect fill="#FFFFFF" x="20" y="14" width="7" height="7"/>
				<path fill="rgb(0,170,255)" d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
			</g>
			<g>
				<rect fill="#FFFFFF" x="8.9991" y="14" width="7" height="7"/>
				<path fill="rgb(0,170,255)" d="m14.9991,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z"/>
			</g>
		</g>
	`);
};


makeActionButton.alignHandlesXCross = function() {
	return svgWrap(`
	<g transform="rotate(90, 15, 15)"> <line y2="18" x2="30" y1="28" x1="20" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(112 25,23)"/>
		<line y2="5" x2="11" y1="15" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)" transform="rotate(-73 7,10)"/>
		<line transform="rotate(-9 7,22)" y2="17" x2="12" y1="26" x1="2" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<line transform="rotate(-48 22,9.10)" y2="5" x2="27" y1="15" x1="17" stroke-miterlimit="10" fill="none" stroke="rgb(0,170,255)"/>
		<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0" y="2" width="30" height="2" stroke="null"/>
		<circle r="3" cy="3" cx="22" fill="rgb(0,170,255)"/>
		<circle r="3" cy="3" cx="3" fill="#002b41"/>
		<rect fill="#999ea3" stroke-width="3" stroke-dasharray="2,2" x="0" y="26" width="30" height="2" stroke="null"/>
		<circle r="3" cy="27" cx="3" fill="rgb(0,170,255)"/>
		<circle r="3" cy="27" cx="27" fill="#002b41"/>
		<g>
			<rect height="7" width="7" y="14" x="20" fill="#FFFFFF"/>
			<path d="m26,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
		<g>
			<rect height="7" width="7" y="14" x="6" fill="#FFFFFF"/>
			<path d="m12.38818,14l0,6l-6,0l0,-6l6,0m1,-1l-1,0l-6,0l-1,0l0,1l0,6l0,1l1,0l6,0l1,0l0,-1l0,-6l0,-1l0,0z" fill="rgb(0,170,255)"/>
		</g>
	</g>
	`);
};


makeActionButton.autofitXY = function() {
	return svgWrap(`
		<rect stroke="null" transform="rotate(-25 10.064109802246094,15.320510864257812)" height="27.05125" width="3.46153" y="1.79489" x="7.3077" stroke-opacity="null" stroke-width="null" fill="#002b41"/>
		<rect stroke="null" transform="rotate(-25 21.24197387695312,8.920309066772457)" height="13.21048" width="3.46153" y="2.31507" x="19.51121" stroke-opacity="null" stroke-width="null" fill="#ff005d"/>
		<rect transform="rotate(25 9.038469314575199,15.320510864257812)" stroke="null" height="27.05125" width="3.46153" y="1.79489" x="7.3077" stroke-opacity="null" stroke-width="null" fill="#002b41"/>
		<rect stroke="null" transform="rotate(17 24.16665840148926,15.320511817932127)" height="27.05125" width="3.46153" y="1.79489" x="22.43589" stroke-opacity="null" stroke-width="null" fill="#002b41"/>
	`);
};


makeActionButton.autofitX = function() {
	return svgWrap(`
		<rect stroke="null" transform="rotate(-25 9.038469314575199,15.320510864257812)" height="27.05125" width="3.46153" y="1.79489" x="7.3077" stroke-width="null" fill="#002b41"/>
		<rect stroke="null" transform="rotate(-25 21.24197387695312,8.920309066772457)" height="13.21048" width="3.46153" y="2.31507" x="19.51121" stroke-opacity="null" stroke-width="null" fill="#9ea3a8"/>
		<rect stroke="null" transform="rotate(25 9.038469314575199,15.320511817932129)" height="27.05125" width="3.46153" y="1.79489" x="7.3077" stroke-width="null" fill="#002b41"/>
		<rect stroke="null" transform="rotate(17 24.166656494140632,15.320510864257804)" height="27.05125" width="3.46153" y="1.79489" x="22.43589" stroke-opacity="null" stroke-width="null" fill="#9ea3a8"/>
	`);
};


makeActionButton.autofitY = function() {
	return svgWrap(`
		<rect stroke="null" transform="rotate(-25 9.038469314575199,15.320510864257812)" height="27.05125" width="3.46153" y="1.79489" x="7.3077" stroke-opacity="null" stroke-width="null" fill="#9ea3a8"/>
		<rect stroke="null" transform="rotate(-25 21.24197387695312,8.920309066772457)" height="13.21048" width="3.46153" y="2.31507" x="19.51121" stroke-opacity="null" stroke-width="null" fill="#ff005d"/>
		<rect stroke="null" transform="rotate(25 9.038469314575199,15.320511817932129)" height="27.05125" width="3.46153" y="1.79489" x="7.3077" stroke-opacity="null" stroke-width="null" fill="#9ea3a8"/>
		<rect stroke="null" transform="rotate(17 24.16665840148926,15.320511817932127)" height="27.05125" width="3.46153" y="1.79489" x="22.43589" stroke-opacity="null" stroke-width="null" fill="#002b41"/>
	`);
};


makeActionButton.deletePathPoint = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let red = actionButtonIconColors.redX;

	// Handles
	re += `
		<line stroke="${blue}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${blue}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${blue}" cx="3" cy="23" r="3"/>
		<circle fill="${blue}" cx="23" cy="3" r="3"/>
	`;

	// delete
	re += `
		<path fill="${red}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${red}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>';
	`;

	return svgWrap(re);
};

makeActionButton.insertPathPoint = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;

	// Handles
	re += `
		<line stroke="${blue}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${blue}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${blue}" cx="3" cy="23" r="3"/>
		<circle fill="${blue}" cx="23" cy="3" r="3"/>
	`;

	// add
	re += `
		<rect x="21" y="15" fill="${blue}" width="3" height="15"/>
		<rect x="15" y="21" fill="${blue}" width="15" height="3"/>';
	`;

	return svgWrap(re);
};

makeActionButton.subtractUsingBottom = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;
	let sub = actionButtonIconColors.lightFill;

	re += `
		<path fill="${fill}" d="M11,29v-6c6.6,0,12-5.4,12-12h6v18H11z"/>
		<path fill="${blue}" d="M28,12v16H12v-4c6.4-0.5,11.5-5.6,12-12H28 M30,10h-8.1c0,0.3,0.1,0.7,0.1,1c0,6.1-4.9,11-11,11c-0.3,0-0.7,0-1-0.1V30h20V10L30,10z"/>
		<circle fill="${sub}" cx="11" cy="11" r="11"/>
	`;

	return svgWrap(re);
};

makeActionButton.subtractUsingTop = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;
	let sub = actionButtonIconColors.lightFill;

	re += `
		<rect fill="${sub}" x="11" y="11" width="19" height="19"/>
		<path fill="${fill}" d="M10,21c-5-0.5-9-4.8-9-10C1,5.5,5.5,1,11,1c5.2,0,9.4,4,10,9H10V21z"/>
		<path fill="${blue}" d="M11,2c4.3,0,7.9,3,8.8,7H11H9v2v8.8c-4-0.9-7-4.5-7-8.8C2,6,6,2,11,2 M11,0C4.9,0,0,4.9,0,11s4.9,11,11,11V11h11C22,4.9,17.1,0,11,0L11,0z"/>
	`;

	return svgWrap(re);
};

makeActionButton.combine = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;

	re += `
		<path fill="${fill}" d="M11,29v-8L10.1,21C4.9,20.5,1,16.2,1,11C1,5.5,5.5,1,11,1c5.2,0,9.5,3.9,10,9.1L21,11h8v18H11z"/>
		<path fill="${blue}" d="M11,2c4.7,0,8.5,3.5,9,8.2l0.2,1.8h1.8H28v16H12v-6.1v-1.8L10.2,20C5.5,19.5,2,15.7,2,11C2,6,6,2,11,2M11,0C4.9,0,0,4.9,0,11c0,5.7,4.4,10.4,10,10.9V30h20V10h-8.1C21.4,4.4,16.7,0,11,0L11,0z"/>
	`;

	return svgWrap(re);
};

makeActionButton.switchShapeComponent = function(com) {
	let re = '';
	let before = com ? actionButtonIconColors.greenOutline : actionButtonIconColors.blueOutline;
	let after = com ? actionButtonIconColors.blueOutline : actionButtonIconColors.greenOutline;
	let fill = actionButtonIconColors.darkFill;

	re += `
		<polygon fill="${fill}" points="5.1,21 1,17.2 1,1 3.4,1 10,11.3 10,21"/>
		<path fill="${before}" d="M2.9,2L9,11.6V20H5.5L2,16.7V2H2.9 M3.9,0H0v17.6L4.7,22H11V11L3.9,0L3.9,0z"/>
		<polygon fill="${fill}" points="21.8,29 16,23.6 16,1 19.8,1 29,15.3 29,29"/>
		<path fill="${after}" d="M19.1,2L28,15.6V28h-5.8L17,23.1V2h2 M20.4,0H15v24l6.4,6H30V15L20.4,0L20.4,0z"/>
	`;

	return svgWrap(re);
};

makeActionButton.moveLayerDown = function() {
	let re = '';
	let accent = actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;

	re += `
		<rect fill="${accent}" x="23" y="21" width="2" height="7"/>
		<path fill="${accent}" d="M20,26h8l-4,4C24,30,19.9,25.9,20,26z"/>
		<polygon fill="${accent}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${fill}" points="15,14 0,7 15,0 30,7"/>
	`;

	return svgWrap(re);
};

makeActionButton.moveLayerUp = function() {
	let re = '';
	let accent = actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;

	re += `
		<rect fill="${accent}" x="23" y="23" width="2" height="7"/>
		<path fill="${accent}" d="M20,25h8l-4-4C24,21,19.9,25.1,20,25z"/>
		<polygon fill="${fill}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${accent}" points="15,14 0,7 15,0 30,7"/>
	`;

	return svgWrap(re);
};

makeActionButton.deleteShape = function() {
	let re = '';
	let red = actionButtonIconColors.redX;
	let accent = actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;

	// shape
	re += `
		<rect fill="${fill}" x="1" y="1"	width="16" height="16"/>
		<path fill="${accent}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`;

	// delete
	re += `
		<path fill="${red}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${red}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`;

	return svgWrap(re);
};

makeActionButton.flipVertical = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let gray = actionButtonIconColors.grayOutline;
	let fill = actionButtonIconColors.darkFill;

	re += `
		<polygon fill="${fill}" points="6.4,13 1,7.6 1,1 14.7,1 29,9.6 29,13"/>
		<path fill="${gray}" d="M14.2,2L28,10.1V12H6.8L2,7.2V2h12 M15,0H0v8l6,6h24V9L15,0L15,0z"/>
		<polygon fill="${fill}" points="1,29 1,22.4 6.4,17 29,17 29,20.4 14.7,29"/>
		<path fill="${blue}" d="M28,18v1.9L14.4,28H2v-5.2L6.8,18H28 M30,16H6l-6,6v8h15l15-9V16L30,16z"/>
	`;

	return svgWrap(re);
};

makeActionButton.flipHorizontal = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let gray = actionButtonIconColors.grayOutline;
	let fill = actionButtonIconColors.darkFill;

	re += `
		<polygon fill="${fill}" points="1,29 1,15.3 9.6,1 13,1 13,23.6 7.6,29"/>
		<path fill="${gray}" d="M12,2v21.2L7.2,28H2V15.6L10.1,2H12 M14,0H9L0,15v15h8l6-6V0L14,0z"/>
		<polygon fill="${fill}" points="22.4,29 17,23.6 17,1 20.4,1 29,15.3 29,29"/>
		<path fill="${blue}" d="M19.9,2L28,15.6V28h-5.2L18,23.2V2H19.9 M21,0h-5v24l6,6h8V15L21,0L21,0z"/>
	`;

	return svgWrap(re);
};

makeActionButton.copy = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let gray = actionButtonIconColors.grayOutline;
	let fill = actionButtonIconColors.darkFill;

	re += `
		<polygon fill="${fill}" points="1,22 1,10.4 10.4,1 18,1 18,22"/>
		<path fill="${gray}" d="M17,2v19H2V10.8L10.8,2H17 M19,0h-9L0,10v13h19V0L19,0z"/>
		<polygon fill="${fill}" points="12,29 12,17.4 21.4,8 29,8 29,29"/>
		<path fill="${blue}" d="M28,9v19H13V17.8L21.8,9H28 M30,7h-9L11,17v13h19V7L30,7z"/>
	`;

	return svgWrap(re);
};

makeActionButton.pasteShapesFromAnotherGlyph = function() {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;

	re += `
		<rect fill="${fill}" x="5" y="7"	width="20" height="22"/>
		<path fill="${blue}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${fill}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${blue}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${blue}" d="M17.4,20.6h-4.8l-1,3h1.6v1.7H8v-1.7h1.6l3.6-10.2h-1.6V12h6.8v1.5h-1.7l3.7,10.2H22v1.7h-5.2v-1.7h1.7L17.4,20.6z M16.9,19.1l-1.8-5.6H15l-1.8,5.6H16.9z"/>
	`;

	return svgWrap(re);
};

makeActionButton.addShape = function(component) {
	let re = '';
	let accent = component?
		actionButtonIconColors.greenOutline : actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;

	// shape
	re += `
		<rect fill="${fill}" x="1" y="1"	width="16" height="16"/>
		<path fill="${accent}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`;

	// add
	re += `
		<rect x="21" y="15" fill="${accent}" width="3" height="15"/>
		<rect x="15" y="21" fill="${accent}" width="15" height="3"/>
	`;

	return svgWrap(re);
};

makeActionButton.undo = function(disabled) {
	let re = '';
	let blue = disabled ? actionButtonIconColors.disabledOutline : actionButtonIconColors.blueOutline;
	let fill = disabled ? actionButtonIconColors.disabledFill : actionButtonIconColors.darkFill;

	re += `
		<path fill="${fill}" d="M20.1,23c4.6-5,6.6-9.6,5.5-12.8C24.9,8.2,22.9,7,20,7c-5.9,0-8.8,5.3-8.9,5.5L10.9,13l2.4,4.1l-12,0.8l4-14.4l2.5,4.2l0.9-1.1c0,0,4-4.6,11.2-4.6c4.1,0,7.9,2.8,8.8,6.5C29.4,10.8,29.3,16.3,20.1,23z"/>
		<path fill="${blue}" d="M20,3c3.1,0,6.9,2,7.8,5.7c0.5,2.1-0.1,4.4-1.6,6.7c0.7-2,0.9-3.9,0.3-5.5C25.7,7.4,23.3,6,20,6c-6.5,0-9.6,5.8-9.8,6.1l-0.5,1l0.6,1l1.3,2.2l-8.9,0.6L5.7,6l0.6,1l1.4,2.4l1.8-2.2C9.6,7.2,13.2,3,20,3 M20,1C12.2,1,8,6,8,6L5,1L0,19l15-1l-3-5c0,0,2.6-5,8-5c7.7,0,7.2,9.2-8,21C39.8,15,29.5,1,20,1L20,1z"/>
	`;

	return svgWrap(re);
};

makeActionButton.paste = function(disabled) {
	let re = '';
	let blue = disabled ? actionButtonIconColors.disabledOutline : actionButtonIconColors.blueOutline;
	let fill = disabled ? actionButtonIconColors.disabledFill : actionButtonIconColors.darkFill;

	re += `
		<rect fill="${fill}" x="5" y="7"	width="20" height="22"/>
		<path fill="${blue}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${fill}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${blue}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
	`;

	return svgWrap(re);
};

makeActionButton.align = function(edge) {
	let re = '';
	let blue = actionButtonIconColors.blueOutline;
	let fill = actionButtonIconColors.darkFill;

	switch (edge) {
		case 'bottom':
			re += `
				<rect fill="${fill}" x="1" y="21" width="6" height="8"/>
				<path fill="${blue}" d="M6,22v6H2v-6H6 M8,20H0v10h8V20L8,20z"/>
				<rect fill="${fill}" x="12" y="5" width="6" height="24"/>
				<path fill="${blue}" d="M17,6v22h-4V6H17 M19,4h-8v26h8V4L19,4z"/>
				<rect fill="${fill}" x="23" y="15" width="6" height="14"/>
				<path fill="${blue}" d="M28,16v12h-4V16H28 M30,14h-8v16h8V14L30,14z"/>
			`;
			break;

		case 'middle':
			re += `
				<rect fill="${fill}" x="1" y="11" width="6" height="8"/>
				<path fill="${blue}" d="M6,12v6H2v-6H6 M8,10H0v10h8V10L8,10z"/>
				<rect fill="${fill}" x="12" y="3" width="6" height="24"/>
				<path fill="${blue}" d="M17,4v22h-4V4H17 M19,2h-8v26h8V2L19,2z"/>
				<rect fill="${fill}" x="23" y="8" width="6" height="14"/>
				<path fill="${blue}" d="M28,9v12h-4V9H28 M30,7h-8v16h8V7L30,7z"/>
			`;
			break;

		case 'top':
			re += `
				<rect fill="${fill}" x="1" y="1" width="6" height="8"/>
				<path fill="${blue}" d="M6,2v6H2V2H6 M8,0H0v10h8V0L8,0z"/>
				<rect fill="${fill}" x="12" y="1" width="6" height="24"/>
				<path fill="${blue}" d="M17,2v22h-4V2H17 M19,0h-8v26h8V0L19,0z"/>
				<rect fill="${fill}" x="23" y="1" width="6" height="14"/>
				<path fill="${blue}" d="M28,2v12h-4V2H28 M30,0h-8v16h8V0L30,0z"/>
			`;
			break;

		case 'left':
			re += `
				<rect fill="${fill}" x="1" y="1" width="8" height="6"/>
				<path fill="${blue}" d="M8,2v4H2V2H8 M10,0H0v8h10V0L10,0z"/>
				<rect fill="${fill}" x="1" y="12" width="24" height="6"/>
				<path fill="${blue}" d="M24,13v4H2v-4H24 M26,11H0v8h26V11L26,11z"/>
				<rect fill="${fill}" x="1" y="23" width="14" height="6"/>
				<path fill="${blue}" d="M14,24v4H2v-4H14 M16,22H0v8h16V22L16,22z"/>
			`;
			break;

		case 'center':
			re += `
				<rect fill="${fill}" x="11" y="1" width="8" height="6"/>
				<path fill="${blue}" d="M18,2v4h-6V2H18 M20,0H10v8h10V0L20,0z"/>
				<rect fill="${fill}" x="3" y="12" width="24" height="6"/>
				<path fill="${blue}" d="M26,13v4H4v-4H26 M28,11H2v8h26V11L28,11z"/>
				<rect fill="${fill}" x="8" y="23" width="14" height="6"/>
				<path fill="${blue}" d="M21,24v4H9v-4H21 M23,22H7v8h16V22L23,22z"/>
			`;
			break;

		case 'right':
			re += `
				<rect fill="${fill}" x="21" y="1" width="8" height="6"/>
				<path fill="${blue}" d="M28,2v4h-6V2H28 M30,0H20v8h10V0L30,0z"/>
				<rect fill="${fill}" x="5" y="12" width="24" height="6"/>
				<path fill="${blue}" d="M28,13v4H6v-4H28 M30,11H4v8h26V11L30,11z"/>
				<rect fill="${fill}" x="15" y="23" width="14" height="6"/>
				<path fill="${blue}" d="M28,24v4H16v-4H28 M30,22H14v8h16V22L30,22z"/>
			`;
			break;
	}

	return svgWrap(re);
};