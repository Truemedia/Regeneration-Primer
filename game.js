/* 
* @file Game file/script
* @author Wade Penistone (Truemedia)
* @overview Base script containing entire game instance and methods for controlling all the low levels functions of the game (launching, saving, closing, pausing ect)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
// Logic for the most important game events
define(function(require, exports, module) {
	return game = {
		
		/* Game starts here (launcher) */
		launch: function() {

		},
		
		/* Choose map (Step 2) */
		chooseMap: function() {

			require('diydie').init();
			
			var jQuery = require('jQuery');
    		jQuery(document).ready( function(jQuery) {
				
				// MAP SELECTION EVENT
				jQuery('#maps_partial').on("click", ".map_select", function(event) {
					
					require('Session').put('map', jQuery(this).val());
					var enabled = !jQuery(this).hasClass("disabled");
					
					// Map is enabled, will now load
					if (enabled) {
						
						// Deactivate selection screen
						require('diydie').deactivate();
						
						// Start session
						console.log("Map has been choosen: "+require('Session').get('map'));
						game.startSession();
					}
				});
			});
		},
		
		/* Startup the actual game environment (once the player is happy to start) */
		startSession: function() {
			/* ..and Start the game up */
			// TODO: Hide Dev notices nicer
			var jQuery = require('jQuery');
    		jQuery('#marquee_partial').toggle();
    		
    		// Load session packages
    		var app = require('app');
    		app.session_packages(require('Session').get('character'));
    		
    		// Start up MelonJS instance
    		window.onReady(function() 
    		{
    			game.onload();
    		});
		},
		
		/* Call all compile methods for any packages */
		compileResources: function() {

			// Build maps and map resources
			var resources = require('diydie').compileMaps();
			
			// Get all character sprites
			var resources = resources.concat(require('sprites').setupCharacters());
			
			// Gun sprite
			resources.push({
				name: "gun_sprite",
				type: "image",
				src: require('Gun.MOD').getImage("AR-15")
			});
			
			// Game font
			// TODO: Convert font to PNG
			/*resources.push({
				name: "32x32_font",
				type: "image",
				src: "multimedia/default-contentpack/fonts/visitor/32x32_font.ttf"
			}); */
			
			return resources;
		},
		
		/* Load up the game map and object instances */
		onload: function() {
			
			// Setup canvas
			var height_scroller_width = 15;
			if (!me.video.init('stage', parseInt(document.body.clientWidth) - height_scroller_width, 720)) {
				alert("Sorry but your browser does not support html 5 canvas. Please try with another one!");
				return;
			}
			
			// Compile resources
			var resources = game.compileResources();
			
			// Setup human interface devices input
			me.loader.onload = game.loaded.bind(this);
			
			// Setup all image and map data resources
			me.loader.preload(resources);
			
			// Load settings
			game.settings();

			// Load everything & display a loading screen
			me.state.change(me.state.LOADING);	
		},
		
		/* Settings used by the game instance specific to the game library */
		settings: function() {
			
			// Turn off gravity (for this type of game)
			me.sys.gravity = 0;
			
			// Show hitbox if user has development role
			var debugging = false;
			if (debugging) {
				me.debug.renderHitBox = true;
			}
		},
		
		loaded: function() {
			// Set the "Play/Ingame" Screen Object
			me.state.set(me.state.PLAY, this);
			     
			// Spawn main player
			require('player').spawn();

			// Setup physical controllers
			require('controls').bindHumanInterfaceDevices();

			// Start the game
			me.state.change(me.state.PLAY);
			
			// Wield gun
		    //Gun.wield('Glock', 'single');
			
			// Start 1st round
			require('gamedirector').roundCall();
		},
		
		reset: function()
		{	
			me.game.reset();
			
			// Load a level/map
			me.levelDirector.loadLevel(require('Session').get('map'));		
		},

		
		/* Actions performed while game is running */
		onUpdateFrame: function()
		{
		
			// Check for any interaction with keyboard
			require('Keyboard.MOD').observeControls();

			// Update the frame counter
			me.timer.update();

			// Update our sprites
			me.game.update();
		
			// Draw the rest of the game
			me.game.draw();
		}
	}
});