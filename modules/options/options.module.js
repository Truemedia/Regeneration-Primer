/* 
* @file Options MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for directly modifying game settings
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!modules/options/options.module", "./Bootstrap", "./KO", "./header.PKG", "./audio.PKG", "./marquee.PKG", "./controls.PKG", "./debug.PKG"], function(window, jQuery, ko, header, audio, marquee, controls, debug) {
	return Options = {
	
		parent_system: "header",
		binding_element_class: "option-item",	
	
		// Return the options view (used by system)
		view: function() {

			// Load mustache (JSON currently used as static language file)
		 	var output = jQuery.getJSON("modules/options/options.json", function(data){
			
				// Inject template with data into parent system as nested view (using mustache {{{ }}} for nesting)
				var nested_view = window(data);

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
		
		registerEvents: function() { /* jQuery event handlers (for Options menu) */
			// Enable or disable debugging UI
			jQuery("#debug_toggle").popover();
			jQuery("#"+Options.parent_system+"_partial").on("click", "#debug_toggle", function(event){
				debug.initDebugger(event);
			});
			
			// Mute or unmute audio
			jQuery("#audio_toggle").popover();
			jQuery("#"+Options.parent_system+"_partial").on("click", "#audio_toggle", function(event){
				audio.toggleAudio(event);
			});
			
			// Hide or display unnecessary windows
			jQuery("#header_toggle").popover();
			jQuery("#"+Options.parent_system+"_partial").on("click", "#header_toggle", function(event){
				marquee.toggleHeader();
			});
		
			// Show control hints
			var tooltip_content = "<span class='control_instruction'><span class='key_expression_hold'>Hold </span><span class='key_hint'>'SHIFT'</span> to view scores</span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'SPACE'</span> to toggle inventory</span>"
    						+"<span class='control_instruction'><span class='key_hint'>'LEFT CLICK'</span> mouse to shoot<br /></span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'T'</span> to throw away mag</span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'E'</span> to enter new mag</span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'R'</span> to reconnect new mag</span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'C'</span> to chamber</span>";
			jQuery("#controls_tooltip").popover();
			
		/* jQuery event handlers (for Options menu) */ },
		
		// Make a callback to the parent system (in this case the header)
		systemCallback: function(data) {
		
			// Inject template with data into parent system as nested view (using mustache {{{ }}} for nesting)
			require("header.PKG").nested_view += data;
			
			// Note: Using require due to circular dependency (a needs b, b needs a)
			require("header.PKG").loadDOM();
			
			// Apply all KO bindings
			/* Options.registerBindings(); */
			
			// Register jQuery event handlers
			Options.registerEvents();
		}
	}
});