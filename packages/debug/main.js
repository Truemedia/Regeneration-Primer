/* 
* @file Debug SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for debugging all aspects of the game (only useful to developers)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQ.ui", "./Crafty", "./points.SYS"], function(jQuery, Crafty, points) {
	return debug = {
		registerEvents: function(){ /* jQuery event handlers (for Debug) */
			// Activate debugging panels
			//jQuery("#debug_panels").tabs();
		
			// Give yourself points
			jQuery("#debug_window").on("click", ".score_submit", function (event){
				points.incrementMyScore();
			});
	
			// Give everyone points
			jQuery("#debug_window").on("click", "#points_incrementer", function (event){
				points.incrementAllScores();
			});
		/* jQuery event handlers (for Debug) */ },
		initDebugger: function(event){
			debug.pointsDebugger(event);
			debug.mouseDebugger(event);
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

			// Hide or show global manual score incrementer
			jQuery("#debug_panels").toggle();
		},
		mouseDebugger: function(event){
			// Hide or show mouse debug panel
			jQuery("#mouse_debug_panel").toggle();
			
			// Variables for tracking mouse
    		var mouseX, mouseY;
    		var canvas = jQuery('#cr-stage').get(0);
   			
   			// Realtime mouse coords debugging
   			canvas.addEventListener('mousemove', function (mouse) {
    			jQuery("#mouse_x_coords").html(mouse.pageX - canvas.offsetLeft);
				jQuery("#mouse_y_coords").html(mouse.pageY - canvas.offsetTop);
    		}, 0);
		}
	}
});