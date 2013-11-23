/* 
* @file Application file/script
* @author Wade Penistone (Truemedia)
* @overview Base script containing application instance and methods for controlling all the low levels functions of the application (file handling, server side integration)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(function(require, exports, module) {
	return app = {
			
		/* Application startup method */
		start: function() {
			
			// TODO: Add cleanup hidden process
			jQuery('#marquee_partial').toggle();
    		
			// Wait for DOM
			jQuery = require('jQuery');
			jQuery(document).ready( function(){
				
				// Launch game
				require('game').launch();
			});
		},
		
		// Load packages when session starts
		session_packages: function(characterselected) {
			
			console.log("Loading session packages...");
			
			// Initializer
			/*require('init.PKG').initGame();

			// Setup all images as sprites
			require('sprites.PKG').setup();

			// Generate Map
			require('diydie.PKG').generateWorld();

			// Put in the Game Objects
			require('gameobjects.PKG').gameObjects(characterselected);
	
			// Initialize Game Director
			require('gamedirector.PKG').initGameDirector(characterselected);*/
	
			// Initialize session partials
			require('points.PKG').init();
			require('profile.PKG').init(characterselected);
			require('inventory.PKG').init();
			
			// Run debugging (if requested)
			if (document.location.hash === "#debug") {
				require('debug.PKG').init();
			}
			
			// New gun module interface 
			//require('Gun.MOD').init();
		}
	}
});