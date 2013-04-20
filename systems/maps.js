/* 
* @file Maps SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for loading maps (certain levels of game modes)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		generateWorld: function(){
			// Sprite Map for charachters
			// TODO: Extract in-use content pack from config
			var contentpack = "default";
			
			/* Turn on to enable proto floor (useful for debugging)
			Crafty.sprite(24, "multimedia/"+contentpack+"-contentpack/images/textures/flooring/proto_floor.png", {
   				floor_tile: [0, 0]
			}); */
			Crafty.sprite(24, "multimedia/"+contentpack+"-contentpack/images/textures/flooring/default_floor.png", {
   				floor_tile: [0, 0]
			});
			Crafty.sprite(24, "multimedia/"+contentpack+"-contentpack/images/textures/walls/proto_wall.png", {
   				wall_tile: [0, 0]
			});
	
			var map_size_x = resolution_width;
			var map_size_y = resolution_height;
			var flooring_size_per_unit_x = 24;
			var flooring_size_per_unit_y = 24;
			for (i_x = 0; i_x < (map_size_x / flooring_size_per_unit_x); i_x++){
				// Draw the walls
				Crafty.e("2D, DOM, wall_left, solid, wall_tile").attr({x: i_x * flooring_size_per_unit_x, y: 0, z: 2, w: 24, h: 256});	
				for (i_y = 0; i_y < (map_size_y / flooring_size_per_unit_y); i_y++){
					/* Map (draw 24x24 tile to file 480x480 space (4000 tiles) */
					// Draw the floors
					Crafty.e("2D, DOM, wall_left, solid, floor_tile").attr({x: i_x * flooring_size_per_unit_x, y: i_y * flooring_size_per_unit_y, z: 1});
				}
			}
			/* Decorations */
			var background_layer = 4; // TODO: Move this repeated variable into config
			Crafty.e("2D, DOM, wall_left, solid, gun1, Tween, Text")
				.attr({x: 1050, y: 220, z: background_layer, rotation: -55})
			Crafty.e("2D, DOM, wall_left, solid, gun2, Tween, Text")
					.attr({x: 1170, y: 100, z: background_layer, rotation: 45})
		}
	}
});