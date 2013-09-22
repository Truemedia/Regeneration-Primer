/* 
* @file Package CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for package management and package instances
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./Crafty", "./Gun.MOD", "./social.PKG", "./debug.PKG", "./marquee.PKG", "./profile.PKG", "./jQ.xml2json", "./jQ.xslt"], function(Crafty, Gun, social, debug, marquee, profile, jQuery) {
	return windows = {
		init: function(windowObject){
			// Make chainable callback since XSLT plugin callback support is bugged
			jQuery.fn.windowLoadCallback = function(windowName, callbackValue)
			{
    			windows.callbacks(windowName, callbackValue);
			}
			
			/* Load the XHTML for a window */
			jQuery.each(windowObject, function(windowName, callbackValue){
				var windowDirFilePrefix = 'packages/'+windowName+'/'+windowName+'.';
				// Load each window
				var windowHTML = jQuery.xslt({xmlUrl: windowDirFilePrefix+'xml', xslUrl: windowDirFilePrefix+'xsl'});
				jQuery('#'+windowName+'_partial').html(windowHTML)
					.windowLoadCallback(windowName, callbackValue);
			});
		},
		callbacks: function(windowName, callbackValue){
			/* Function list to call based on specific package, after package has loaded */
			console.log(windows.realName(windowName)+" PACKAGE loaded");
			switch (windowName){
				case 'header':
					// TODO: Hide Dev notices nicer
    				jQuery('.devhint').toggle();
					break;
				case 'debug':
					debug.registerEvents();
					break;
				case 'footer':
					break;
  				case 'marquee':
  					windows.assignPlayerNameDOM(callbackValue); // Make unique to player
  					score.init(); // Kickstart players score
  					break;
  				case 'social':
  					social.forkit();
  					break;
  				case 'inventory':
 			 		Gun.populateAmmo();
  					break;
  				case 'options':
  					break;
			} 
		},
		realName: function(windowName){
			// Return package name shown to humans (capitalized first letter)
			// TODO: Consider in future implementing multiple languages function called with this (multilingual debugging)
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