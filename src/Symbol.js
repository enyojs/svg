require('svg');

var
	kind = require('enyo/kind')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol
module.exports = kind({
	name: 'Symbol',
	kind: Element,
	tag: 'symbol',
	supportedAttributes: enyo.merge(
		attrs.presentation,
		[
			'preserveAspectRatio',
			'viewBox'
		]
	)
});
