define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		initGame: function(){
			// Setup Crafty area
			Crafty.init(resolution_width, resolution_height);

			// Use Crafty as canvas object
			Crafty.canvas.init();
		}
	}
});