/**
 * @file Standard PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package which DESCRIPTION GOES HERE
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"stache!./templates/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "Bootstrap", "Backbone"
], function(template, nls, Config, Lang, Package, jQuery, Backbone) {
	/** 
     * Standard package
     * @namespace standard
     */
	return highscores = {
			
		// Translations
		trans: {},

		// Package options
		settings: null,
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			// Register package
			Package.register('standard');

			// Load translations
			this.trans = Lang.getTrans(nls);

			// Save options
			this.settings = (Object.keys(options).length === 0) ? Config.get('standard::defaults') : options;
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
	        url: function() { return Config.get('highscores::routes.' + highscores.settings.source); },
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        initialize: function()
	        {    	
	            this.collection = new standard.collection({model: Backbone.Model.extend()});
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
	            		trans: standard.trans
	            	};
	    				
	            	// Render content
	            	self.$el.html( template(data) );
	            });
	        }
	    })
	}
});