import { GlyphElement } from './glyph_element.js';
import { hexesToChars } from '../common/character_ids.js';
import { getCurrentProject } from '../app/main.js';

/**
 * Kern Group
 * An object for storing two groups of glyphs, and
 * the horizontal kern value that applies to them.
 */
export class KernGroup extends GlyphElement {
	/**
	 * Set up the KernGroup object
	 * @param {array} leftGroup - Collection of Unicode values
	 * @param {array} rightGroup - Collection of Unicode values
	 * @param {number} value - Amount to move leftGroup to the right
	 */
	constructor({ leftGroup = [], rightGroup = [], value = 0 } = {}) {
		super();
		this.leftGroup = leftGroup;
		this.rightGroup = rightGroup;
		this.value = value;

		this.objType = 'KernGroup';
	}

	// --------------------------------------------------------------
	// Common Glyphr Studio object methods
	// --------------------------------------------------------------

	/**
	 * Export object properties that need to be saved to a project file
	 * @param {boolean} verbose - export some extra stuff that makes the saved object more readable
	 * @returns {*}
	 */
	save(verbose = false) {
		const re = {
			leftGroup: this.leftGroup.slice(),
			rightGroup: this.rightGroup.slice(),
			value: this._value,
		};

		if (verbose) re.objType = this.objType;

		return re;
	}

	// --------------------------------------------------------------
	// Getters
	// --------------------------------------------------------------

	/**
	 * Return the value for this kern
	 * @returns {number}
	 */
	get value() {
		return this._value || 0;
	}

	/**
	 * Creates a display name for this kern group
	 * @returns {string}
	 */
	get name() {
		const left = hexesToChars(this.leftGroup.map((id) => id.replace('glyph-', '')).join(''));
		const right = hexesToChars(this.rightGroup.map((id) => id.replace('glyph-', '')).join(''));
		return `${left} | ${right}`;
	}

	get leftGroupWidth() {
		let leftWidth = 0;
		const project = getCurrentProject();
		this.leftGroup.forEach((id) => {
			let item = project.getItem(id);
			if (item && item.advanceWidth) leftWidth = Math.max(leftWidth, item.advanceWidth);
		});
		return leftWidth;
	}

	get rightGroupWidth() {
		let rightWidth = 0;
		const project = getCurrentProject();
		this.rightGroup.forEach((id) => {
			let item = project.getItem(id);
			if (item && item.advanceWidth) rightWidth = Math.max(rightWidth, item.advanceWidth);
		});
		return rightWidth;
	}

	get groupWidth() {
		// log(`KernGroup GET groupWidth`, 'start');
		if (!this?.cache?.groupWidth) {
			const project = getCurrentProject();
			let leftWidth = this.leftGroupWidth || project.defaultAdvanceWidth;
			let rightWidth = this.rightGroupWidth || project.defaultAdvanceWidth;
			this.cache.groupWidth = leftWidth + this.value + rightWidth;
			// log(`this.cache.groupWidth: ${this.cache.groupWidth}`);
		}
		// log(`KernGroup GET groupWidth`, 'end');
		return this.cache.groupWidth;
	}

	// --------------------------------------------------------------
	// Setters
	// --------------------------------------------------------------

	/**
	 * Set the value for this kern
	 * @param {number} val
	 */
	set value(val) {
		this._value = parseInt(val) || 0;
	}
}
