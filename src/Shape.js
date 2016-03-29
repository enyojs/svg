/**
* Contains the declaration for the {@link module:svg/Shape~Shape} kind.
* @module svg/Shape
*/
require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils')
	;

var
	attrs = require('./globalattributes'),
	svgUtil = require('./utils'),
	Element = require('./Element')
	;

var targetLinker = function (control, attr) {
	control = svgUtil.getId(control);
	if (control) {
		this.setAttribute(attr, 'url(#' + control + ')');
	}
};

/**
* {@link module:svg/Shape~Shape} is a kind that serves as a Base-kind for all SVG shape elements.
*
* ```javascript
* 		var
* 			Shape = require('./Shape');
*
* 		module.exports = kind({
*	 		name: 'Rectangle',
* 			kind: Shape,
* 			tag: 'rect',
* 			supportedAttributes: [
* 			'x',
* 			'y',
* 			'width',
* 			'height',
* 			'rx',
* 			'ry'
* 		]});
* ```
*
* @class Shape
* @extends module:svg/Element~Element
* @ui
* @public
*/

// Base-kind for all shape elements
module.exports = kind({
	/**
	* @private
	*/
	name: 'Shape',
	/**
	* @private
	*/
	kind: Element,
	supportedAttributes: util.merge(
		attrs.presentation
	),
	transforms: {
		'marker-end': targetLinker,
		'marker-mid': targetLinker,
		'marker-start': targetLinker
	}
});
