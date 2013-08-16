/* 
* @file Footer SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system which provides a website footer for navigation and actions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!systems/footer/footer", "./Bootstrap"], function(window, jQuery) {
	return footer = {
	
		// Load the footer system
		init: function() {

			footer.loadDOM();
		},

		// Append the HTML for this system to the DOM
		loadDOM: function() {

			// Load package data
			jQuery.getJSON("sample_package.json", function(data){
			
				// Mustache
       			document.getElementById('footer_window').innerHTML = window(data);

			});
			console.log("Footer window loaded");
		}
	}
});