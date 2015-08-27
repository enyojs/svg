require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline
module.exports = kind({
	name: 'Polyline',
	kind: Shape,
	tag: 'polyline',
	supportedAttributes: [
		'points'
	]
});
