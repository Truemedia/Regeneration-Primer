function gameObjects(character){
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
			Crafty.audio.play("shoot",1,1);
			$(".actual_bullet_list > li:eq(0)").flyOffPage({
                retainSpace: {
                    height: 0,
                    margin: 0
                },
                direction: 'top'
            });
			console.log("enemy dead (+10 points)");
			incrementScore('one');
		})
    	.areaMap([0,0], [400,0], [400,400], [0,400])
    	.color("#0000FF");
    	
    // Supplies box (Can be expanded upon later)
    Crafty.e("2D, DOM, Color, Mouse, Text")
    	.attr({ w: 100, h: 100, x: 50, y: 250, z: 6})
    	.bind('Click', function() {
    		console.log("picked up an item (not implemented yet)");
    	})
    	.areaMap([0,0], [100,0], [100,100], [0,100])
    	.color("#FFFF00")
    	.text("Supplies box")
  		.textColor('#000000', '0.9')
  		.textFont({ type: 'italic', family: 'Arial', size: '20px', weight: 'bold' });
}