/* 
* @file Spawner SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for spawning friendlies and enemies (based on gamemode and spawn context)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		spawnCharacter: function(char_name, players_char_name, char_id){
			// Layer constants
			var transitional_layer = 5; // z-index starting point for any character
		
			if(char_name == players_char_name){
				// Matches character we choose (spawning us)
				Crafty.e("2D, DOM, wall_left, solid, "+char_name+", LeftControls, Text")
				// Draw the sprite
				.attr({x: 2, y: 100, z: transitional_layer})
				// Add controls to this object
				.leftControls(3)
				.text("YOU")
  				.textColor(this.characterColor(char_name), '1')
  				.textFont({ type: 'italic', family: 'Arial', size: '20px', weight: 'bold' })
  				.bind('KeyDown', function(e) {
  					// Show quick info menu
    				if(e.key == Crafty.keys['SHIFT']) {
    					jQuery('#scores_window').toggle();
      					console.log("Showing quick info menu");
    				}
    			})
    			.bind('KeyUp', function(e) {
  					// Hide quick info menu
    				if(e.key == Crafty.keys['SHIFT']) {
    					jQuery('#scores_window').toggle();
      					console.log("Hiding quick info menu");
    				}
    				// Hiding or showing inventory
    				if(e.key == Crafty.keys['SPACE']) {
    					jQuery('#inventory_window').toggle();
      					console.log("Hiding or showing inventory");
    				}
    				// Do a partial reload (insert mag into empty gun)
    				if(e.key == Crafty.keys['E']) {
    					Crafty.audio.play("insert_mag",1,1);
      					console.log("Loaded a mag");
    				}
    				// Do a full reload (discard mag, and insert new mag)
    				if(e.key == Crafty.keys['R']) {
    					Crafty.audio.play("lock_inserted_mag",1,1);
    					//Crafty.audio.play("insert_mag",1,1);
						//Crafty.audio.play("load_chamber",1,1);
      					console.log("Connected a mag");
    				}
    				// Throw away magazine
    				if(e.key == Crafty.keys['T']) {
    					Crafty.audio.play("discard_mag",1,1);
      					console.log("Removed a mag");
    				}
    				// Load chamber
    				if(e.key == Crafty.keys['C']) {
    					Crafty.audio.play("load_chamber",1,1);
      					console.log("Loaded chamber");
    				}
    				// Save X Y coords (one instance shown in debug toolbar)
    				if(e.key == Crafty.keys['Z']) {
    					var x = jQuery("#mouse_x_coords").html();
    					var y = jQuery("#mouse_y_coords").html();
    					jQuery("#saved_mouse_coords").html(x+","+y);
      					console.log("Saved X,Y coordinates "+x+","+y+" (will be overwritten when you save again)");
    				}
    			});
			}
			else{
				/* Spawning bot */
				Crafty.e("2D, DOM, wall_left, solid, "+char_name+", Tween, Text")
					// Draw the sprite
					.attr({x: (80+(60*char_id)), y: (40*char_id), z: (1*char_id)})
					// Bot paths (currently implemented as single static path using tween)
  					.tween({x: (130*char_id), y: (430+(6*char_id))}, 300)
					.text(char_name+" (Bot)")
  					.textColor(this.characterColor(char_name), '0.9')
  					.textFont({ type: 'italic', family: 'Arial', size: '20px', weight: 'bold' });
  				/* Spawning bots gun */
				Crafty.e("2D, DOM, wall_left, solid, gun1, Tween, Text")
					.attr({x: (80+(60*char_id)), y: (40*char_id), z: (1*char_id) + transitional_layer})
					.tween({x: (130*char_id), y: (430+(6*char_id))}, 300);
			}
		},
		characterColor: function(character){
			// Color of characters name over character
			switch(character){
				case 'coward':
					return('#B8860B'); // Goldenrod
					break;
				case 'criminal':
					return('#696969'); // Dim Grey
					break;
				case 'mother':
					return('#483D8B'); // Dark slate blue
					break;
				case 'nextdoorneighbor':
					return('#B22222'); // Fire brick
					break;
				case 'psychoticworker':
					return('#4B0082'); // Indigo
					break;
				case 'storeowner':
					return('#8B4513'); // Saddle Brown
					break;
				case 'storeownerwife':
					return('#FA8072'); // Salmon
					break;
				case 'womanhelicopterpilot':
					return('#2E8B57'); // Sea Green
					break;
				default:
					return('#696969'); // Dim Grey
					break;
			}
		},
		spawnEnemies: function(spawn_amount){
			// Code to add monster/s on screen
			/*for(i=1;  i<=spawn_amount; i++){
				spawnEnemy(480, 480);
			}*/
		},
		spawnEnemy: function(){
			//craft draw stuff
		},
		randomSpawnCoordinates: function(max_x, max_y){
			//random()
		}
	}
});