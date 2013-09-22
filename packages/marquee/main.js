/* 
* @file Marquee PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for displaying important information in a style mimicking a real-life marquee
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./Package", "./points.PKG", "./audio.PKG", "./controls.PKG", "./debug.PKG",], function(jQuery, Crafty, windows, points, audio, controls, debug) {
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
		/* /jQuery event handlers (for Marquee) */ }
	}
});