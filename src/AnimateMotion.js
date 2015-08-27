require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion
module.exports = kind({
	name: 'AnimateMotion',
	kind: Element,
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
	transforms: {
		dur: function (val) { return isNaN(val) ? val : val + 'ms'; }
	}

});
