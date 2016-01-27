require('svg');

var
	kind = require('enyo/kind'),
	util = require('enyo/utils'),
	Control = require('enyo/Control'),
	EventEmitter = require('enyo/EventEmitter')
	;

var
	attrs = require('./globalattributes'),
	svgUtil = require('./utils')
	;

// Base-kind for deriving all SVG kinds
module.exports = kind({
	name: 'Element',
	kind: Control,
	tag: 'svg',
	_allSupportedAttributes: null,
	noDefer: true,
	mixins: [EventEmitter],
	supportedAttributes: util.merge(
		attrs.conditionalProcessing,
		[
			'space',
			'target', // Synonym for xlink:href
			'transform',
			'externalResourcesRequired'
		]
	),
	transforms: {
		target: function (control) {
			control = this.bindSafely(svgUtil.getId)(control);
			if (control) {
				this.setAttribute('xlink:href', '#' + control);
			}
		}
	},
	create: function () {
		this.inherited(arguments);

		if (this.supportedAttributes) {
			this.supportedAttributes.forEach(this.bindSafely(function (attr) {
				// Specially cased and aliased attributes
				switch (attr) {
					case 'space':
						this.setAttribute('xml:space', this[attr]);
						break;
					default:
						this.set(attr, this[attr]);
					}
			}));
		}
	},
	rendered: function () {
		var n = this.hasNode(),
			f = this;
		if (n) {
			// Setup all of the event emitters svgEvent->EventEmitter
			n.addEventListener('loadEvent', function (ev) {
				f.emit('load', ev);
			});
			n.addEventListener('beginEvent', function (ev) {
				f.emit('begin', ev);
			});
			n.addEventListener('endEvent', function (ev) {
				f.emit('end', ev);
			});
			n.addEventListener('repeatEvent', function (ev) {
				f.emit('repeat', ev);
			});
		}
		this.inherited(arguments);
	},
	set: function (attr, value) {
		this.setSupportedAttribute(arguments);

		if (arguments.length > 1) {
			this.inherited(arguments);
		}
	},
	setSupportedAttribute: function (args) {
		var attr = args && args[0],
			value = args && args[1],
			val = (args && args.length == 1) ? this[attr] : value,
			attrs = this.supportedAttributes;

		if (attrs && attrs.indexOf(attr) >= 0) {
			// Transforms are special conditioning for just the attribute conversion and application process.
			if (this.transforms && this.transforms[attr]) {
				val = this.bindSafely(this.transforms[attr])(val, attr);
			}
			this.setAttribute(attr, val);
		}

	}
});

/**
* By default, we capture `ondown` and `ontap` to implement the [popup's]{@link enyo.Popup}
* modal behavior, but in certain circumstances it may be necessary to capture other
* [events]{@glossary event} as well, so we provide this hook to extend. (We are currently
* using this in Moonstone to capture `onSpotlightFocus` [events]{@glossary event}).
*
* @private
*/
module.exports.concat = function (ctor, props, instance) {
	var proto = ctor.prototype || ctor,
		attrs;
	if (props.supportedAttributes) {
		attrs = proto.supportedAttributes ? proto.supportedAttributes.slice() : [];
		proto.supportedAttributes = attrs.concat(props.supportedAttributes);
		delete props.supportedAttributes;
	}
};
