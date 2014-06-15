/**
 * @file Game objects PACKAGE 
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for spawning static (assisting) game objects used by friendlies or enemies
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"./jQuery", "./Crafty", "./KO", "./Gun.MOD", "./points.PKG", "./audio.PKG"
], function(jQuery, Crafty, ko, Gun, points, audio)
{
	/** 
     * Game objects package
     * @namespace gameobjects
     */
	gameObjects = {
			
		layers: 4,
		inventory: [],

		gameObjects: function(character){
			var transitional_layer = 5; // TODO: Move this repeated variable into config
			var render_engine = init.getRenderEngine(); // TODO: In future get init to set in config, then pull from config instead

				/* Enemies */
				Crafty.e("2D, "+render_engine+", Mouse, wall_left, brutal")
					// Draw the sprite
					.attr({ x: 560, y: 20, z: (gameObjects.layers - 2) })
					.bind('Click', function() {
						console.log("Shot the enemy");
						// Number of bullets
						var current_bullets = jQuery(".actual_bullet_list:eq(0) > li").length;
						if(current_bullets > 0){
							Gun.fire();
						}
						else{
							// DEPRECATED PACKAGE FUNCTION CALL, use Bootstrap library as alternative
							//notification.error("OUT OF AMMO", "Retrieve more by clicking the supplies box");
							console.log("no bullets left (you should switch weapon or find ammo)");
							Crafty.audio.play("out_of_ammo",1,1);
						}
					})
	    			.areaMap([0,0], [400,0], [400,400], [0,400]);
	    	
	    		 // Supplies box (Can be expanded upon later)
				 Crafty.e("2D, "+render_engine+", Mouse, storageBox")
	    			.attr({ x: 1080, y: 150, z: (gameObjects.layers - 2) })
	    			.bind('Click', function() {
	    				// DEPRECATED PACKAGE FUNCTION CALL, use Bootstrap library as alternative
	    				//notification.highlight("MAX AMMO", "Found ammo from supplies box");
	    				console.log("Gave yourself maximum ammunition");
	    				Gun.populateAmmo();
	    			})
	  				.areaMap([0,-128], [128, -128], [128,0], [0,0]);

	    		// Container
	    		Crafty.e("2D, "+render_engine+", solid, Mouse, container")
	    			.attr({ x: 194, y: 136, z: (gameObjects.layers - 2), rotation: 12});
	    		Crafty.e("2D, "+render_engine+", solid, Mouse, container")
	    			.attr({ x: 190, y: 200, z: (gameObjects.layers - 3), rotation: -5});
	    		
	    		gameObjects.layers += 1;
		}
	};

	return gameObjects;
});