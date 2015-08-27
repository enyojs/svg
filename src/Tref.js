require('svg');

var
	kind = require('enyo/kind')
	;

var
	Text = require('./Text')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tref
module.exports = kind({
	name: 'Tref',
	kind: Text,
	tag: 'tref'
});
