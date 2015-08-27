require('svg');

var
	kind = require('enyo/kind')
	;

var
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image
module.exports = kind({
	name: 'Image',
	kind: Element,
	tag: 'image',
	supportedAttributes: [
		'x',
		'y',
		'width',
		'height',
		'preserveAspectRatio'
	]
});
