require('svg');

var
	kind = require('enyo/kind')
	;

var
	Text = require('./Text')
	;

// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
module.exports = kind({
	name: 'Tspan',
	kind: Text,
	tag: 'tspan'
});
