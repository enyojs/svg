/**
* Contains the declaration for the {@link module:svg/Pattern~Pattern} kind.
* @module svg/Pattern
*/
require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

/**
* {@link module:svg/Pattern~Pattern} is a Component that creates a SVG Pattern element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/Pattern
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Definitions = require('svg/Definitions'),
*		Pattern = require('svg/Pattern');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
*			{kind: Definitions, components: [
*				{kind: Pattern, patternUnits: 'userSpaceOnUse', width: 100, height:100}
*			]}
* 		]}
* ```
*
* @class Pattern
* @extends module:svg/Element~Element
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Pattern',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'pattern',
	supportedAttributes: utils.merge(
		attrs.presentation,
		[
			'viewBox',
			'patternUnits',
			'patternContentUnits',
			'patternTransform',
			'x',
			'y',
			'width',
			'height',
			'preserveAspectRatio'
		]
	)
});
