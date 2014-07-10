/* 
* @file Character Selection package unit test
* @author Wade Penistone (Truemedia)
* @overview Class used for TDD of Character Selection package
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/

// TDD (Test Driven Development)
var assert = require('chai').assert;

var characterselection = require('./../main');

suite('characterselection', function()
{
  test('Settings are null by default', function()
  {
    assert.equal(null, characterselection.settings);
  });
  
  test('Translations are empty by default', function()
  {
  	var expected_result = {};
  	var returned_result = characterselection.trans;
    assert.deepEqual(expected_result, returned_result);
  });
});