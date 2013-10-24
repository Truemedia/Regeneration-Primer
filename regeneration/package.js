/* 
* @file Package CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for package management and package instances
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./Crafty", "./Gun.MOD", "./debug.PKG", "./marquee.PKG", "./profile.PKG", "./jQuery"], function(Crafty, Gun, debug, marquee, profile, jQuery) {
	return windows = {
		
		realName: function(windowName){
			// Return package name shown to humans (capitalized first letter)
    		return windowName.charAt(0).toUpperCase() + windowName.slice(1);
		},
		
		assignPlayerNameDOM: function(player_name){
			// Add player_id to dom where-ever needed
			jQuery('#my_score').addClass(player_name+"-colorscheme");
			jQuery(".score_container").each( function( index ){
				if(jQuery(this).has('#'+player_name+'_score_color').length > 0){
					// Setup our own players score debugging tool
					player_id = jQuery('#'+player_name+'_score_submit').val();
					jQuery('#self_incrementer').val(player_id);
				}
			});
		}
	}
});