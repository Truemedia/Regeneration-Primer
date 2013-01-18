function gameObjects(character){
	/* Guns */
	Crafty.e("2D, DOM, wall_left, solid, gun1, LeftControls")
		// Draw the sprite
		.attr({x: 12, y: 0, z: 2})
		// Add controls to this object
		.leftControls(3);
	/* Enemies */
	Crafty.e("2D, DOM, wall_left, solid, brutal")
		// Draw the sprite
		.attr({x: 560, y: 20, z: 3});
}