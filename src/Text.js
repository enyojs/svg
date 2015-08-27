require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text
module.exports = kind({
	name: 'Text',
	kind: Element,
	tag: 'text',
	supportedAttributes: util.merge(
		attrs.presentation,
		[
			'x',
			'y',
			'dx',
			'dy',
			'text-anchor',
			'rotate',
			'textLength',
			'lengthAdjust'
		]
	)
});
