/**
* Contains the declaration for the {@link module:svg/Polygon~Polygon} kind.
* @module svg/Polygon
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Polyline = require('./Polyline')
	;

/**
* {@link module:svg/Polygon~Polygon} is a Component that creates a SVG Polygon element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Polygon = require('svg/Polygon');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Polygon, points: '60,20 100,40 100,80 60,100 20,80 20,40', style: 'fill: orange'}
* 		]}
* ```
*
* @class Polygon
* @extends module:svg/Polyline~Polyline
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Polygon',
	/**
	* @private
	*/
	kind: Polyline,
	/**
	* @private
	*/
	tag: 'polygon'
});
