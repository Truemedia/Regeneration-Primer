// Debug module
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return debug = {
		initDebugger: function(){
			debug.pointsDebugger();
		},
		pointsDebugger: function(){
			// Hide or show manual score incrementers
			jQuery(".score_submit").toggle();
			// Hide or show global manual score incrementer
			jQuery("#score_debug_panel").toggle();
		}
	}
});