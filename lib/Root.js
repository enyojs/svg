require('svg');

var
	kind = require('enyo/kind')
	;

var
	Element = require('./Element')
	;

// Root element, container for all SVG nodes
module.exports = kind({
	name: 'Root',
	kind: Element,
	tag: 'svg',
	classes: 'enyo-svg',
	preserveAspectRatio: 'none',
	supportedAttributes: [
		'viewBox',
		'preserveAspectRatio'
	],
	create: function () {
		this.inherited(arguments);
		this.setAttribute('version', '1.1');
		this.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
		this.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	}
});

