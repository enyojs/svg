/**
* Contains the declaration for the {@link module:svg/Root~Root} kind.
* @module svg/Root
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Element = require('./Element')
	;

/**
* {@link module:svg/Root~Root} is a Component that creates a SVG element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Root, width: 100, height: 100, x: 0, y: 0, style: 'fill: cyan;'}
* 		]}
* ```
*
* @class Root
* @extends module:svg/Element~Element
* @ui
* @public
*/


// Root element, container for all SVG nodes
module.exports = kind({
	/**
	* @private
	*/
	name: 'Root',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'svg',
	classes: 'enyo-svg',
	preserveAspectRatio: 'none',
	supportedAttributes: [
		'viewBox',
		'preserveAspectRatio'
	],
	/**
	* @private
	*/
	create: function () {
		this.inherited(arguments);
		this.setAttribute('version', '1.1');
		this.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		this.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	}
});
