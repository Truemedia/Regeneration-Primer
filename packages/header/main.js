/* 
* @file Header PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package which provides a website header for navigation and actions
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/header/partial", "./Bootstrap", "./Options.MOD"], function(view, jQuery, options) {
	return header = {
	
		// Partial loading location	
		partial_block_element: 'header_partial',
			
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
			jQuery.getJSON("packages/header/data.json", function(data){
			
				// Append modules to view data
				data.options = header.nested_view;
			
				// Mustache
       			document.getElementById(header.partial_block_element).innerHTML = view(data);

			});
			console.log("Header PACKAGE loaded");
		}
	}
});