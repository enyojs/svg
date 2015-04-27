require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils')
	;

var
	attrs = require('./globalattributes'),
	Element = require('./Element')
	;

// Base-kind for all shape elements
module.exports = kind({
	name: 'Shape',
	kind: Element,
	supportedAttributes: util.merge(
		attrs.presentation
	)
});
