/**
* Contains the declaration for the {@link module:svg/Element~Element} kind.
* @module svg/Element
*/
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

/**
* {@link module:svg/Element~Element} is a kind that serves as a Base-kind for all SVG kinds.
*
* ```javascript
* 	var
* 		Element = require('enyo/Element');
*
* 	var
* 		module.exports = kind({
* 			name: 'Pattern',
* 			kind: Element,
* 			tag: 'pattern',
* 			supportedAttributes: utils.merge(
* 			attrs.presentation,
* 				[
* 					'viewBox',
* 					'patternUnits',
* 					'patternContentUnits',
* 					'patternTransform',
* 					'x',
* 					'y',
* 					'width',
* 					'height',
* 					'preserveAspectRatio'
* 				]
* 			)
* 		});
* ```
*
* @class Element
* @extends module:enyo/Control~Control
* @ui
* @public
*/

// Base-kind for deriving all SVG kinds
module.exports = kind({
	/**
	* @private
	*/
	name: 'Element',
	/**
	* @private
	*/
	kind: Control,
	/**
	* @private
	*/
	tag: 'svg',
	/**
	* @private
	*/
	_allSupportedAttributes: null,
	/**
	* @private
	*/
	noDefer: true,
	/**
	* @private
	*/
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
		/**
	    * A property to define attributeName
	    *
	    * @type {String}
	    * @default 'd'
	    * @public
	    */
		target: function (controlName) {
			var control = this.bindSafely(svgUtil.getId)(controlName);
			if (control) {
				control = '#' + control;
			}
			// If we can't find the control is likely a URL, use it instead
			this.setAttribute('xlink:href', control || controlName);
		}
	},
	/**
	* @private
	*/
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
	/**
	* @private
	*/
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
	/**
	* @private
	*/
	set: function (attr, value) {
		this.setSupportedAttribute(arguments);

		if (arguments.length > 1) {
			this.inherited(arguments);
		}
	},
	/**
	* @private
	*/
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
* This method provides a hook to merge the supportedAttributes object on derived kinds.
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
