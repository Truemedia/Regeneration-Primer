/* 
* @file Main Menu SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for navigating across the difference scenes, models, and levels of a game
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!systems/mainmenu/mainmenu", "./Bootstrap"], function(view, jQuery) {
	return mainmenu = {

		// Partial loading location	
		partial_block_element: 'mainmenu_partial',
			
		init: function(){

			// Load view data via system's JSON
			jQuery.getJSON("systems/mainmenu/mainmenu.json", function(data){
			
				// Mustache
       			document.getElementById(mainmenu.partial_block_element).innerHTML = view(data);
			});
			console.log("Main menu PACKAGE loaded");
		}
	}
});