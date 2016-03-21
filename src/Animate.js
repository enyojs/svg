/**
* Contains the declaration for the {@link module:svg/Animate~Animate} kind.
* @module svg/Animate
*/
require('svg');


var
	kind = require('enyo/kind'),
	util = require('enyo/utils'),
	macroize = require('enyo/macroize')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;
/**
* {@link module:svg/Animate~Animate} is a Component that creates a SVG Animate element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate
*
* There are a couple ways to do animations with Keyframes.
* One using keyframes, the other using keyframeLibrary
*
* Using keyframes
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Animate = require('svg/Animate');
*
* 		module.exports = kind({
* 			name: 'AnimWobbleInfromTopAndHide',
* 			kind: Animate,
* 			keyframes: [
* 				'M0,20v-1c0,0,18.8,0,25,0s25,0,25,0v1H0z',
*				'M0,20v-7c0,0,18.8,2,25,2s25-1,25-1v6H0z',
*				'M0,65V30c8.2-2.3,13.7-5,25-5s17.7,2.5,25,5v35H0z',
*				'M0,100V60c8.7,2.2,13.7,7,25,7s17.8-4.5,25-7v40H0z',
*				'M0,100V20c8.3-1.2,18.8-2,25-2s17.5,1,25,2v80H0z',
*				'M0,100V20c7.7-3.2,18.8-5,25-5s18.2,2,25,5v80H0z',
*				'M0,100V20c5,0,18.8,0,25,0s20.2,0,25,0v80H0z',
*				'M0,100v-1c5,0,18.8,0,25,0s20.2,0,25,0v1H0z'
*			],
*		});
* ```
*
* Using keyframeLibrary
*
* This allows us to name our animations
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Animate = require('svg/Animate');
*
* 		module.exports = kind({
* 			name: 'AnimWobbleInfromTopAndHide',
* 			kind: Animate,
* 			keyframeLibrary: {
* 				next: [
* 					'M0,20v-1c0,0,18.8,0,25,0s25,0,25,0v1H0z',
*	 				'M0,20v-7c0,0,18.8,2,25,2s25-1,25-1v6H0z',
*					'M0,65V30c8.2-2.3,13.7-5,25-5s17.7,2.5,25,5v35H0z',
*					'M0,100V60c8.7,2.2,13.7,7,25,7s17.8-4.5,25-7v40H0z',
*					'M0,100V20c8.3-1.2,18.8-2,25-2s17.5,1,25,2v80H0z',
*					'M0,100V20c7.7-3.2,18.8-5,25-5s18.2,2,25,5v80H0z',
*					'M0,100V20c5,0,18.8,0,25,0s20.2,0,25,0v80H0z',
*					'M0,100v-1c5,0,18.8,0,25,0s20.2,0,25,0v1H0z'
*				],
*				prev: [
*					'M0,80v1c7.7-0.3,18.8-1,25-1s17.5,0.5,25,1v-1H0z',
*					'M0,80v20c7.8-2.3,18.8-5,25-5s17.3,3.2,25,5V80H0z',
*					'M0,0v50c7.8-2.3,18.8-3,25-3s17.3,1.2,25,3V0H0z',
*					'M0,0v80c0,0,18.8,2,25,2s25-2,25-2V0H0z',
*					'M0,0v80c0,0,18.8,0,25,0s25,0,25,0V0H0z',
*					'M0,0v1c0,0,18.8,0,25,0s25,0,25,0V0H0z'
*				]
*			}
*		});
* ```
*
* @class Animate
* @extends module:svg/Element~Element
* @ui
* @public
*/

module.exports = kind({
	name: 'Animate',
	kind: Element,
	tag: 'animate',
	// Local defaults
	/**
    * A property to define attributeName
    *
    * @type {String}
    * @default 'd'
    * @public
    */
	attributeName: 'd',
	/**
    * A property to determine the repeat count of an animation
    *
    * @type {Number}
    * @default 1
    * @public
    */
	repeatCount: 1,
	/**
    * A property to determine the fill of an animation
    *
    * @type {String}
    * @default 'remove'
    * @public
    */
	fill: 'remove',
	/**
    * Property to determine start time for animations
    *
    * @type {String}
    * @default 'indefinite'
    * @public
    */
	begin: 'indefinite',
	supportedAttributes: util.merge(
		attrs.animationTarget,
		attrs.animationTiming,
		attrs.animationValue,
		attrs.animationAddition
	),
	/**
    * A property for the keyframes array you wish to animate
    *
    * @type {Array}
    * @default []
    * @public
    */
	keyframes: null,
	/**
    * Keyframe Library is a property that accpepts and object.
    * This object can contain keys and values with the values
    * being an array keyframe animations
    *
    * @type {Object}
    * @default null
    * @public
    */
	keyframeLibrary: null,
	/**
	* @private
	*/
	keyframeCount: function () {
		return this.get('keyframes').length;
	},
	/**
	* @private
	*/
	computed: {
		keyframeCount: ['keyframes']
	},
	/**
	* @private
	*/
	transforms: {
		dur: function (val) { return isNaN(val) ? val : val + 'ms'; }
	},
	// Methods
	/**
	* @private
	*/
	constructor: function() {
		this.keyframes = [];
		this.inherited(arguments);
    },
	/**
	* @private
	*/
	create: function () {
		this.inherited(arguments);
		this.keyframesChanged();
	},
	/**
	* @private
	*/
	timeAtFrame: function (frameIndex) {
		if (!frameIndex) { return 0; }
		return this.get('dur') * (frameIndex / this.get('keyframeCount'));
	},
	/**
	* @private
	*/
	timeAtEnd: function () {
		return this.get('dur');
	},
	/**
	* @private
	*/
	start: function () {
		var node = this.hasNode();
		if (node) {
			node.beginElement();
		}
	},
	/**
	* @private
	*/
	updateTokens: function () {
		this.keyframesChanged();
	},
	/**
	* @private
	*/
	checkout: function (name) {
		this.set('keyframes', util.clone(this.get('keyframeLibrary')[name]));
		return this.get('keyframes');
	},
	/**
	* @private
	*/
	keyframesChanged: function () {
		this.set('values', macroize.quickMacroize(this.get('keyframes').join('; '), this, /\$(\w+)/g ));
	}
});