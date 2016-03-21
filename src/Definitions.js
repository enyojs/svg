/**
* Contains the declaration for the {@link module:svg/Definitions~Definitions} kind.
* @module svg/Definitions
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Element = require('./Element')
	;

/**
* {@link module:svg/Definitions~Definitions} is a Component that creates a SVG Definitions element.
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Mask = require('svg/Mask'),
*		Definitions = require('svg/Definitions');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Definitions, components: [
*				{kind: Mask, maskUnits: 'userSpaceOnUse', x:0, y:0, width: 100, height:100, fill:'white'}
*			]}
* 		]}
* ```
*
* @class Definitions
* @extends module:svg/Element~Element
* @ui
* @public
*/


module.exports = kind({
	/**
	* @private
	*/
	name: 'Definitions',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'defs'
});
