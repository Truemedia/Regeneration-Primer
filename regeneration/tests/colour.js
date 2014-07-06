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
var assert = require('assert');

// Class to test (NOTE: This will be replaced with the tinycolor library)
var Colour = require('./../colour');

suite('Colour', function() {
  test('HSV when converted from multiple parameters equal to RGB object', function() {
  	var expected_colour = {r: 255, g: 0, b: 0};
  	var actual_colour = Colour.HSVtoRGB(1, 1, 1);

    assert.equal(expected_colour.r, actual_colour.r);
    assert.equal(expected_colour.g, actual_colour.g);
    assert.equal(expected_colour.b, actual_colour.b);
  });
});