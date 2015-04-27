require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse
module.exports = kind({
	name: 'Ellipse',
	kind: Shape,
	tag: 'ellipse',
	supportedAttributes: [
		'cx',
		'cy',
		'rx',
		'ry'
	]
});
