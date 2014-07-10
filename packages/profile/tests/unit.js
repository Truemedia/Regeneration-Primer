/* 
* @file Profile package unit test
* @author Wade Penistone (Truemedia)
* @overview Class used for TDD of Profile package
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/

// TDD (Test Driven Development)
var assert = require('chai').assert;

var profile = require('./../main');

suite('profile', function()
{
  test('Settings are null by default', function()
  {
    assert.equal(null, profile.settings);
  });
  
  test('Translations are empty by default', function()
  {
  	var expected_result = {};
  	var returned_result = profile.trans;
    assert.deepEqual(expected_result, returned_result);
  });
});