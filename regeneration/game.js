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
define(["jQuery", "Session", "Resource", "Human.GOD", "Gun.GOD"], function(jQuery, Session, Resource, human_object, gun_object) {
	return Game = {
			
		/* Steps to progress the game */
		steps: {
			
			startup: [
				'characterselection',
				'maps'
			]
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
			
		/* Proceed the game to the next step */
		proceed: function() {
			alert("Going to the next step");
		},

		/* Launch a game instance */
		launch: function() {

			// Start up MelonJS instance
    		window.onReady(function() 
    		{
    			Game.onload();
    		});
		},

		reset: function()
		{	
			me.game.reset();
			
			// Load a level/map
			me.levelDirector.loadLevel( Session.get('map') );		
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
			var resources = Resource.compile();

			// Setup human interface devices input
			me.loader.onload = Game.loaded.bind(this);
			
			// Setup all image and map data resources
			me.loader.preload(resources);
			
			// Load settings
			Game.settings();

			// Load everything & display a loading screen
			me.state.change(me.state.LOADING);	
		},

		loaded: function() {
			// Set the "Play/Ingame" Screen Object
			me.state.set(me.state.PLAY, this);
			     
			// Spawn main player
			//require('player').spawn();

			// Get game object definitions and add entities in the entity pool
			var players = me.entityPool.add("spawnPoint", human_object, true);
			
			// Setup guns to pickup
			//var guns = me.entityPool.add("gunEquip", gun_object, true);

			// Start the game
			me.state.change(me.state.PLAY);
			
			// Wield gun
		    //Gun.wield('Glock', 'single');
			
			// Start 1st round
			//require('gamedirector').roundCall();
		},
		
		/* Actions performed while game is running */
		onUpdateFrame: function()
		{
		
			// Check for any interaction with keyboard
			//require('Keyboard.MOD').observeControls();

			// Update the frame counter
			me.timer.update();

			// Update our sprites
			me.game.update();
		
			// Draw the rest of the game
			me.game.draw();
		}
	}
});