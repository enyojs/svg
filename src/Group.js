/**
* Contains the declaration for the {@link module:svg/Group~Group} kind.
* @module svg/Group
*/
require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

/**
* {@link module:svg/Group~Group} is a Component that creates a SVG Group element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Group = require('svg/Group');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
*			{kind: Group, style: 'fill: white; ', stroke: 'green', components: [
*				{kind: Rectangle, width: 20, height: 40, x: 75, y: 30, transform: 'rotate(10,70,40)', style: 'fill: yellow'},
*				{kind: Rectangle, width: 20, height: 40, x: 75, y: 30, transform: 'rotate(10,170,40)', style: 'fill: #3E57BA;'}
*			]},
* 		]}
* ```
*
* @class Group
* @extends module:svg/Element~Element
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Group',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'g',
	supportedAttributes: utils.merge(
		attrs.presentation
	)
});
