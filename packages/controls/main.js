/**
 * @file Controls PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, require('jquery'), require('backbone'), null, null, null);
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"stache!./templates/modal", "i18n!./nls/strings",
			"Bootstrap", "Backbone",
			"./modules/keyboard/main", "./modules/mouse/main", "./modules/joypad/main"
		], function (tpl, nls, jQuery, Backbone, keyboard, mouse, joypad)
		{
      		return (root.returnExportsGlobal = factory(tpl, nls, jQuery, Backbone, keyboard, mouse, joypad));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (tpl, nls, jQuery, Backbone, keyboard, mouse, joypad)
	{
	/** 
     * Controls package
     * @namespace controls
     */
	controls =
	{
		settings: null, // Package options
		trans: {}, // Translations
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{
			// Merge internal variables with inherited data
			Package.register('controls');
			this.trans = Lang.getTrans(nls);
			this.settings = (Object.keys(options).length === 0) ? Config.get('controls::defaults') : options;
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
	        url: function() { return Config.get('controls::routes.' + controls.settings.source); },
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        initialize: function()
	        {    	
	            this.collection = new controls.collection({model: Backbone.Model.extend()});
	            this.render();
	        },
	        render: function()
	        {
	            // Load package stored data
	        	var self = this;
	            this.collection.fetch().done( function() {
	            		
	            	// Compose data for view
	            	var data = Config.instance('controls::defaults');
	            	data.items = self.collection.toJSON();
	            	data.trans = controls.trans;
	    				
	            	// Render content
	            	self.$el.html( tpl(data) );
	            	jQuery('button[data-toggle="popover"]').popover();
	            	controls.bindHumanInterfaceDevices();
	            });
	        }
	    }),
		
		/* Bind all Human interface Devices (physical controllers) to the game */
		bindHumanInterfaceDevices: function() 
		{	
			// PC gaming hardware
			//keyboard.bindControls();
			mouse.bindControls();

			// TV gaming hardware
			joypad.registerControllers();

			// Mobile gaming hardware
		}
	};

	return controls;
}));