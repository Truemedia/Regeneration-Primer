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
			
		// Application startup method
		start: function(){
			
			// TODO: Add cleanup hidden process
			jQuery('#marquee_partial').toggle();
    		
			// Wait for DOM
			jQuery = require('jQuery');
			jQuery(document).ready( function(){
				
				// Loadup starting packages
				app.initial_packages();
				
				// Launch game
				require('game').launch();
			});
		},

		// Load packages when application starts
		initial_packages: function(){

			console.log("Loading initial packages...");
			
			// Information screens made of modals
			require('mainmenu.PKG').init();
			require('gameinfo.PKG').init();
			require('about.PKG').init();
			require('highscores.PKG').init();

			// Load header and footer
			require('header.PKG').init();
			require('characterselection.PKG').init();
			require('footer.PKG').init();

			// Setup controls
			require('controls.PKG').init();
			
			// Setup audio
			require('audio.PKG').init();
			
			// Setup content pack
			require('contentpack.PKG').init();

			// Setup theme/themes
			require('theme.PKG').init();
		},
		
		// Load packages when session starts
		session_packages: function(characterselected){
			
			console.log("Loading session packages...");
			
			// Initializer
			require('init.PKG').initGame();

			// Setup all images as sprites
			require('sprites.PKG').setup();

			// Controls
			require('controls.PKG').mapper();

			// Generate Map
			require('diydie.PKG').generateWorld();

			// Put in the Game Objects
			require('gameobjects.PKG').gameObjects(characterselected);
	
			// Initialize Game Director
			require('gamedirector.PKG').initGameDirector(characterselected);
	
			// Initialize session partials
			require('points.PKG').init();
			require('profile.PKG').init(characterselected);
			require('inventory.PKG').init();
			require('Package').init({"social": ''});
		
			// Enable debugging (but hide from view)
			require('debug.PKG').init();
			require('debug.PKG').initDebugger(null);
			
			// New gun module interface 
			//require('Gun.MOD').init();
			
			// Setup notification system
			require('notification.PKG').init();
		}
	}
});