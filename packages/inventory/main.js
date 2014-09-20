/**
 * @file Inventory PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for entities containing items
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, require('jquery'), require('backbone'), null, require('knockout'), null);
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"stache!./templates/partial", "i18n!./nls/strings", "Bootstrap", "Backbone", "keymage", "KO", "Toastr"
		], function (tpl, nls, jQuery, Backbone, keymage, ko, toastr) {
      		return (root.returnExportsGlobal = factory(tpl, nls, jQuery, Backbone, keymage, ko, toastr));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (tpl, nls, jQuery, Backbone, keymage, ko, toastr)
	{

	/** 
     * Inventory package
     * @namespace inventory
     */
	inventory =
	{	
		/* Stores entities */
		inventories: [],
		
		// Binding element class
		binding_element_class: 'inventory_item',
	
		settings: null, // Package options
		trans: {}, // Translations
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			// Register package
			Package.register('inventory');

			// Load translations
			this.trans = Lang.getTrans(nls);

			// Save options
			this.settings = (Object.keys(options).length === 0) ? Config.get('inventory::defaults') : options;

			this.registerEvents();
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
	            	self.$el.html( tpl(data) );
	            });
	        }
	    }),

	    /* Register jQuery event handlers */
	    registerEvents: function()
	    {
	    	this.registerControls();
	    },

	    /* Register controls interfaces (HID) */
	    registerControls: function()
	    {
	    	// Toggle items
	    	keymage('items', '1', this.equip(1));
	    	keymage('items', '2', this.equip(2));
	    	keymage('items', '3', this.equip(3));
	    	keymage('items', '4', this.equip(4));
	    	keymage('items', '5', this.equip(5));
	    	keymage('items', '6', this.equip(6));
	    	keymage('items', '7', this.equip(7));
	    	keymage('items', '8', this.equip(8));
	    	keymage('items', '9', this.equip(9));
	    	keymage('items', '0', this.equip(10));
	    	keymage.pushScope('items');
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
    		
    		/*self.shoot = function() {

    	        self.ammo.pop();
    	    };*/
    	    
    	    self.give = function() {
    	    	console.log("Giving weapon to person");
    	    };
		},
		
		/* Equip an item into the interaction slot of the player inventory */
		equip: function(item_number)
		{	
			// Display notification
			toastr.options = Config.get('inventory::toastr');
			toastr.warning("Now equipped with a "+item_number, "Picked up an item");
			
			// Switch as upper most inventory item (and make active)
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
	};

	return inventory;
}));