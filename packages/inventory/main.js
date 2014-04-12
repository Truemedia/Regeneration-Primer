/**
 * @file Inventory PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for entities containing items
 * @copyright Wade Penistone 2013
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"stache!./views/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "jQuery", "Crafty", "KO", "Toastr"
], function(template, nls, Config, Lang, Package, jQuery, Crafty, ko, toastr) {
	/** 
     * Inventory package
     * @namespace inventory
     */
	return inventory = {
		
		/* Stores entities */
		inventories: [],
		
		// Binding element class
		binding_element_class: 'inventory_item',
	
		// Translations
		trans: {},
		
		// Package options
		settings: null,
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			// Register package
			Package.register('inventory');

			// Load translations
			this.trans = Lang.getTrans(nls);

			// Save options
			this.settings = (Object.keys(options).length === 0) ? Config.get('inventory::defaults') : options;
		},
			
		/* Autoloading hook */
	    load: function(element, options)
	    {    	
	        // Load the package onto current web-page
	    	this.init(options);
			new this.view({el: element});
	    },
	        
	    /* Data collection */
	    collection: Backbone.Collection.extend({
	        url: function() { return Config.get('inventory::routes.' + inventory.settings.source); },
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        initialize: function()
	        {    	
	            this.collection = new inventory.collection({model: Backbone.Model.extend()});
	            this.render();
	        },
	        render: function()
	        {
	            // Load package stored data
	        	var self = this;
	            this.collection.fetch().done( function() {
	            		
	            	// Compose data for view
	            	var data = {
	            		items: self.collection.toJSON(),
	            		trans: inventory.trans,
	            		img_dir: Config.get('resources.directories.multimedia.images')
	            	};
	    				
	            	// Render content
	            	console.log(data);
	            	self.$el.html( template(data) );
	            });
	        }
	    }),
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function()
		{
			// Load initial inventory items
			jQuery.getJSON("packages/inventory/data.json", function(data){
			
				// Append directories
				data.img_dir = Config.get('resources.directories.multimedia.images');
				
				// Set ASYNC AJAX to false
				jQuery.ajaxSetup({
					async: false
				});

				// Append characters
				jQuery.getJSON("packages/characterselection/info/characters_advanced.json", function(character_data) {
					data.characters = character_data.characters;
				});
				
				// Append language strings to JSON data source
				data.trans = inventory.trans;
				
				// Set ASYNC AJAX back to true
				jQuery.ajaxSetup({
					async: true
				});
				
				// Load view
       			document.getElementById(inventory.partial_block_element).innerHTML = view(data);
       			
       			// Register bindings
       			inventory.registerBindings();
       			
       			// Register events
       			inventory.registerEvents();
			});
		},
		
		/* Register jQuery events */
		registerEvents: function()
		{	
			jQuery("#AR-15_info").popover();
			jQuery("#Glock_info").popover();
			jQuery("#AK-47_info").popover();
		},
		
		registerBindings: function()
		{
			/* Iterate multiple binding instances with jQuery */
			jQuery("."+inventory.binding_element_class).each(function(index) {
				ko.applyBindings(new inventory.ViewModel(index), this);
			});
		},
		
		/* KnockoutJS View Model */
		ViewModel: function(index)
		{
			var self = this;
			 
		    self.ammo = ko.observableArray(inventory.loadRounds(index));
			
    		self.ammoCount = ko.computed(function() {
        		return self.ammo().length;
    		}, self);
    		
    		self.shoot = function() {

    	        self.ammo.pop();
    	    };
    	    
    	    self.give = function() {
    	    	console.log("Giving weapon to person");
    	    }
		},
		
		/* Equip an item into the interaction slot of the player inventory */
		equip: function(item_name)
		{	
			// Display notification
			toastr.options = Config.get('inventory::toastr');
			toastr.warning("Now equipped with a "+item_name, "Picked up an item");
			
			// Switch as upper most inventory item (and make active)
			inventory.switchItem(1);
		},
		
		/* Simulate inventory item click */
		switchItem: function(item_number)
		{
			var item_index = item_number - 1;
			jQuery("#my_inventory > li:eq('"+item_index+"') > .accordion-heading > .accordion-toggle").click();
		},
		
		/* Build array of bullets using range and damage (inherit same values) */
		loadRounds: function(gun_index, dmg)
		{	
			// Get default gun amount
			var guns = Config.get('inventory::guns.guns');
			var amount = guns[gun_index].subitems[0].amount;
			
			// Set damage to default if not set
			if (dmg === undefined) dmg = guns[gun_index].subitems[0].damage;
			
			rounds = [];
			for (i=0; i<amount; i++) {
				rounds[i] = dmg;
			}
			return rounds;
		}
	}
});