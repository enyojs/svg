require('svg');

var
	kind = require('enyo/kind')
	;

var
	Path = require('./Path')
	;

// Custom path shape, which includes easy arc curve calculation methods
module.exports = kind({
	name: 'Arc',
	kind: Path,
	tag: 'path',
	filled: false,
	x: 0,
	y: 0,
	radius: 0,
	startAngle: 0,
	endAngle: 0,
	observers: {
		'updatePath': ['filled', 'x', 'y', 'radius', 'startAngle', 'endAngle']
	},
	create: function () {
		this.inherited(arguments);
		this.updatePath();
	},
	updatePath: function () {
		var arcMethod = this.get('filled') ? '_describeFilledArc' : '_describeArc';

		this.set('d', this[arcMethod](this.x, this.y, this.radius, this.startAngle, this.endAngle) );
	},

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

