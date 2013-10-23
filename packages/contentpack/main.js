/* 
* @file Content Pack PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for managing/customizing content (audio, images, videos) in the game
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/contentpack/partial", "i18n!packages/contentpack/nls/strings", "./Config", "./Lang", "./Bootstrap"], function(view, nls, Config, Lang, jQuery) {
	return contentpack = {
		
		// Partial loading location	
		partial_block_element: 'contentpack_partial',
		
		// Translations
		trans: {},
		
		/* Load this package */
		init: function() {
		 		
			// Load translations
			contentpack.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			contentpack.loadDOM();
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
	       	document.getElementById(contentpack.partial_block_element).innerHTML = view(data);

			console.log("Content Pack PACKAGE loaded");
		}
	}
});