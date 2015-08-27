require('svg');

var
	kind = require('enyo/kind')
	;

var
	Polyline = require('./Polyline')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon
module.exports = kind({
	name: 'Polygon',
	kind: Polyline,
	tag: 'polygon'
});
