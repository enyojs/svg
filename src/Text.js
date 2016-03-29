/**
* Contains the declaration for the {@link module:svg/Text~Text} kind.
* @module svg/Text
*/
require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

/**
* {@link module:svg/Text~Text} is a Component that creats an SVG Text element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		SvgText = require('svg/Text');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: SvgText, content: 'SVG Text', x: 20, y: 55, style: 'fill: #BF4C41;', classes: 'svg-sample-header-text'},
* 		]}
* ```
*
* @class Text
* @extends module:svg/Element~Element
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Text',
	/**
	* @private
	*/
	kind: Element,
	tag: 'text',
	supportedAttributes: util.merge(
		attrs.presentation,
		[
			'x',
			'y',
			'dx',
			'dy',
			'text-anchor',
			'rotate',
			'textLength',
			'lengthAdjust'
		]
	)
});
