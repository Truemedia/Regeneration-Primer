/* 
* @file Footer PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package which provides a website footer for navigation and actions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/footer/partial", "i18n!packages/footer/nls/strings", "./Bootstrap", "./Bootstrap.formhelpers.selectbox", "./Bootstrap.formhelpers.countries.en_US", "./Bootstrap.formhelpers.languages.codes", "./Bootstrap.formhelpers.languages"], function(view, lang, jQuery) {
	return footer = {
			
		// Partial loading location	
		partial_block_element: 'footer_partial',
	
		// Load the footer system
		init: function() {

			footer.loadDOM();
		},

		// Append the HTML for this system to the DOM
		loadDOM: function() {

			// Load package data
			jQuery.getJSON("sample_package.json", function(data){
				
				// Append language strings to JSON data source
				data.lang = lang;

				// Get language selection dropdown options
				data.languages = Config.get('languages');
			
				// Load view
       			document.getElementById(footer.partial_block_element).innerHTML = view(data);
			});
			console.log("Footer PACKAGE loaded");
		}
	}
});