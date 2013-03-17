// Health module
define(["./jQ.ui.progressbar", "./Crafty"], function(jQuery, Crafty) {
	return health = {
		default_health_unit: 94,
		lifeSetup: function(){
			jQuery('.score').after("<div class='player_health'></div><div class='player_health_stats'>HP: (<span class='player_health_unit'>"+health.default_health_unit+"</span>/100)</div>");
			jQuery(".player_health").progressbar({
				value: health.default_health_unit
			});
		}
	}
});