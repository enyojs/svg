/**
* Contains the declaration for the {@link module:svg/Ellipse~Ellipse} kind.
* @module svg/Ellipse
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

/**
* {@link module:svg/Ellipse~Ellipse} is a Component that creates a SVG Ellipse element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Ellipse = require('svg/Ellipse');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Ellipse, cx: 30, cy: 30, rx: 15, ry: 40, style: 'fill: #FFCB00;'}
* 		]}
* ```
*
* @class Ellipse
* @extends module:svg/Shape~Shape
* @ui
* @public
*/
module.exports = kind({
	/**
	* @private
	*/
	name: 'Ellipse',
	/**
	* @private
	*/
	kind: Shape,
	/**
	* @private
	*/
	tag: 'ellipse',
	supportedAttributes: [
		'cx',
		'cy',
		'rx',
		'ry'
	]
});
