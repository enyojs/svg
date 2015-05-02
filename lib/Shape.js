require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils')
	;

var
	attrs = require('./globalattributes'),
	svgUtil = require('./utils'),
	Element = require('./Element')
	;

var targetLinker = function (control, attr) {
	control = svgUtil.getId(control);
	if (control) {
		this.setAttribute(attr, 'url(#' + control + ')');
	}
};

// Base-kind for all shape elements
module.exports = kind({
	name: 'Shape',
	kind: Element,
	supportedAttributes: util.merge(
		attrs.presentation
	),
	transforms: {
		'marker-end': targetLinker,
		'marker-mid': targetLinker,
		'marker-start': targetLinker
	}
});
