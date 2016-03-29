/**
* Contains the declaration for the {@link module:svg/Circle~Circle} kind.
* @module svg/Circle
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

/**
* {@link module:svg/Circle~Circle} is a Component that creates a SVG circle element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
*
*
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Circle = require('svg/Circle');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Circle, cx: 30, cy: 30, r: 15, style: 'fill: #FFCB00;'}
* 		]}
* ```
*
* @class Circle
* @extends module:svg/Shape~Shape
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Circle',
	/**
	* @private
	*/
	kind: Shape,
	tag: 'circle',
	supportedAttributes: [
		'cx',
		'cy',
		'r'
	]
});
