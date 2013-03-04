// Health module
define(["./jQ.ui.progressbar", "./Crafty"], function(jQuery, Crafty) {
	return health = {
		lifeSetup: function(){
			jQuery('.score').after("<div class='player_health'></div>");
			jQuery(".player_health").progressbar({
				value: 67
			});
		}
	}
});