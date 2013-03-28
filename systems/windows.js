/* 
* @file Windows SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for loading windows, assigning window events, and general window maintenance (windows = widgets made of HTML,CSS and JavaScript)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQ.xml2json", "./Crafty", "./Gun.MOD", "./characterselection", "./scores", "./social", "./debug", "./marquee"], function(jQuery, Crafty, Gun, characterselection, scores, social, debug, marquee) {
	return windows = {
		init: function(windowObject){
			// Make chainable callback since XSLT plugin callback support is bugged
			jQuery.fn.windowLoadCallback = function(windowName, callbackValue)
			{
    			windows.callbacks(windowName, callbackValue);
			}
			
			/* Load the XHTML for a window */
			jQuery.each(windowObject, function(windowName, callbackValue){
				var windowDirFilePrefix = 'windows/'+windowName+'/'+windowName+'.';
				// Load each window
				var windowHTML = jQuery.xslt({xmlUrl: windowDirFilePrefix+'xml', xslUrl: windowDirFilePrefix+'xsl'});
				jQuery('#'+windowName+'_window').html(windowHTML)
					.windowLoadCallback(windowName, callbackValue);
			});
		},
		callbacks: function(windowName, callbackValue){
			/* Function list to call based on specific window, after window has loaded */
			console.log(windows.realName(windowName)+" window loaded");
			switch (windowName){
				case 'header':
					// TODO: Hide Dev notices nicer
    				jQuery('.devhint').toggle();
					break;
				case 'characterselection':
					characterselection.registerEvents();
					break;
				case 'debug':
					debug.registerEvents();
					break;
				case 'footer':
					break;
  				case 'marquee':
  					windows.assignPlayerNameDOM(callbackValue);
  					marquee.registerEvents();
  					break;
  				case 'scores':
 			 		scores.highlightMainPlayer(callbackValue);
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
			// Return window name shown to humans (capitalized first letter)
			// TODO: Consider in future implementing multiple languages function called with this (multilingual debugging)
    		return windowName.charAt(0).toUpperCase() + windowName.slice(1);
		},
		RearrangeForCanvas: function(character){
			// Move it to the bottom of the page, when canvas has loaded 
			// TODO: assign canvas to it's own element on build to avoid need for this code
			jQuery('#inventory_window').after(jQuery('#cr-stage'));
		},
		assignPlayerNameDOM: function(player_name){
			// Add player_id to dom where-ever needed
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