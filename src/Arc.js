/**
* Contains the declaration for the {@link module:svg/Arc~Arc} kind.
* @module svg/Arc
*/
require('svg');


var
	kind = require('enyo/kind')
	;

var
	Path = require('./Path')
	;

/**
* {@link module:svg/Arc~Arc} is a Component that creates a SVG Arc.
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Arc = require('svg/Arc');
*
* 		{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px; display: block;', components: [
* 			{name: 'arc1', kind: Arc, x: 50, y: 50, radius: 45, startAngle: 10, endAngle: 220, ontap: 'buttonTapped', filled: true, style: 'fill: orange;'},
* 			{name: 'arc2', kind: Arc, x: 50, y: 50, radius: 45, startAngle: 10, endAngle: 220, ontap: 'buttonTapped', 'stroke-linecap': 'round', style: 'fill: none; stroke: white; stroke-width: 3px;'},
* 		]}
* ```
*
* @class Arc
* @extends module:svg/Path~Path
* @ui
* @public
*/

// Custom path shape, which includes easy arc curve calculation methods
module.exports = kind({
	/**
	* @private
	*/
	name: 'Arc',
	/**
	* @private
	*/
	kind: Path,
	/**
	* @private
	*/
	tag: 'path',
	/**
    * A boolean parameter to determine if the arc is filled with a solid color.
    * If `true`, the arc will fill with a color of your choice like style: `'fill: orange;'`
    * If `false` or omitted, the arc will be styled as 'style: `'fill: none;'`
    *
    * @type {Boolean}
    * @default 'false'
    * @public
    */
	filled: false,
	/**
    * A number parameter to determine the starting x position of the arc
    *
    * @type {Number}
    * @default 0
    * @public
    */
	x: 0,
	/**
    * A number parameter to determine the starting y position of the arc
    *
    * @type {Number}
    * @default 0
    * @public
    */
	y: 0,
	/**
    * A number parameter to determine the radius of the arc
    *
    * @type {Number}
    * @default 0
    * @public
    */
	radius: 0,
	/**
    * A number parameter to determine the start angle of the arc
    *
    * @type {Number}
    * @default 0
    * @public
    */
	startAngle: 0,
	/**
    * A number parameter to determine the end angle of the arc
    *
    * @type {Number}
    * @default 0
    * @public
    */
	endAngle: 0,
	/**
	* @private
	*/
	observers: {
		'updatePath': ['filled', 'x', 'y', 'radius', 'startAngle', 'endAngle']
	},
	/**
	* @private
	*/
	create: function () {
		this.inherited(arguments);
		this.updatePath();
	},
	/**
	* @private
	*/
	updatePath: function () {
		var arcMethod = this.get('filled') ? '_describeFilledArc' : '_describeArc';

		this.set('d', this[arcMethod](this.x, this.y, this.radius, this.startAngle, this.endAngle) );
	},
	/**
	* @private
	*/
	// Original arc calculation code source:
	// http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
	// by opsb on Aug 27 '13 at 18:44
	_polarToCartesian: function (centerX, centerY, radius, angleInDegrees) {
		var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

		return {
			x: centerX + (radius * Math.cos(angleInRadians)),
			y: centerY + (radius * Math.sin(angleInRadians))
		};
	},
	/**
	* @private
	*/
	_describeArc: function (x, y, radius, startAngle, endAngle){

		var start = this._polarToCartesian(x, y, radius, endAngle),
			end = this._polarToCartesian(x, y, radius, startAngle),
			arcSweep = endAngle - startAngle <= 180 ? '0' : '1',
			d = [
				'M', start.x, start.y,
				'A', radius, radius, 0, arcSweep, 0, end.x, end.y
			].join(' ');

		return d;
	},
	/**
	* @private
	*/
	// Original filled arc calculation code source:
	// http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
	// by Ahtenus on Jul 4 '14 at 7:46
	_describeFilledArc: function (x, y, radius, startAngle, endAngle) {

		var start = this._polarToCartesian(x, y, radius, endAngle),
			end = this._polarToCartesian(x, y, radius, startAngle),
			arcSweep = endAngle - startAngle <= 180 ? '0' : '1',
			d = [
				'M', start.x, start.y,
				'A', radius, radius, 0, arcSweep, 0, end.x, end.y,
				'L', x,y,
				'L', start.x, start.y
			].join(' ');

		return d;
	}
});

