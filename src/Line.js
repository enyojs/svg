require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line
module.exports = kind({
	name: 'Line',
	kind: Shape,
	tag: 'line',
	supportedAttributes: [
		'x1',
		'x2',
		'y1',
		'y2'
	]
});
