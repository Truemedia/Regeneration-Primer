/* 
* @file About PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for providing information about a game, and links to external services
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/about/partial", "i18n!packages/about/nls/strings", "./Config", "./Lang", "./Bootstrap"], function(view, nls, Config, Lang, jQuery) {
	return about = {
			
		// Partial loading location	
		partial_block_element: 'about_partial',
		
		// Translations
		trans: {},
			
		/* Load this package */
	 	init: function() {
	 		
	 		// Load translations
			about.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			about.loadDOM();
		},
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {
			
			// Build data
	 		data = {
	 			"version": Config.get('game.version'),
	 			"game_name": Config.get('game.name')
	 		};
	 		
	 		// Append language strings to JSON data source
			data.trans = about.trans;
			
			// Load view
       		document.getElementById(about.partial_block_element).innerHTML = view(data);
       		
			console.log("About PACKAGE loaded");
		}
	}
});