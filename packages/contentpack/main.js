/* 
* @file Content Pack PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for managing/customizing content (audio, images, videos) in the game
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/contentpack/partial", "i18n!packages/contentpack/nls/strings", "Config", "Lang", "Package", "./Bootstrap"], function(view, nls, Config, Lang, Package, jQuery) {
	return contentpack = {
		
		// Data attribute binded element
		element_binding: null,
		
		// Translations
		trans: {},
		
		/* Load this package */
		init: function() {
			
			// Register package
			Package.register('contentpack');
		 		
			// Load translations
			contentpack.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			contentpack.loadDOM();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Store the element binding
        	contentpack.element_binding = element;
        	    	
        	contentpack.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {
			
			// Build data
		 	data = {
		 		"characters": Config.get('content_pack.characters')
		 	};
		 	
		 	// Append language strings to JSON data source
			data.trans = contentpack.trans;
				
			// Load view
	       	jQuery(contentpack.element_binding).html( view(data) );
		}
	}
});