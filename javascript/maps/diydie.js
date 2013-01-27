function generateWorld(){
	// Sprite Map for charachters
	Crafty.sprite(24, "images/textures/flooring/proto_floor.png", {
   		floor_tile: [0, 0]
	});
	
	var map_size_x = 960;
	var map_size_y = 480;
	var flooring_size_per_unit_x = 24;
	var flooring_size_per_unit_y = 24;
	for (i_x = 0; i_x < (map_size_x / flooring_size_per_unit_x); i_x++){
		for (i_y = 0; i_y < (map_size_y / flooring_size_per_unit_y); i_y++){
			/* Map (draw 24x24 tile to file 480x480 space (4000 tiles) */
			Crafty.e("2D, DOM, wall_left, solid, floor_tile")
				// Draw the sprite
				.attr({x: i_x * flooring_size_per_unit_x, y: i_y * flooring_size_per_unit_y, z: 1});
		}
	}
}