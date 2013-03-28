/* 
* @file Character Selection SYSTEM 
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for selecting a character to play as
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return characterselection = {
		registerEvents: function (game){ /* jQuery event handlers (for Character Selection) */
			// Mute or unmute audio
			jQuery('#characterselection_window').on("mouseover", ".character_container", function(event){
				characterselection.highlightWindow(event, this);
			});
			jQuery('#characterselection_window').on("mouseleave", ".character_container", function(event){
				characterselection.unhighlightWindow(event, this);
			});
		/* /jQuery event handlers (for Character Selection) */ },
		highlightWindow: function(event, selector){
			jQuery(selector).children("div").addClass("hover_char");
			jQuery(selector).children("button").children("span").removeClass("ui-icon-closethick");
			jQuery(selector).children("button").children("span").addClass("ui-icon-check");
			jQuery(selector).addClass("highlight_button");
			characterselection.registerSounds();
		},
		unhighlightWindow: function(event, selector){
			jQuery(selector).children("div").removeClass("hover_char");
			jQuery(selector).children("button").children("span").removeClass("ui-icon-check");
			jQuery(selector).children("button").children("span").addClass("ui-icon-closethick");
			jQuery(selector).removeClass("highlight_button");
		},
		registerSounds: function(){
			// TODO: Find appropriate sound and register then add case function to play
			//Crafty.audio.play("char_hover",1,0.2);
		}
	}
});