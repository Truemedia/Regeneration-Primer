/**
 * @file Game Info PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for providing external links and API's for game information tied to external services
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, require('jquery'), require('backbone'), null);
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"stache!./templates/modal", "i18n!./nls/strings", "Bootstrap", "Backbone", './modules/feed/main'
		], function (tpl, nls, jQuery, Backbone, feed) {
      		return (root.returnExportsGlobal = factory(tpl, nls, jQuery, Backbone, feed));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (tpl, nls, jQuery, Backbone, feed)
	{
	/** 
     * Game Info package
     * @namespace gameinfo
     */
	gameinfo =
	{
		settings: null, // Package options
		trans: {}, // Translations
			
		/* Initial load-up procedure if first time package is loaded */
	 	init: function()
	 	{	
	 		// Register package
			Package.register('gameinfo');
	 		
	 		// Load translations
			this.trans = Lang.getTrans(nls);
		},
		
		/* Autoloading hook */
        load: function(element, options)
        {  	
        	// Load the package onto current web-page
	    	this.init();
			new this.view({el: element});
        },
        
        /* Data collection */
	    collection: Backbone.Collection.extend({
	        url: 'packages/gameinfo/data.json',
	        parse: function(data) { return data; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        initialize: function()
	        {    	
	            this.collection = new gameinfo.collection({model: Backbone.Model.extend()});
	            this.render();
	        },
	        render: function()
	        {
	            // Load package stored data
	        	var self = this;
	            this.collection.fetch().done( function() {
	            		
	            	// Compose data for view
	            	var game_information = self.collection.toJSON();
	            	var data = {
	            		items: game_information[0],
	            		trans: gameinfo.trans
	            	};
	    				
	            	// Render content
	            	self.$el.html( tpl(data) );

	            	// Run modules
	       			feed.init();
	            });
	        }
	    })
	};

	return gameinfo;
}));