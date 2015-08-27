require('svg');

var
	kind = require('enyo/kind')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask
module.exports = kind({
	name: 'Mask',
	kind: Element,
	tag: 'mask',
	supportedAttributes: enyo.merge(
		attrs.presentation,
		[
			'maskUnits',
			'maskContentUnits',
			'x',
			'y',
			'width',
			'height'
		]
	)
});
