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
define(["jQuery", "Session", "Resource", "Bullet.GOD", "Enemy.GOD", "Gun.GOD", "Human.GOD", "VendingMachine.GOD"
], function(jQuery, Session, Resource, BulletEntity, EnemyEntity, GunEntity, HumanEntity, VendingMachineEntity) {
	return Game = {
			
		/* Steps to progress the game */
		steps: {
			startup: [
				'characterselection',
				'maps'
			]
		},

		/* Settings used by the game instance specific to the game library */
		settings: function()
		{
			// Turn off gravity (for this type of game)
			me.sys.gravity = 0;
			
			// Show hitbox if user has development role
			var debugging = false;
			if (debugging) {
				me.debug.renderHitBox = true;
			}
		},
			
		/* Proceed the game to the next step */
		proceed: function()
		{
			alert("Going to the next step");
		},

		/* Launch a game instance */
		launch: function()
		{
			// Start up MelonJS instance
    		window.onReady(function() { Game.onload(); });
		},

		reset: function()
		{	
			me.game.reset();
			
			// Load a level/map
			me.levelDirector.loadLevel( Session.get('map') );		
		},

		/* Load up the game map and object instances */
		onload: function()
		{	
			// Setup canvas
			var height_scroller_width = 15;
			if (!me.video.init('stage', parseInt(document.body.clientWidth) - height_scroller_width, 720)) {
				alert("Sorry but your browser does not support html 5 canvas. Please try with another one!");
				return;
			}
			
			// Compile resources
			var resources = Resource.compile();
			me.loader.onload = Game.loaded.bind(this);
			me.loader.preload(resources);
			
			// Load settings
			Game.settings();

			// Load everything & display a loading screen
			me.state.change(me.state.LOADING);	
		},

		loaded: function()
		{
			// Set the "Play/Ingame" Screen Object
			me.state.set(me.state.PLAY, this);

			// Get game object definitions and add entities in the entity pool
			me.entityPool.add("spawnPoint", HumanEntity, true);

			// Add enemies
			me.entityPool.add("enemySpawnPoint", EnemyEntity, true);
			
			// Setup guns to pickup
			me.entityPool.add("gunEquip", GunEntity, true);
			
			// Add room fixtures
			me.entityPool.add("vendingMachine", VendingMachineEntity, true);

			// Start the game
			me.state.change(me.state.PLAY);
			
			// Wield gun
		    //Gun.wield('Glock', 'single');
		},
		
		/* Actions performed while game is running */
		onUpdateFrame: function()
		{
			me.timer.update();
			me.game.update();
			me.game.draw();
		}
	}
});