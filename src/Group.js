require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g
module.exports = kind({
	name: 'Group',
	kind: Element,
	tag: 'g',
	supportedAttributes: utils.merge(
		attrs.presentation
	)
});
