/**
* Contains the declaration for the {@link module:svg/Tref~Tref} kind.
* @module svg/Tref
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Text = require('./Text')
	;

/**
* {@link module:svg/Tref~Tref} is a Component that creats an SVG Tref element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tref
*
* The exception for Tref is target. The `'target'` attribute converts to xlink:href
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		SvgText = require('svg/Text'),
*		SvgTref = require('svg/Tref');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: SvgText, classes: 'svg-sample-header-text', components: [
*	 			{kind: Tref, target: 'textPath'}
* 			]}
* 		]}
* ```
*
* @class Tref
* @extends module:svg/Text~Text
* @ui
* @public
*/


module.exports = kind({
	/**
	* @private
	*/
	name: 'Tref',
	/**
	* @private
	*/
	kind: Text,
	/**
	* @private
	*/
	tag: 'tref'
});
