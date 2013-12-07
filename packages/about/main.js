/* 
* @file About PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for providing information about a game, and links to external services
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	"stache!./views/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "Bootstrap"
], function(template, nls, Config, Lang, Package, jQuery) {
	return about = {
			
		// Data attribute binded element
		element_binding: null,
		
		// Translations
		trans: {},
			
		/* Load this package */
	 	init: function() {
	 		
	 		// Register package
	 		Package.register('about');
	 		
	 		// Load translations
			about.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			about.view();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Store the element binding
        	about.element_binding = element;
        	    	
        	about.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Append the HTML for this package to the DOM */
		view: function() {
			
			// Build data
	 		data = {
	 			"version": Config.get('game.version'),
	 			"game_name": Config.get('game.name')
	 		};
	 		
	 		// Append language strings to JSON data source
			data.trans = about.trans;
			
			// Load view
       		jQuery(about.element_binding).html( template(data) );
		}
	}
});