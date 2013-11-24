/* 
* @file Social PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for managing, linking to, and interacting with external API's for social networking 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/social/partial", "i18n!packages/social/nls/strings", "Config", "Lang", "Package", "./Bootstrap"], function(view, nls, Config, Lang, Package, jQuery) {
	return social = {

		// Data attribute binded element
		element_binding: null,
	
		// Translations
		trans: {},
			
		/* Load this package */
		init: function() {
			
			// Register package
			Package.register('social');

			// Load translations
			social.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			social.loadDOM();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Store the element binding
        	social.element_binding = element;

        	social.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {

			// Load social data
			jQuery.getJSON("packages/social/data.json", function(data){
			
				// Append language strings to JSON data source
				data.trans = social.trans;
				
				// Load view
       			jQuery(social.element_binding).html( view(data) );

			});
		}
	}
});