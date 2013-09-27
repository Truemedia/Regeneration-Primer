/* 
* @file Inventory PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for entities containing items
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/inventory/partial", "./jQuery", "./Crafty", "./KO", "Config"], function(view, jQuery, Crafty, ko, Config) {
	return inventory = {
		
		/* Stores entities */
		inventories: [],
		
		// Partial loading location	
		partial_block_element: 'inventory_partial',
		
		// Binding element class
		binding_element_class: 'inventory_item',
	
		// Start the inventory package
		init: function() {

			inventory.loadDOM();
		},
		
		registerBindings: function(){
			/* Iterate multiple binding instances with jQuery */
			jQuery("."+inventory.binding_element_class).each(function(index) {
				ko.applyBindings(new inventory.ViewModel(index), this);
			});
		},
		ViewModel: function() { 
			var self = this;
			 
		    self.ammo = ko.observableArray(inventory.loadRounds(50, 47));
			
    		self.ammoCount = ko.computed(function() {
        		return self.ammo().length;
    		}, self);
    		
    		self.shoot = function() {

    	        self.ammo.pop();
    	    };
		},
		
		// Build array of bullets using range and damage (inherit same values)
		loadRounds: function(dmg, amount) {
			
			rounds = [];
			for (i=0; i<amount; i++) {
				rounds[i] = dmg;
			}
			return rounds;
		},
		
		// Append the HTML for this package to the DOM
		loadDOM: function() {

			// Load initial inventory items
			jQuery.getJSON("packages/inventory/data.json", function(data){
			
				// Append directories
				data.img_dir = Config.get('resources.directories.multimedia.images');
				
				// Load view
       			document.getElementById(inventory.partial_block_element).innerHTML = view(data);
       			
       			// Register bindings
       			inventory.registerBindings();
			});
			console.log("Inventory PACKAGE loaded");
		}
	}
});