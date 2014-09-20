/**
 * @file Content Pack PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for managing/customizing content (audio, images, videos) in the game
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
			"stache!./templates/modal", "i18n!./nls/strings", "Bootstrap", "Backbone"
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
     * Content Pack package
     * @namespace contentpack
     */
	contentpack =
	{
		settings: null, // Package options
		trans: {}, // Translations
		
		/* Initial load-up procedure if first time package is loaded */
		init: function()
		{	
			// Register package
			Package.register('contentpack');
		 		
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
	        url: 'packages/contentpack/data.json',
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        initialize: function()
	        {   	
	            this.collection = new contentpack.collection({model: Backbone.Model.extend()});
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
	            		trans: contentpack.trans,
	            		content_packs: Config.get('resources.content_packs')
	            	};
	    				
	            	// Render content
	            	self.$el.html( tpl(data) );
	            });
	        }
	    })
	};

	return contentpack;	
}));