require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path
module.exports = kind({
	name: 'Path',
	kind: Shape,
	tag: 'path',
	fill: 'none',
	supportedAttributes: [
		'd',
		'pathLength'
	]
});
