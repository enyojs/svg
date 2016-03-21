/**
* Contains the declaration for the {@link module:svg/Marker~Marker} kind.
* @module svg/Marker
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Element = require('./Element')
	;

/**
* {@link module:svg/Marker~Marker} is a Component that creates a SVG Marker element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/Marker
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Definitions = require('svg/Definitions'),
*		Marker = require('svg/Marker');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
*			{kind: Definitions, components: [
*				{kind: Marker, refX:'1', refY:'5', markerWidth:'6', markerHeight:'6', orient:'auto'}
*			]}
* 		]}
* ```
*
* @class Marker
* @extends module:svg/Element~Element
* @ui
* @public
*/
module.exports = kind({
	/**
	* @private
	*/
	name: 'Marker',
	/**
	* @private
	*/
	kind: Element,
	tag: 'marker',
	supportedAttributes: [
		'markerUnits',
		'refX',
		'refY',
		'markerWidth',
		'markerHeight',
		'orient'
	]
});
