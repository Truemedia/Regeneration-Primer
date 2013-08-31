/* 
* @file Initializer PACKAGE 
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used to run and execute any procedures that need to be run on first game loadup
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./Modernizr"], function(jQuery, Crafty, Modernizr) {
	return init = {
		initGame: function(){
			// Setup Crafty area
			Crafty.init(resolution_width, resolution_height).canvas.init();
			// Set a background color to debug canvas if needed (uncomment to use)
			/*Crafty.background("yellow");*/
		},
		getRenderEngine: function(){
			// Determine what Rendering engine to use (Currently 'Canvas' or 'DOM')
			if(Modernizr.canvas){
				return("Canvas");
			} else {
				return("DOM");
			}
		}
	}
});