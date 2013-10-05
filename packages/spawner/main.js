/* 
* @file Spawner PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for spawning friendlies and enemies (based on gamemode and spawn context)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./inventory.PKG"], function(jQuery, Crafty, inventory) {
	return spawner = {

		layers: 6,
			
		/* Stored entities */
		characters: [],
		
		spawnCharacter: function(char_name, players_char_name, char_id){
			// Layer constants
			var transitional_layer = 5; // z-index starting point for any character
			var render_engine = init.getRenderEngine(); // TODO: In future get init to set in config, then pull from config instead
		
			if(char_name == players_char_name){ // Matches character we choose (spawning us)

				spawner.characters.push( Crafty.e("2D, "+render_engine+", solid, "+char_name+", LeftControls, Collision")
					// Draw the sprite
					.attr({x: (80+(60*char_id)), y: (40*char_id), z: transitional_layer})
					// Add controls to this object
					.leftControls(3)
					// CraftyJS bug causing text to interfere with characters sprite?
					/*.text("YOU")
  					.textColor(this.characterColor(char_name), '1')
  					.textFont({ type: 'italic', family: 'Arial', weight: 'bold' })*/
  					.bind('KeyDown', function(e) {
  						// Hiding or showing points panel
    					if(e.key == Crafty.keys['SHIFT']) {
    						jQuery('#points_partial').toggle();
      						console.log("Hiding or showing points panel");
    					}
    					// Hiding or showing profile panel
    					if(e.key == Crafty.keys['SPACE']) {
    						jQuery('#profile_partial').toggle();
      						console.log("Hiding or showing profile panel");
    					}
    				})
    				.bind('KeyUp', function(e) {
    					// Select/Unselect inventory item
    					if (e.key == Crafty.keys['1']) {
      						inventory.switchItem(1);
    					}
    					if (e.key == Crafty.keys['2']) {
      						inventory.switchItem(2);
    					}
    					if (e.key == Crafty.keys['3']) {
      						inventory.switchItem(3);
    					}
    					if (e.key == Crafty.keys['4']) {
      						inventory.switchItem(4);
    					}
    					if (e.key == Crafty.keys['5']) {
      						inventory.switchItem(5);
    					}
    					if (e.key == Crafty.keys['6']) {
      						inventory.switchItem(6);
    					}
    					if (e.key == Crafty.keys['7']) {
      						inventory.switchItem(7);
    					}
    					if (e.key == Crafty.keys['8']) {
      						inventory.switchItem(8);
    					}
    					if (e.key == Crafty.keys['9']) {
      						inventory.switchItem(9);
    					}
    					if (e.key == Crafty.keys['0']) {
      						inventory.switchItem(0);
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
    				})
    				.bind('Moved', function(from) { // Restrict movement across solid objects
    					if(this.hit('solid')){
        					this.attr({x: from.x, y: from.y});
        					gameObjects.inventory['leftGun'].attr({x: from.x - 2, y: from.y + 8});
        					gameObjects.inventory['rightGun'].attr({x: from.x + 59, y: from.y + 8});
    					}
					})
				);
    			// TODO: Use this line for pain zones
    			// .within(Number x, Number y, Number w, Number h)
    			/* Inventory items (give yourself guns) */
				var observe_x = ((80+(60*char_id))-20);
				var observe_y = (40*char_id);
			
				gameObjects.inventory['leftGun'] = Crafty.e("2D, "+render_engine+", gun2, LeftControls, Tween")
					.attr({x: observe_x - 2, y: observe_y + 8, z: (spawner.layers + 1) })
					.leftControls(3);
				gameObjects.inventory['rightGun'] = Crafty.e("2D, "+render_engine+", gun2, LeftControls, Tween")
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
  					// CraftyJS bug causing text to interfere with characters sprite?
					/*.text(char_name+" (Bot)")
  					.textColor(this.characterColor(char_name), '0.9')
  					.textFont({ type: 'italic', family: 'Arial', size: '20px', weight: 'bold' })*/
  				);
  				/* Spawning bots gun */
				Crafty.e("2D, "+render_engine+", wall_left, gun1, Tween")
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