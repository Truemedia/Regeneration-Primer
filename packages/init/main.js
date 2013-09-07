/* 
* @file Initializer PACKAGE 
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used to run and execute any procedures that need to be run on first game loadup
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./Modernizr", "./Config"], function(jQuery, Crafty, Modernizr, Config) {
	return init = {
		initGame: function(){

			// Get game resolution from config file
			var resolution = Config.get('game.resolution');

			// Setup Crafty area
			Crafty.init(resolution.width, resolution.height).canvas.init();
			
			// Set a background color to debug canvas if needed (uncomment to use)
			/* TODO: Set this color based on time of day (based on sky color)
			 * Crafty.background("yellow");
			*/
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