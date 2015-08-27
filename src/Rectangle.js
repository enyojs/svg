require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect
module.exports = kind({
	name: 'Rectangle',
	kind: Shape,
	tag: 'rect',
	supportedAttributes: [
		'x',
		'y',
		'width',
		'height',
		'rx',
		'ry'
	]
});
