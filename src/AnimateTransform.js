/**
* Contains the declaration for the {@link module:svg/AnimateTransform~AnimateTransform} kind.
* @module svg/AnimateTransform
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
* {@link module:svg/AnimateTransform~AnimateTransform} is a Component that creates a SVG AnimateTransform element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		AnimateTransform = require('svg/AnimateTransform');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px;', components: [
* 			{kind: Rectangle, width: 100, height: 100, x: 0, y: 0, style: 'fill: cyan;', components: [
* 				{kind: AnimateTransform, attributeName:'transform', type:'scale', from:'1 1' to:'2 3', begin:'0s' dur:'10s', repeatCount:'indefinite'}
* 			]}
* 		]}
* ```
*
* @class AnimateTransform
* @extends module:svg/Element~Element
* @ui
* @public
*/
module.exports = kind({
	/**
	* @private
	*/
	name: 'AnimateTransform',
	/**
	* @private
	*/
	kind: Element,
	/**
	* @private
	*/
	tag: 'animateTransform',
	supportedAttributes: util.merge(
		attrs.animationTarget,
		attrs.animationTiming,
		attrs.animationValue,
		attrs.animationAddition,
		[
			'by',
			'from',
			'to',
			'type'
		]
	),
	/**
	* @private
	*/
	transforms: {
		dur: function (val) { return isNaN(val) ? val : val + 'ms'; }
	}
});
