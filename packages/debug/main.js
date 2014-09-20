/**
 * @file Debug PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for debugging all aspects of the game (only useful to developers)
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, require('jquery'), require('backbone'));
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"stache!./templates/partial", "i18n!./nls/strings", "Bootstrap", "Backbone"
		], function (tpl, nls, jQuery, Backbone) {
      		return (root.returnExportsGlobal = factory(tpl, nls, jQuery, Backbone));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (tpl, nls, jQuery, Backbone)
	{
	/** 
     * Debug package
     * @namespace debug
     */
	debug =
	{
		settings: null, // Package options
		trans: {}, // Translations
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			// Register package
			Package.register('debug');

			// Load translations
			this.trans = Lang.getTrans(nls);

			// Save options
			this.settings = (Object.keys(options).length === 0) ? Config.get('debug::defaults') : options;
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
	        url: function() { return Config.get('debug::routes.' + debug.settings.source); },
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        initialize: function()
	        {    	
	            this.collection = new debug.collection({model: Backbone.Model.extend()});
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
	            		count: self.collection.toJSON().length,
	            		trans: debug.trans
	            	};
	    				
	            	// Render content
	            	self.$el.html( tpl(data) );
	            });
	        }
	    }),

	    /* Save X and Y coordinates of mouse position */
		saveCoords: function()
		{	
			// Instance shown in debug toolbar
			var x = jQuery("#mouse_x_coords").html();
			var y = jQuery("#mouse_y_coords").html();
			jQuery("#saved_mouse_coords").html(x+","+y);
			console.log("Saved X,Y coordinates "+x+","+y+" (will be overwritten when you save again)");
		},

		mouseDebugger: function(event)
		{	
			// Variables for tracking mouse
    		var mouseX, mouseY;
    		var canvas = jQuery('#stage').get(0);
   			
   			// Realtime mouse coords debugging
   			canvas.addEventListener('mousemove', function (mouse) {
    			jQuery("#mouse_x_coords").html(mouse.pageX - canvas.offsetLeft);
				jQuery("#mouse_y_coords").html(mouse.pageY - canvas.offsetTop);
    		}, 0);
		}
	};

	return debug;
}));