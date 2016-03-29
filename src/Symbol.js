/**
* Contains the declaration for the {@link module:svg/Symbol~Symbol} kind.
* @module svg/Symbol
*/
require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

/**
* {@link module:svg/Symbol~Symbol} is a Component that creates a SVG Symbol element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Symbol = require('svg/Symbol');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Symbol, id: 'symbol1' components: [
*	 			{kind: Circle, cx: 30, cy: 30, r: 15, style: 'fill: #FFCB00;'},
*	 			{kind: Circle, cx: 45, cy: 45, r: 15, style: 'fill: #FFCB00;'}
* 			]},
* 		]}
* ```
*
* @class Symbol
* @extends module:svg/Element~Element
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Symbol',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'symbol',
	supportedAttributes: utils.merge(
		attrs.presentation,
		[
			'preserveAspectRatio',
			'viewBox'
		]
	)
});
