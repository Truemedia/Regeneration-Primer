/* 
* @file Audio package unit test
* @author Wade Penistone (Truemedia)
* @overview Class used for TDD of Audio package
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

var audio = require('./../main');

suite('audio', function()
{
  test('Package is an object', function()
  {
    assert.isObject(audio);
  });

  test('Settings are null by default', function()
  {
    assert.isNull(audio.settings);
  });
  
  test('Translations are empty by default', function()
  {
    expect(audio.trans).to.be.empty;
  });

  test('Package has a load function', function()
  {
    assert.isFunction(audio.load);
  });

  test('Package has an init function', function()
  {
    assert.isFunction(audio.init);
  });
});