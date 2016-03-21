/**
* Contains the declaration for the {@link module:svg/Switch~Switch} kind.
* @module svg/Switch
*/
require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

/**
* {@link module:svg/Switch~Switch} is a Component that creates a SVG Switch element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Switch = require('svg/Switch');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Switch, components: [
*				{kind: Group, systemLanguage: "en-UK", component:[
*					{kind: SvgText, content: 'UK English', x: 20, y: 55, style: 'fill: #BF4C41;', classes: 'svg-sample-header-text'},
*				]},
*				{kind: Group, systemLanguage: "en", component:[
*					{kind: SvgText, content: 'English', x: 20, y: 55, style: 'fill: #BF4C41;', classes: 'svg-sample-header-text'},
*				]},
*				{kind: Group, systemLanguage: "es", component:[
*					{kind: SvgText, content: 'Spanish', x: 20, y: 55, style: 'fill: #BF4C41;', classes: 'svg-sample-header-text'},
*				]},
* 			]},
* 		]}
* ```
*
* @class Switch
* @extends module:svg/Element~Element
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Switch',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'switch',
	supportedAttributes: utils.merge(
		attrs.presentation,
		[
			'transform',
			'allowReorder'
		]
	)
});
