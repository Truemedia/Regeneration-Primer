// Debug module
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return debug = {
		initDebugger: function(){
			debug.pointsDebugger();
		},
		pointsDebugger: function(event){
			if (event != null){
				if(jQuery("#debug_toggle > span").hasClass("ui-icon-gear")){
					console.log("Hiding debugging UI");
					jQuery("#debug_toggle > span").removeClass("ui-icon-gear")
						.addClass("ui-icon-wrench");
				}
				else{
					console.log("Showing debugging UI");
					jQuery("#debug_toggle > span").removeClass("ui-icon-wrench")
						.addClass("ui-icon-gear");
				}
			}
			
			// Hide or show manual score incrementers
			jQuery(".score_submit").toggle();
			// Hide or show global manual score incrementer
			jQuery("#score_debug_panel").toggle();
			// Hide or show Developer hints
			jQuery(".devhint").toggle();
		}
	}
});