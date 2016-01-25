require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern
module.exports = kind({
	name: 'Pattern',
	kind: Element,
	tag: 'pattern',
	supportedAttributes: utils.merge(
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
