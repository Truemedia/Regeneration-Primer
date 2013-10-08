/* 
* @file Highscores PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package which provides an ordered overview of scores from past gaming sessions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/highscores/partial", "i18n!packages/highscores/nls/strings", "./Bootstrap"], function(view, lang, jQuery) {
	return highscores = {
	
		// Partial loading location	
		partial_block_element: 'highscores_partial',
	
		/* Based on modified UI design posted on Bootsnipp (http://bootsnipp.com/snipps/groupable-table) */
		// Load the highscores system
		init: function() {

			highscores.loadDOM();
		},
		
		// Append the HTML for this system to the DOM
		loadDOM: function() {

			// Load highscores data
			jQuery.getJSON("packages/highscores/data.json", function(data){
			
				// Append language strings to JSON data source
				data.lang = lang;
				
				// Load view
       			document.getElementById(highscores.partial_block_element).innerHTML = view(data);

			});
			console.log("Highscores PACKAGE loaded");
		}
	}
});