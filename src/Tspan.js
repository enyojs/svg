/**
* Contains the declaration for the {@link module:svg/Tspan~Tspan} kind.
* @module svg/Tspan
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Text = require('./Text')
	;

/**
* {@link module:svg/Tspan~Tspan} is a Component that creats an SVG Tspan element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
*
* The exception for Tspan is target. The `'target'` attribute converts to xlink:href
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		SvgText = require('svg/Text'),
*		Tspan = require('svg/Tspan');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: SvgText, classes: 'svg-sample-header-text', components: [
*	 			{kind: Tspan, content: 'hello world', style: 'color: red'}
* 			]}
* 		]}
* ```
*
* @class Tspan
* @extends module:svg/Text~Text
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Tspan',
	/**
	* @private
	*/
	kind: Text,
	/**
	* @private
	*/
	tag: 'tspan'
});
