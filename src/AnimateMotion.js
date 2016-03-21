/**
* Contains the declaration for the {@link module:svg/AnimateMotion~AnimateMotion} kind.
* @module svg/AnimateMotion
*/
require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

/**
* {@link module:svg/AnimateMotion~AnimateMotion} is a Component that creates a SVG AnimateMotion element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		AnimateMotion = require('svg/AnimateMotion');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Rectangle, width: 100, height: 100, x: 0, y: 0, style: 'fill: cyan;', components: [
* 				{kind: AnimateMotion, path:'M10,50 q60,50 100,0 q60,-50 100,0', begin: '0s' dur:'6s', repeatCount:'indefinite', rotate:'auto'}
* 			]}
* 		]}
* ```
*
* @class AnimateMotion
* @extends module:svg/Element~Element
* @ui
* @public
*/
module.exports = kind({
	/**
	* @private
	*/
	name: 'AnimateMotion',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'animateMotion',
	supportedAttributes: util.merge(
		attrs.animationTiming,
		attrs.animationValue,
		attrs.animationAddition,
		[
			'calcMode',
			'path',
			'keyPoints',
			'rotate',
			'origin'
		]
	),
	/**
	* @private
	*/
	transforms: {
		dur: function (val) { return isNaN(val) ? val : val + 'ms'; }
	}
});
