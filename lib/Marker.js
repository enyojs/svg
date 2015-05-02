require('svg');

var
	kind = require('enyo/kind')
	;

var
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker
module.exports = kind({
	name: 'Marker',
	kind: Element,
	tag: 'marker',
	supportedAttributes: [
		'markerUnits',
		'refX',
		'refY',
		'markerWidth',
		'markerHeight',
		'orient'
	]
});
