/**
* Contains the declaration for the {@link module:svg/Line~Line} kind.
* @module svg/Line
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

/**
* {@link module:svg/Line~Line} is a Component that creates a SVG Line element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Line = require('svg/Line');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
*			{kind: Line, x1: 10, y1: 10, x2: 50, y2: 50, stroke: 'black', style: 'stroke-width: 3px;'}
* 		]}
* ```
*
* @class Line
* @extends module:svg/Shape~Shape
* @ui
* @public
*/
module.exports = kind({
	/**
	* @private
	*/
	name: 'Line',
	/**
	* @private
	*/
	kind: Shape,
	/**
	* @private
	*/
	tag: 'line',
	supportedAttributes: [
		'x1',
		'x2',
		'y1',
		'y2'
	]
});
