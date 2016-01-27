require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol
module.exports = kind({
	name: 'Symbol',
	kind: Element,
	tag: 'symbol',
	supportedAttributes: utils.merge(
		attrs.presentation,
		[
			'preserveAspectRatio',
			'viewBox'
		]
	)
});
