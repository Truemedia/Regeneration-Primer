/* 
* @file Footer PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package which provides a website footer for navigation and actions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/footer/partial", "i18n!packages/footer/nls/strings", "./Config", "./Lang", "./Bootstrap"], function(view, strings, Config, Lang, jQuery) {
	return footer = {
			
		// Partial loading location	
		partial_block_element: 'footer_partial',
	
		// Load the footer system
		init: function() {

			footer.loadDOM();
		},
		
		/* Register jQuery events handlers */
		registerEvents: function() {

			// Language selector
			jQuery("#"+footer.partial_block_element).on("change", "#language", function(event) {
				
				var lang_code = jQuery(this).val();
				var change = confirm(strings.change_language);

				if (change == true) {
					Lang.setLocale(lang_code);
				}
			});
		},

		// Append the HTML for this system to the DOM
		loadDOM: function() {

			// Load package data
			jQuery.getJSON("sample_package.json", function(data){
				
				// Append language strings to JSON data source
				data.trans = Lang.getTrans(strings);

				// Get language selection dropdown options
				data.languages = Config.get('languages');
				jQuery.each(data.languages, function(index, language) {
					
					// Select option is current language
					if (language.lang_code === localStorage['language']) {
						data.languages[index].lang_selected = "selected ";
					}
				});
			
				// Load view
       			document.getElementById(footer.partial_block_element).innerHTML = view(data);
       			
       			// Register events
       			footer.registerEvents();
			});
			console.log("Footer PACKAGE loaded");
		}
	}
});