/* 
* @file Inventory PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for entities containing items
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/inventory/partial", "./jQuery", "./Crafty"], function(view, jQuery, Crafty) {
	return inventory = {
		
		/* Stores entities */
		inventories: [],
		
		// Partial loading location	
		partial_block_element: 'inventory_partial',
	
		// Start the inventory package
		init: function() {

			inventory.loadDOM();
		},
		
		// Append the HTML for this package to the DOM
		loadDOM: function() {

			// Load highscores data
			jQuery.getJSON("packages/inventory/data.json", function(data){
			
				// Mustache
       			document.getElementById(inventory.partial_block_element).innerHTML = view(data);

			});
			console.log("Inventory PACKAGE loaded");
		}
	}
});