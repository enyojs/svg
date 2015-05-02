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

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate
module.exports = kind({
	name: 'Animate',
	kind: Element,
	tag: 'animate',

	// Local defaults
	attributeName: 'd',
	repeatCount: 1,
	fill: 'remove',
	begin: 'indefinite',
	supportedAttributes: util.merge(
		attrs.animationTarget,
		attrs.animationTiming,
		attrs.animationValue,
		attrs.animationAddition
	),
	keyframes: [],
	keyframeLibrary: null,
	keyframeCount: function () {
		return this.get('keyframes').length;
	},
	computed: {
		keyframeCount: ['keyframes']
	},
	transforms: {
		dur: function (val) { return isNaN(val) ? val : val + 'ms'; }
	},
	// Methods
	create: function () {
		this.inherited(arguments);
		this.keyframesChanged();
	},
	timeAtFrame: function (frameIndex) {
		if (!frameIndex) { return 0; }
		return this.get('dur') * (frameIndex / this.get('keyframeCount'));
	},
	timeAtEnd: function () {
		return this.get('dur');
	},
	start: function () {
		var node = this.hasNode();
		if (node) {
			node.beginElement();
		}
	},
	updateTokens: function () {
		this.keyframesChanged();
	},
	checkout: function (name) {
		this.set('keyframes', util.clone(this.get('keyframeLibrary')[name]));
		return this.get('keyframes');
	},
	keyframesChanged: function () {
		this.set('values', macroize.quickMacroize(this.get('keyframes').join('; '), this, /\$(\w+)/g ));
	}
});