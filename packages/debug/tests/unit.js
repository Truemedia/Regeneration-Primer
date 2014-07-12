/* 
* @file Debug package unit test
* @author Wade Penistone (Truemedia)
* @overview Class used for TDD of Debug package
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/

// BDD and TDD
var chai = require('chai'),
  assert = chai.assert;
  expect = chai.expect;

var Backbone = require('backbone');

var debug = require('./../main');

suite('debug', function()
{
  test('Package is an object', function()
  {
    assert.isObject(debug);
  });

  test('Settings are null by default', function()
  {
    assert.isNull(debug.settings);
  });
  
  test('Translations are empty by default', function()
  {
    expect(debug.trans).to.be.empty;
  });

  test('Package has a load function', function()
  {
    assert.isFunction(debug.load);
  });

  test('Package has an init function', function()
  {
    assert.isFunction(debug.init);
  });
});