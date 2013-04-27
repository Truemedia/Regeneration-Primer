/* 
* @file Marquee SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for displaying important information in a style mimicking a real-life marquee
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./windows", "./points", "./audio", "./controls", "./debug",], function(jQuery, Crafty, windows, points, audio, controls, debug) {
	return marquee = {
		toggleHeader: function(){
			// Hide or show everything..
			jQuery("#header_window").toggle();
			jQuery("#marquee_window").toggle();
			jQuery("#social_window").toggle();
			
			// ..then make sure at least the button is visible
			// TODO: Find a cleaner way to write temporary minimal HTML instances
			var temporary_element_id = "header_recreate";
			if(jQuery("#"+temporary_element_id).length > 0) {
				jQuery("#"+temporary_element_id).remove();
			}
			else{
				var temporary_header_button = 
				'<button id="'+temporary_element_id+'" class="ui-state-default ui-corner-all">'+
					'<span class="ui-icon ui-icon-arrowthickstop-1-s"></span><span>Show header</span>'+
				'</button>';
				jQuery('body').prepend(temporary_header_button);
				jQuery('body').on("click", "#header_recreate", function(event){
					marquee.toggleHeader(event);
				});
			}
		},
		registerEvents: function (){ /* jQuery event handlers (for Marquee) */
			// Mute or unmute audio
			jQuery('#marquee_window').on("click", "#audio_toggle", function(event){
				audio.toggleAudio(event);
			});
			jQuery('#marquee_window').on("mouseenter", "#audio_toggle", function(event){
				controls.hints("audio", event);
			});
			jQuery('#marquee_window').on("mouseleave", "#audio_toggle", function(event){
				controls.hints("audio", event);
			});
		
			// Enable or disable debugging UI
			jQuery('#marquee_window').on("click", "#debug_toggle", function(event){
				debug.initDebugger(event);
			});
			jQuery('#marquee_window').on("mouseenter", "#debug_toggle", function(event){
				controls.hints("debug", event);
			});
			jQuery('#marquee_window').on("mouseleave", "#debug_toggle", function(event){
				controls.hints("debug", event);
			});
		
			// Show control hints
			jQuery('#marquee_window').on("mouseenter", "#controls_tooltip", function(event){
				controls.hints("controls", event);
			});
			jQuery('#marquee_window').on("mouseleave", "#controls_tooltip", function(event){
				controls.hints("controls", event);
			});
		
			// Hide or display unnecessary windows
			jQuery('#marquee_window').on("click", "#header_toggle", function(event){
				marquee.toggleHeader();
			});
			jQuery('#marquee_window').on("mouseenter", "#header_toggle", function(event){
				controls.hints("header", event);
			});
			jQuery('#marquee_window').on("mouseleave", "#header_toggle", function(event){
				controls.hints("header", event);
			});
		/* /jQuery event handlers (for Marquee) */ }
	}
});