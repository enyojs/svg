require('svg');

var
	kind = require('enyo/kind')
	;

var
	Element = require('./Element')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs
module.exports = kind({
	name: 'Definitions',
	kind: Element,
	tag: 'defs'
});
