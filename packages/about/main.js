/* 
* @file About PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for providing information about a game, and links to external services
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/about/partial", "i18n!packages/about/nls/strings", "./Bootstrap", "./Config"], function(view, lang, jQuery, Config) {
	return about = {
			
		// Partial loading location	
		partial_block_element: 'about_partial',
			
	 	init: function(){
	 		
	 		// Build data
	 		data = {
	 			"version": Config.get('game.version'),
	 			"game_name": Config.get('game.name')
	 		};
	 		
	 		// Append language strings to JSON data source
			data.lang = lang;
			
			// Load view
       		document.getElementById(about.partial_block_element).innerHTML = view(data);
       		
			console.log("About PACKAGE loaded");
		}
	}
});