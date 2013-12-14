/* 
* @file About PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for providing information about a game, and links to external services
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	"stache!./views/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "Bootstrap", "Backbone"
], function(template, nls, Config, Lang, Package, jQuery, Backbone) {
	return about = {
		
		// Translations
		trans: {},
			
		/* Initial load-up procedure if first time package is loaded */
	 	init: function() {
	 		
	 		// Register package
	 		Package.register('about');
	 		
	 		// Load translations
			this.trans = Lang.getTrans(nls);
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Load the package onto current web-page
        	this.init();
			new this.view({el: element});
        },

        /* Autoloader terminate method */
        unload: function() {

        },
        
        /* Data collection */
	    collection: Backbone.Collection.extend({

	        model: Backbone.Model.extend(),
	        url: 'packages/about/data.json',
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        	
	        initialize: function() {
	            	
	            this.collection = new about.collection();
	            this.render();
	        },

	        render: function() {

	            // Load package stored data
	        	var self = this;
	            this.collection.fetch().done( function() {
	            		
	            	// Compose data for view
	            	var data = {
	            		items: self.collection.toJSON(),
	            		trans: about.trans,
	            		version: Config.get('game.version'),
	    	 			game_name: Config.get('game.name')
	            	}
	    				
	            	// Render content
	            	self.$el.html( template(data) );
	            });
	        }
	    })
	}
});