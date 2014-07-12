/**
 * @file About PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for providing information about a game, and links to external services
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, null, require('backbone'));
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"stache!./templates/modal", "i18n!./nls/strings", "Bootstrap", "Backbone"
		], function (template, nls, jQuery, Backbone) {
      		return (root.returnExportsGlobal = factory(template, nls, jQuery, Backbone));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (template, nls, jQuery, Backbone)
	{
	/** 
     * About package
     * @namespace about
     */
	about =
	{
		settings: null, // Package options
		trans: {}, // Translations
			
		/**
		 * Initial load-up procedure if first time package is loaded
		 */
	 	init: function()
	 	{	
	 		// Register package
	 		Package.register('about');
	 		
	 		// Load translations
			this.trans = Lang.getTrans(nls);
		},
		
		/**
		 * Autoloading hook
		 * @param {object} element - HTML element the package is tied to in the DOM.
		 * @param {object} options - JSON string of options passed from the data-options attribute.
		 */
        load: function(element, options)
        {	
        	// Load the package onto current web-page
        	this.init(options);
			if (jQuery(element).html().length === 0)
			{
				new this.view({el: element});
			}
			this.registerEvents();
			return true;
        },
        
        /**
         * Data collection
         * @constructor
         */
	    collection: Backbone.Collection.extend({
	        url: 'packages/about/data.json',
	        parse: function(data) { return data.items; }
	    }),
	        
	    /**
	     * View composer
	     * @constructor
	     */
	    view: Backbone.View.extend({
	        initialize: function()
	        {

	            this.collection = new about.collection({model: Backbone.Model.extend()});

	            // Run rendering process with attached after hook
	            this.on('render', this.afterRender());
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
	            		trans: about.trans,
	            		version: Config.get('game.version'),
	    	 			game_name: Config.get('game.name')
	            	};
	    				
	            	// Render content
	            	self.$el.html( template(data) );
	            });
	        },
	        afterRender: function() { about.registerEvents(); }
	    }),

	    /* Register third-party library event handlers */
	    registerEvents: function()
	    {

	    }
	};

	return about;
}));