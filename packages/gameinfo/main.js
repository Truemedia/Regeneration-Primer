/* 
* @file Game Info PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for providing external links and API's for game information tied to external services
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/gameinfo/partial", "./Bootstrap"], function(view, jQuery) {
	return gameinfo = {
			
		// Partial loading location	
		partial_block_element: 'gameinfo_partial',	
			
	 	init: function(){

			// Load view data via system's JSON
			jQuery.getJSON("packages/gameinfo/gameinfo.json", function(data){
			
				// Mustache
       			document.getElementById(gameinfo.partial_block_element).innerHTML = view(data);
			});
			console.log("Game Info PACKAGE loaded");
		}
	}
});