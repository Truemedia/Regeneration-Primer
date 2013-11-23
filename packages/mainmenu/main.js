/* 
* @file Main Menu PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for navigating across the difference scenes, models, and levels of a game
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/mainmenu/partial", "i18n!packages/mainmenu/nls/strings", "./Config", "./Lang", "./Bootstrap"], function(view, nls, Config, Lang, jQuery) {
	return mainmenu = {

		// Data attribute binded element
		element_binding: null,
		
		// Translations
		trans: {},
			
		/* Load this package */
		init: function() {
	 		
	 		// Load translations
			mainmenu.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			mainmenu.loadDOM();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Store the element binding
        	mainmenu.element_binding = element;

        	mainmenu.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {
			
			// Load view data via system's JSON
			jQuery.getJSON("packages/mainmenu/data.json", function(data){
				
				// Append language strings to JSON data source
				data.trans = mainmenu.trans;
			
				// Load view
       			jQuery(mainmenu.element_binding).html( view(data) );
			});

			console.log("Main menu PACKAGE loaded");
		}
	}
});