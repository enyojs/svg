require('svg');

var
	kind = require('enyo/kind'),
	utils = require('enyo/utils');

var
	attrs = require('./globalattributes'),
	Element = require('./Element');

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch
module.exports = kind({
	name: 'Switch',
	kind: Element,
	tag: 'switch',
	supportedAttributes: utils.merge(
		attrs.presentation,
		[
			'transform',
			'allowReorder'
		]
	)
});
