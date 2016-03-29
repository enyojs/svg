/**
* Contains the declaration for the {@link module:svg/Image~Image} kind.
* @module svg/Image
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Element = require('./Element')
	;

/**
* {@link module:svg/Image~Image} is a Component that creates a SVG Image element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image
*
* The exception for image is target. The `'target'` attribute converts to xlink:href
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Image = require('svg/Image');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
*			{kind: Image, target: `'/files/2917/fxlogo.png'`, x: 40, y: 60, width: 30, height: 30},
* 		]}
* ```
*
* @class Image
* @extends module:svg/Element~Element
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Image',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'image',
	supportedAttributes: [
		'x',
		'y',
		'width',
		'height',
		'preserveAspectRatio'
	]
});
