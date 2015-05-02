require('svg');

var
	kind = require('enyo/kind')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern
module.exports = kind({
	name: 'Pattern',
	kind: Element,
	tag: 'pattern',
	supportedAttributes: enyo.merge(
		attrs.presentation,
		[
			'viewBox',
			'patternUnits',
			'patternContentUnits',
			'patternTransform',
			'x',
			'y',
			'width',
			'height',
			'preserveAspectRatio'
		]
	)
});
