/* 
* @file Initializer SYSTEM 
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used to run and execute any procedures that need to be run on first game loadup
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		initGame: function(){
			// Setup Crafty area
			Crafty.init(resolution_width, resolution_height);

			// Use Crafty as canvas object
			Crafty.canvas.init();
		}
	}
});