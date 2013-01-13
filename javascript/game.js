// Initializer
Crafty.init(400, 400);
Crafty.canvas.init();

// YOUR GAME CODE

// Sprite Map for items
Crafty.sprite(256, "images/items/Guns/AR-15.png", {
   gun1: [0, 0]
});

// Sprite Map for charachters
Crafty.sprite(256, "images/characters/(Coward)_DefaultPose.png", {
   coward: [0, 0]
});

// Controls
Crafty.c("LeftControls", {
    init: function() {
        this.requires('Multiway');
    },
    
    leftControls: function(speed) {
        this.multiway(speed, {W: -90, S: 90, D: 0, A: 180})
        return this;
    }
    
});

// Draw the sprites
Crafty.e("2D, DOM, wall_left, solid, gun1")
	.attr({x: 125, y: 125, z: 2});
Crafty.e("2D, DOM, wall_left, solid, coward, LeftControls")
	.attr({x: 2, y: 2, z: 2})
	.leftControls(3);
	
