require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle
module.exports = kind({
	name: 'Circle',
	kind: Shape,
	tag: 'circle',
	supportedAttributes: [
		'cx',
		'cy',
		'r'
	]
});
