//-- Shared Attribute Collections --//
module.exports = {
	// Animation attribute target attributes
	animationTarget: ['attributeType', 'attributeName'],

	// Animation timing attributes
	animationTiming: ['begin', 'dur', 'end', 'min', 'max', 'restart', 'repeatCount', 'repeatDur', 'fill'],

	// Animation value attributes
	animationValue: ['calcMode', 'values', 'keyTimes', 'keySplines', 'from', 'to', 'by', 'autoReverse', 'accelerate', 'decelerate'],

	// Animation addition attributes
	animationAddition: ['additive', 'accumulate'],

	// Conditional processing attributes
	conditionalProcessing: ['requiredExtensions', 'requiredFeatures', 'systemLanguage'],

	// Filter primitive attributes
	filterPrimitive: ['height', 'result', 'width', 'x', 'y'],

	// Presentation attributes
	presentation: [
		'alignment-baseline', 'baseline-shift', 'clip', 'clip-path', 'clip-rule', 'color',
		'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering',
		'cursor', 'direction', 'display', 'dominant-baseline', 'enable-background', 'fill',
		'fill-opacity', 'fill-rule', 'filter', 'flood-color', 'flood-opacity', 'font-family',
		'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant',
		'font-weight', 'glyph-orientation-horizontal', 'glyph-orientation-vertical',
		'image-rendering', 'kerning', 'letter-spacing', 'lighting-color', 'marker-end',
		'marker-mid', 'marker-start', 'mask', 'opacity', 'overflow', 'pointer-events',
		'shape-rendering', 'stop-color', 'stop-opacity', 'stroke', 'stroke-dasharray',
		'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit',
		'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering',
		'unicode-bidi', 'visibility', 'word-spacing', 'writing-mode'
	],

	// Transfer function attributes
	transferFunction: ['type', 'tableValues', 'slope', 'intercept', 'amplitude', 'exponent', 'offset']
};
