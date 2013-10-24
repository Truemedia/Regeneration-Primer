/* 
* @file Debug PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for debugging all aspects of the game (only useful to developers)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/debug/partial", "i18n!packages/debug/nls/strings", "./Config", "./Lang", "./Bootstrap", "./Crafty", "./points.PKG"], function(view, nls, Config, Lang, jQuery, Crafty, points) {
	return debug = {
			
		// Partial loading location	
		partial_block_element: "debug_partial",
			
		// Translations
		trans: {},
			
		/* Load this package */
		init: function() {
			
			// Load translations
			debug.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			debug.loadDOM();
		},
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {
			
			// Load package data
			jQuery.getJSON("packages/debug/data.json", function(data) {
			
				// Build data
				data = {
					"gases": data	
				};
				
				// Append language strings to JSON data source
				data.trans = debug.trans;
				
				// Load view
				document.getElementById(debug.partial_block_element).innerHTML = view(data);
				
				// Start debugging
				debug.initDebugger(null);
			});
		},
		
		/* jQuery event handlers (for Debug) */
		registerEvents: function(){ 
		
			// Give yourself points
			jQuery("#debug_window").on("click", ".score_submit", function (event){
				points.incrementMyScore();
			});
	
			// Give everyone points
			jQuery("#debug_window").on("click", "#points_incrementer", function (event){
				points.incrementAllScores();
			});
		},

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
		},

		mouseDebugger: function(event){
			
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