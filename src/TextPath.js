require('svg');

var
	kind = require('enyo/kind')
	;

var
	Text = require('./Text')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath
module.exports = kind({
	name: 'TextPath',
	kind: Text,
	tag: 'textPath',
	supportedAttributes: [
		'startOffset',
		'method',
		'spacing'
	]
});
