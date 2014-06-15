/* 
* @file Options MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for directly modifying game settings
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	"stache!./options.module", "Package", "Bootstrap", "KO", "navbar", "audio"
], function(template, Package, jQuery, ko, navbar, audio)
{
	Options = {
	
		parent_element_binding: "[data-package='navbar']",
		binding_element_class: "option-item",
	
		// Return the options view (used by parent package)
		view: function() {

			// Load mustache (JSON currently used as static language file)
		 	var output = jQuery.getJSON("packages/navbar/modules/options/options.json", function(data){
			
				// Inject template with data into parent package as nested view (using mustache {{{ }}} for nesting)
				var nested_view = template(data);

				// Load parent view into DOM
				// TODO: Get this to trigger through parent automatically in loadModules function
				Options.systemCallback(nested_view);
			});	
		},
		
		// Setup a view model for various complex interactions with the view
		viewModel: function() {
		
			// icon-wrench
			//icon-certificate
			this.icons = ko.observableArray(["icon-wrench", "icon-certificate"]);
 
 			// Select icon based on iterating array item based on current icon
    		this.currentIcon = ko.computed(function() {
        		return this.icons(0);
    		}, this);
		},
		
		registerBindings: function() {

			/* Iterate multiple binding instances with jQuery */
			jQuery("."+Options.binding_element_class).each(function(index) {
				ko.applyBindings(new Options.ViewModel(index), this);
			});
		},
		
		/* Register event bindings */
		registerEvents: function() {

			// Enable or disable debugging UI
			/*jQuery("#debug_toggle").popover();
			jQuery(Options.parent_element_binding).on("click", "#debug_toggle", function(event){
				debug.initDebugger(event);
			});*/
			
			// Hide or display unnecessary panels
			/*jQuery("#navbar_toggle").popover();
			jQuery(Options.parent_element_binding).on("click", "#navbar_toggle", function(event){
				marquee.toggleHeader();
			});*/
			
			// Generate package list modal
			jQuery(Options.parent_element_binding).on("click", "#packages_list", function(event) {
				Package.list();
			});
		},
		
		// Make a callback to the parent system (in this case the navbar)
		systemCallback: function(data) {
		
			// Inject template with data into parent system as nested view (using mustache {{{ }}} for nesting)
			require("navbar").nested_view += data;
			
			// Note: Using require due to circular dependency (a needs b, b needs a)
			require("navbar").loadDOM();
			
			// Apply all KO bindings
			/* Options.registerBindings(); */
			
			// Register jQuery event handlers
			Options.registerEvents();
			
			console.log("Options MODULE loaded");
		}
	};

	return Options;
});