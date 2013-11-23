/* 
* @file Header PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package which provides a website header for navigation and actions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/header/partial", "i18n!packages/header/nls/strings", "./Config", "./Lang", "./Bootstrap", "./Options.MOD"], function(view, nls, Config, Lang, jQuery, options) {
	return header = {
	
		// Partial loading location	
		element_binding: null,
		
		// Activation indication
		active: false,
		
		// Translations
		trans: {},
			
		// Variable containing all html from modules
		nested_view: "",
	
		/* Load this package */
		init: function() {

			// Load translations
			header.trans = Lang.getTrans(nls);
			
			// Activate the package on current web-page
			header.activate();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Store the element binding
        	header.element_binding = element;
        	
        	header.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Activate this package and associated modules */
		activate: function() {
			
			// Show as active
			header.active = true;
			
			// Load modules relevant to this package
			header.loadModules();
		},
		
		/* Deactivate this package and associated modules */
		deactivate: function() {
			
			// Show as inactive
			header.active = false;
			
			// Clear DOM
			jQuery(header.element_binding).html("");
		},
		
		/* Load modules relevant to this package */
		loadModules: function() {

			// Run options view (expect callback to trigger rendering itself)
			Options.view();
		},
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {

			// Load header data
			jQuery.getJSON("packages/header/data.json", function(data){
				
				// Append language strings to JSON data source
				data.trans = header.trans;
			
				// Append modules to view data
				data.options = header.nested_view;
			
				// Load view
       			jQuery(header.element_binding).html( view(data) );

			});

			console.log("Header PACKAGE loaded");
		}
	}
});