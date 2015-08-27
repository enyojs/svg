require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform
module.exports = kind({
	name: 'AnimateTransform',
	kind: Element,
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
	transforms: {
		dur: function (val) { return isNaN(val) ? val : val + 'ms'; }
	}
});
