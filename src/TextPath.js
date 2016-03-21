/**
* Contains the declaration for the {@link module:svg/TextPath~TextPath} kind.
* @module svg/TextPath
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Text = require('./Text')
	;

/**
* {@link module:svg/TextPath~TextPath} is a Component that creats an SVG TextPath element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		SvgText = require('svg/Text'),
*		TextPath = require('svg/TextPath');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: SvgText, classes: 'svg-sample-header-text', components: [
* 				{kind: TextPath, content: 'Text on a path!', style: 'fill: blanchedalmond;', target: 'textPath'}
* 			]}
* 		]}
* ```
*
* @class TextPath
* @extends module:svg/Shape~Shape
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'TextPath',
	/**
	* @private
	*/
	kind: Text,
	tag: 'textPath',
	supportedAttributes: [
		'startOffset',
		'method',
		'spacing'
	]
});
