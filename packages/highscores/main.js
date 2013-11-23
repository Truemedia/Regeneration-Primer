/* 
* @file Highscores PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package which provides an ordered overview of scores from past gaming sessions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/highscores/partial", "i18n!packages/highscores/nls/strings", "./Config", "./Lang", "./Bootstrap"], function(view, nls, Config, Lang, jQuery) {
	return highscores = {
	
		// Data attribute binded element
		element_binding: null,
	
		// Translations
		trans: {},
			
		/* Load this package */
		init: function() {

			// Load translations
			highscores.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			highscores.loadDOM();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Store the element binding
        	highscores.element_binding = element;
        	    	
        	highscores.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {

			// Load highscores data
			jQuery.getJSON("packages/highscores/data.json", function(data){
			
				// Append language strings to JSON data source
				data.trans = highscores.trans;
				
				// Load view
       			jQuery(highscores.element_binding).html( view(data) );

			});

			console.log("Highscores PACKAGE loaded");
		}
	}
});