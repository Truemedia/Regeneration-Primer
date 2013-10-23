/* 
* @file Game Info PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for providing external links and API's for game information tied to external services
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/gameinfo/partial", "i18n!packages/gameinfo/nls/strings", "./Config", "./Lang", "./Bootstrap", 'Feed.MOD'], function(view, nls, Config, Lang, jQuery, feed) {
	return gameinfo = {
			
		// Partial loading location	
		partial_block_element: 'gameinfo_partial',	
			
		// Translations
		trans: {},
			
		/* Load this package */
	 	init: function() {
	 		
	 		// Load translations
			gameinfo.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			gameinfo.loadDOM();
		},
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {

			// Load view data via system's JSON
			jQuery.getJSON("packages/gameinfo/data.json", function(data){
				
				// Append language strings to JSON data source
				data.trans = about.trans;
			
				// Load view
       			document.getElementById(gameinfo.partial_block_element).innerHTML = view(data);
       			
       			// Run modules
       			feed.init();
			});

			console.log("Game Info PACKAGE loaded");
		}
	}
});