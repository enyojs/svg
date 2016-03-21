/**
* Contains the declaration for the {@link module:svg/Rectangle~Rectangle} kind.
* @module svg/Rectangle
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;
/**
* {@link module:svg/Rectangle~Rectangle} is a Component that creates a SVG Rectangle element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Rectangle = require('svg/Rectangle');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Rectangle, width: 100, height: 100, x: 0, y: 0, style: 'fill: cyan;'}
* 		]}
* ```
*
* @class Rectangle
* @extends module:svg/Shape~Shape
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Rectangle',
	/**
	* @private
	*/
	kind: Shape,
	tag: 'rect',
	supportedAttributes: [
		'x',
		'y',
		'width',
		'height',
		'rx',
		'ry'
	]
});
