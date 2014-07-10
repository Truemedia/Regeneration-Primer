/* 
* @file Colour CLASS test
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for TDD of Colour class
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/

// TDD (Test Driven Development)
var chai = require('chai'),
	expect = chai.expect,
	should = chai.should();

// Class to test (NOTE: This will be replaced with the tinycolor library)
var Colour = require('./../colour');

suite('Colour', function() {
  test('HSV when converted from multiple parameters equal to RGB object', function()
  {
  	var actual_colour = Colour.HSVtoRGB(1, 1, 1);

  	expect(actual_colour).to.have.property('r', 255);
  	expect(actual_colour).to.have.property('g', 0);
  	expect(actual_colour).to.have.property('b', 0);
  });
});