/**
 * @file Stage PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for handling 3D/2D game context virtual world
 * @copyright Wade Penistone 2013
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"stache!./templates/partial", "i18n!./nls/strings", "Config", "Lang", "Game", "Package", "Bootstrap", "Backbone"
], function(template, nls, Config, Lang, Game, Package, jQuery, Backbone) {
	/** 
     * Stage package
     * @namespace stage
     */
	return stage = {
		
		// Translations
		trans: {},
			
		/* Initial load-up procedure if first time package is loaded */
	 	init: function()
	 	{	
	 		// Register package
	 		Package.register('stage');
	 		
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
	        url: 'packages/stage/data.json',
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        initialize: function()
	        {    	
	            this.collection = new stage.collection({model: Backbone.Model.extend()});
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
	            		trans: stage.trans
	            	}
	    				
	            	// Render content
	            	self.$el.html( template(data) );

	            	// Start game instance
					Game.launch();
	            });
	        }
	    })
	}
});