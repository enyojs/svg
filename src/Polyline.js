/**
* Contains the declaration for the {@link module:svg/Polyline~Polyline} kind.
* @module svg/Polyline
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;


/**
* {@link module:svg/Polyline~Polyline} is a Component that creates a SVG Polyline element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Polyline = require('svg/Polyline');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Polyline,  fill: 'none', stroke: 'black', points: '20,100 40,60 70,80 100,20'}
* 		]}
* ```
*
* @class Polyline
* @extends module:svg/Shape~Shape
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Polyline',
	/**
	* @private
	*/
	kind: Shape,
	/**
	* @private
	*/
	tag: 'polyline',
	supportedAttributes: [
		'points'
	]
});
