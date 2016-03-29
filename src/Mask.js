/**
* Contains the declaration for the {@link module:svg/Mask~Mask} kind.
* @module svg/Mask
*/
require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

/**
* {@link module:svg/Mask~Mask} is a Component that creates a SVG Mask element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Definitions = require('svg/Definitions'),
*		Mask = require('svg/Mask');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
*			{kind: Definitions, components: [
*				{kind: Mask, maskUnits: 'userSpaceOnUse', x:0, y:0, width: 100, height:100, fill:'white'}
*			]}
* 		]}
* ```
*
* @class Mask
* @extends module:svg/Element~Element
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Mask',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'mask',
	/**
	* @private
	*/
	supportedAttributes: utils.merge(
		attrs.presentation,
		[
			'maskUnits',
			'maskContentUnits',
			'x',
			'y',
			'width',
			'height'
		]
	)
});
