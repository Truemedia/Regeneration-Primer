/* 
* @file Game objects SYSTEM 
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for spawning static (assisting) game objects used by friendlies or enemies
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./scores", "./Gun.MOD", "./audio", "./notification"], function(jQuery, Crafty, scores, Gun, audio, notification) {
	return gameObjects = {
		gameObjects: function(character){
			/* Guns */
			Crafty.e("2D, DOM, wall_left, solid, gun1, LeftControls")
				// Draw the sprite
				.attr({x: 12, y: 0, z: 2})
				// Add controls to this object
				.leftControls(3);

			/* Enemies */
			Crafty.e("2D, DOM, Color, Mouse, wall_left, solid, brutal")
				// Draw the sprite
				.attr({ x: 560, y: 20, z: 3, w: 400, h: 400})
				.bind('Click', function() {
					// Number of bullets
					var current_bullets = jQuery(".actual_bullet_list:eq(0) > li").length;
					if(current_bullets > 0){
						Crafty.audio.play("shoot",1,0.7);
						jQuery(".subitem_value:eq(0)").html(current_bullets - 1);
						jQuery(".actual_bullet_list > li:eq(0)").flyOffPage({
               		 		retainSpace: {
                   				height: 0,
                   		 		margin: 0
                			},
               		 		direction: 'top',
               		 		duration: 150
           				});
						console.log("enemy dead (+10 points)");
						scores.incrementScore('one');
						// None immediate sound
						// TODO: Make Audio delay timer component or function
						Crafty.audio.play("fired_bullet_shelldrop",1,0.2);
					}
					else{
						notification.error("OUT OF AMMO", "Retrieve more by clicking the supplies box");
						console.log("no bullets left (you should switch weapon or find ammo)");
						Crafty.audio.play("out_of_ammo",1,1);
					}
				})
    			.areaMap([0,0], [400,0], [400,400], [0,400])
    			.color("#0000FF");
    	
    		 // Supplies box (Can be expanded upon later)
			 Crafty.e("2D, DOM, Color, Mouse, storageBox, solid")
    			.attr({ x: 1080, y: 50, z: 1, w: 128, h: 128})
    			.bind('Click', function() {
    				notification.highlight("MAX AMMO", "Found ammo from supplies box");
    				console.log("Gave yourself maximum ammunition");
    				Gun.populateAmmo();
    			})
  				.areaMap([0,-128], [128, -128], [128,0], [0,0]);
		}
	}
});