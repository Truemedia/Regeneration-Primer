/* 
* @file Footer PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package which provides a website footer for navigation and actions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	"stache!./views/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "Bootstrap"
], function(template, nls, Config, Lang, Package, jQuery) {
	return footer = {
			
		// Data attribute binded element
		element_binding: null,
		
		// Activation indication
		active: false,
		
		// Translations
		trans: {},
	
		/* Load this package */
		init: function() {
			
			// Register package
			Package.register('footer');

			// Load translations
			footer.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			footer.view();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Store the element binding
        	footer.element_binding = element;
        	
            footer.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Activate this package and associated modules */
		activate: function() {
			
			// Show as active
			footer.active = true;
			
			// Reload DOM
			footer.view();
		},
		
		/* Deactivate this package and associated modules */
		deactivate: function() {
			
			// Show as inactive
			footer.active = false;
			
			// Clear DOM
			jQuery(footer.element_binding).html("");
		},

		/* Append the HTML for this package to the DOM */
		view: function() {

			// Load package data
			jQuery.getJSON("sample_package.json", function(data){
				
				// Append language strings to JSON data source
				data.trans = footer.trans;

				// Get language selection dropdown options
				data.languages = Config.get('languages');
				jQuery.each(data.languages, function(index, language) {
					
					// Select option is current language
					if (language.lang_code === localStorage['language']) {
						data.languages[index].lang_selected = "selected ";
					}
				});
			
				// Load view
       			jQuery(footer.element_binding).html( template(data) );
       			
       			// Register events
       			footer.registerEvents();
			});
		},
		
		/* Register jQuery events handlers */
		registerEvents: function() {

			// Language selector
			jQuery(footer.element_binding).on("change", "#language", function(event) {
				
				var lang_code = jQuery(this).val();
				var change = confirm(footer.trans.change_language);

				if (change == true) {
					Lang.setLocale(lang_code);
				}
			});
		}
	}
});