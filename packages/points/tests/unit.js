/* 
* @file Points package unit test
* @author Wade Penistone (Truemedia)
* @overview Class used for TDD of Points package
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/

// TDD (Test Driven Development)
var assert = require('chai').assert;

var points = require('./../main');

suite('points', function()
{
  test('Settings are null by default', function()
  {
    assert.equal(null, points.settings);
  });
  
  test('Translations are empty by default', function()
  {
  	var expected_result = {};
  	var returned_result = points.trans;
    assert.deepEqual(expected_result, returned_result);
  });
});