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
		
		// Load packages when session starts
		session_packages: function(characterselected) {
			
			console.log("Loading session packages...");
			
			// Initializer
			/*require('init').initGame();

			// Setup all images as sprites
			require('sprites').setup();

			// Put in the Game Objects
			require('gameobjects').gameObjects(characterselected);
	
			// Initialize Game Director
			require('gamedirector').initGameDirector(characterselected);*/
	
			// Initialize session partials
			require('points').init();
			require('profile').init(characterselected);
			require('inventory').init();
			
			// Run debugging (if requested)
			if (document.location.hash === "#debug") {
				require('debug').init();
			}
			
			// New gun module interface 
			//require('Gun.MOD').init();
		}
	}
});