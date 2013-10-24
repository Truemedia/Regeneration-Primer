/* 
* @file Social PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for managing, linking to, and interacting with external API's for social networking 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/social/partial", "i18n!packages/social/nls/strings", "./Config", "./Lang", "./Bootstrap"], function(view, nls, Config, Lang, jQuery) {
	return social = {
	
		// Partial loading location	
		partial_block_element: 'social_partial',
	
		// Translations
		trans: {},
			
		/* Load this package */
		init: function() {

			// Load translations
			social.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			social.loadDOM();
		},
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {

			// Load social data
			jQuery.getJSON("packages/social/data.json", function(data){
			
				// Append language strings to JSON data source
				data.trans = social.trans;
				
				// Load view
       			document.getElementById(social.partial_block_element).innerHTML = view(data);

			});

			console.log("Social PACKAGE loaded");
		}
	}
});