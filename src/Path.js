/**
* Contains the declaration for the {@link module:svg/Path~Path} kind.
* @module svg/Path
*/
require('svg');

var
	kind = require('enyo/kind')
	;

var
	Shape = require('./Shape')
	;

/**
* {@link module:svg/Path~Path} is a Component that creates a SVG Path element.
* Enyo attributes will match up with the standard attributes
* https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path
*
* ```javascript
* 	var
* 		kind = require('enyo/kind'),
*		Root = require('svg/Root'),
*		Path = require('svg/Path');
*
*	{kind: Root, viewBox: '0 0 100 100', style: 'height: 250px; width: 250px; display: block;', components: [
*		{name: 'logo', kind: Path, classes: 'svg-sample-logo', spotlight: true, ontap: 'buttonTapped', d: 'M49.3,90c-5.7,0-11-1-15.9-3.1c-4.9-2.1-9.2-5-12.9-8.8c-3.8-3.7-6.7-7.9-8.9-12.9C9.6,60.3,8.5,55,8.5,49.3 c0-5.7,1.1-11,3.2-15.8c2.1-4.8,5.1-9.2,8.9-13c3.8-3.7,8.1-6.5,13-8.6c4.8-2.1,10.1-3.2,15.8-3.2c5.6,0,10.8,1.1,15.7,3.2 c4.9,2.1,9.3,5,13.1,8.6c3.7,3.8,6.6,8.1,8.7,13c2.1,4.8,3.2,10.1,3.2,15.8c0,5.7-1.1,11-3.2,15.9c-2.1,4.9-5,9.2-8.7,12.8 c-3.8,3.8-8.1,6.7-13,8.9C60.3,88.9,55,90,49.3,90z M50.9,15.3c-0.4-0.1-0.8-0.2-1.1-0.2c-4.8,0-9.4,0.9-13.6,2.7 c-4.2,1.8-7.9,4.3-11.1,7.4c-3.2,3.2-5.6,6.8-7.4,10.9c-1.8,4.1-2.7,8.5-2.7,13.2c0,4.7,0.9,9.1,2.8,13.2c1.9,4.1,4.4,7.7,7.6,10.9 c3.2,3.2,6.8,5.6,11,7.4c4.1,1.8,8.4,2.6,12.9,2.6c4.8,0,9.3-0.9,13.4-2.8c4.1-1.9,7.6-4.4,10.6-7.5c3-3.2,5.4-6.8,7.2-10.9 c1.8-4.1,2.8-8.4,2.9-12.9v-1.5H58.9v3.1h21.3v0.6c-0.3,4-1.3,7.8-3,11.3c-1.7,3.5-4,6.6-6.8,9.2c-2.8,2.6-6,4.7-9.6,6.2 c-3.6,1.5-7.4,2.3-11.4,2.3c-4.4,0-8.5-0.9-12.3-2.6c-3.8-1.7-7.1-4.1-9.8-7s-4.9-6.3-6.4-10c-1.5-3.7-2.3-7.5-2.3-11.5 c0-4.4,0.8-8.5,2.5-12.3c1.7-3.8,4-7,7-9.7s6.3-4.9,9.9-6.5c3.7-1.6,7.5-2.4,11.5-2.4h1.6V15.3z M36.4,41c1.2,0,2.3-0.4,3.3-1.3 c1-0.9,1.5-2,1.5-3.3c0-1.3-0.5-2.4-1.5-3.3c-1-0.9-2.1-1.4-3.3-1.4c-1.4,0-2.5,0.5-3.4,1.4c-0.9,0.9-1.3,2.1-1.3,3.3 c0,1.3,0.4,2.4,1.3,3.3C33.8,40.6,34.9,41,36.4,41z M47.6,67.2h11.3v-3.4h-8V31.6h-3.3V67.2z'}
*	]}
* ```
*
* @class Path
* @extends module:svg/Shape~Shape
* @ui
* @public
*/

module.exports = kind({
	/**
	* @private
	*/
	name: 'Path',
	/**
	* @private
	*/
	kind: Shape,
	/**
	* @private
	*/
	tag: 'path',
	/**
    * A property to determine the fill value of a path
    *
    * @type {String}
    * @default 'none'
    * @public
    */
	fill: 'none',
	supportedAttributes: [
		'd',
		'pathLength'
	]
});
