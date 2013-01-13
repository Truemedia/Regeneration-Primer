function gameObjects(){
	Crafty.e("2D, DOM, wall_left, solid, gun1")
		// Draw the sprite
		.attr({x: 125, y: 125, z: 2});
	Crafty.e("2D, DOM, wall_left, solid, coward, LeftControls")
		// Draw the sprite
		.attr({x: 2, y: 2, z: 2})
		// Add controls to this object
		.leftControls(3);	
}