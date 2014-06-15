/**
 * @file Spawner PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for spawning friendlies and enemies (based on gamemode and spawn context)
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"./jQuery", "./Crafty", "./inventory.PKG", "./characterselection.PKG"
], function(jQuery, Crafty, inventory, characterselection)
{
	/** 
     * Spawner package
     * @namespace spawner
     */
	spawner = {

		layers: 6,
		
		// List of entities waiting to be spawned
		purgatory: {},
			
		/* Stored entities */
		characters: [],
		
		/* Queue purgatory with list of characters */
		spawnPlayers: function()
		{
			// Populate spawning list
			spawner.purgatory = characterselection.getCharacters();
		},
		
		/* Get player instance due to be spawned next */
		spawnPlayer: function()
		{
			var random_character = spawner.purgatory.pop();
			var character_name = random_character.identifierReference;
			return character_name;
		},
		
		spawnCharacter: function(char_name, players_char_name, char_id)
		{
			// Layer constants
			var transitional_layer = 5; // z-index starting point for any character
			var render_engine = init.getRenderEngine(); // TODO: In future get init to set in config, then pull from config instead
		
			if(char_name == players_char_name){ // Matches character we choose (spawning us)

				spawner.characters.push( Crafty.e("2D, "+render_engine+", solid, "+char_name+", LeftControls, Collision")
					// Draw the sprite
					.attr({x: (80+(60*char_id)), y: (40*char_id), z: transitional_layer})
					// Add controls to this object
					.leftControls(3)
    				.bind('Moved', function(from) { // Restrict movement across solid objects
    					if(this.hit('solid')){
        					this.attr({x: from.x, y: from.y});
        					gameObjects.inventory.leftGun.attr({x: from.x - 2, y: from.y + 8});
        					gameObjects.inventory.rightGun.attr({x: from.x + 59, y: from.y + 8});
    					}
					})
				);
    			// TODO: Use this line for pain zones
    			// .within(Number x, Number y, Number w, Number h)
    			/* Inventory items (give yourself guns) */
				var observe_x = ((80+(60*char_id))-20);
				var observe_y = (40*char_id);
			
				gameObjects.inventory.leftGun = Crafty.e("2D, "+render_engine+", gun2, LeftControls, Tween")
					.attr({x: observe_x - 2, y: observe_y + 8, z: (spawner.layers + 1) })
					.leftControls(3);
				gameObjects.inventory.rightGun = Crafty.e("2D, "+render_engine+", gun2, LeftControls, Tween")
					.attr({x: observe_x + 59, y: observe_y + 8, z:(spawner.layers + 1) })
					.leftControls(3);
				// TODO: Use this future format when function no longer has memory leak
				/* Gun.wield('gun2', 'dual', new Array("1", "104")); */
			}
			else{
				/* Spawning bot */
				spawner.characters.push( Crafty.e("2D, "+render_engine+", "+char_name+", Tween")
					// Draw the sprite
					.attr({x: (80+(60*char_id)), y: (40*char_id), z: (1*char_id)})
					// Bot paths (currently implemented as single static path using tween)
  					.tween({x: (130*char_id), y: (430+(6*char_id))}, 300)
  				);
  				/* Spawning bots gun */
				Crafty.e("2D, "+render_engine+", wall_left, gun1, Tween")
					.attr({x: (80+(60*char_id)), y: (40*char_id), z: (1*char_id) + transitional_layer})
					.tween({x: (130*char_id), y: (430+(6*char_id))}, 300);
			}
		},
		
		characterColor: function(character)
		{
			var character_color = '';

			// Color of characters name over character
			switch (character)
			{
				case 'coward':
					character_color = '#B8860B'; // Goldenrod
				break;
				case 'criminal':
					character_color = '#696969'; // Dim Grey
				break;
				case 'mother':
					character_color = '#483D8B'; // Dark slate blue
				break;
				case 'nextdoorneighbor':
					character_color = '#B22222'; // Fire brick
				break;
				case 'psychoticworker':
					character_color = '#4B0082'; // Indigo
				break;
				case 'storeowner':
					character_color = '#8B4513'; // Saddle Brown
				break;
				case 'storeownerwife':
					character_color = '#FA8072'; // Salmon
				break;
				case 'womanhelicopterpilot':
					character_color = '#2E8B57'; // Sea Green
				break;
				default:
					character_color = '#696969'; // Dim Grey
				break;
			}

			return character_color;
		},
		
		spawnEnemies: function(spawn_amount)
		{
			// Code to add monster/s on screen
			/*for(i=1;  i<=spawn_amount; i++){
				spawnEnemy(480, 480);
			}*/
		},
		
		spawnEnemy: function()
		{
			//craft draw stuff
		},
		
		randomSpawnCoordinates: function(max_x, max_y)
		{
			//random()
		}
	};

	return spawner;
});