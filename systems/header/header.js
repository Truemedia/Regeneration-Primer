/* 
* @file Header SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system which provides a website header for navigation and actions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!systems/header/header", "./Bootstrap", "./Options.MOD"], function(window, jQuery, options) {
	return header = {
	
		// Variable containing all html from modules
		nested_view: "",
	
		// Load the header system
		init: function() {

			header.loadModules();
		},
		
		// Load modules relevant to this system
		loadModules: function() {

			// Run options view (expect callback to trigger rendering itself)
			Options.view();
		},
		
		// Append the HTML for this system to the DOM
		loadDOM: function() {

			// Load header data
			jQuery.getJSON("systems/header/header.json", function(data){
			
				// Append modules to view data
				data.options = header.nested_view;
			
				// Mustache
       			document.getElementById('header_window').innerHTML = window(data);

			});
			console.log("Header window loaded");
		}
	}
});