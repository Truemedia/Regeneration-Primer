/**
 * @file Debug PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for debugging all aspects of the game (only useful to developers)
 * @copyright Wade Penistone 2013
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"stache!./views/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "./Bootstrap", "./Crafty", "./points.PKG"
], function(view, nls, Config, Lang, Package, jQuery, Crafty, points) {
	/** 
     * Debug package
     * @namespace debug
     */
	return debug = {
			
		// Partial loading location	
		element_binding: null,
			
		// Translations
		trans: {},
			
		/* Load this package */
		init: function()
		{
			// Register package
			Package.register('debug');
			
			debug.element_binding = '#debug_partial';
			
			// Load translations
			debug.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			debug.loadDOM();
		},
		
		/* Autoloading hook */
        load: function(element, options)
        {	
        	// Store the element binding
        	debug.element_binding = element;
        	
        	debug.init();
        },
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function()
		{	
			// Load package data
			jQuery.getJSON("packages/debug/data.json", function(data) {
			
				// Build data
				data = {
					"gases": data	
				};
				
				// Append language strings to JSON data source
				data.trans = debug.trans;
				
				// Load view
				jQuery(debug.element_binding).html( view(data) );
				
				// Start debugging
				debug.initDebugger(null);
			});
		},
		
		/* Save X and Y coordinates of mouse position */
		saveCoords: function()
		{	
			// Instance shown in debug toolbar
			var x = jQuery("#mouse_x_coords").html();
			var y = jQuery("#mouse_y_coords").html();
			jQuery("#saved_mouse_coords").html(x+","+y);
			console.log("Saved X,Y coordinates "+x+","+y+" (will be overwritten when you save again)");
		},
		
		/* jQuery event handlers (for Debug) */
		registerEvents: function()
		{
			// Give yourself points
			jQuery("#debug_window").on("click", ".score_submit", function (event){
				points.incrementMyScore();
			});
	
			// Give everyone points
			jQuery("#debug_window").on("click", "#points_incrementer", function (event){
				points.incrementAllScores();
			});
		},

		initDebugger: function(event)
		{
			debug.pointsDebugger(event);
			debug.mouseDebugger(event);
		},

		pointsDebugger: function(event)
		{
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

		mouseDebugger: function(event)
		{	
			// Variables for tracking mouse
    		var mouseX, mouseY;
    		var canvas = jQuery('#stage').get(0);
   			
   			// Realtime mouse coords debugging
   			canvas.addEventListener('mousemove', function (mouse) {
    			jQuery("#mouse_x_coords").html(mouse.pageX - canvas.offsetLeft);
				jQuery("#mouse_y_coords").html(mouse.pageY - canvas.offsetTop);
    		}, 0);
		}
	}
});