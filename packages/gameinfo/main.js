/* 
* @file Game Info PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for providing external links and API's for game information tied to external services
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	"stache!./views/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "Bootstrap", './modules/feed/main'
], function(template, nls, Config, Lang, Package, jQuery, feed) {
	return gameinfo = {
			
		// Translations
		trans: {},
			
		/* Initial load-up procedure if first time package is loaded */
	 	init: function() {
	 		
	 		// Register package
			Package.register('gameinfo');
	 		
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
	        url: 'packages/gameinfo/data.json',
	        parse: function(data) { return data; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        	
	        initialize: function() {
	            	
	            this.collection = new gameinfo.collection();
	            this.render();
	        },

	        render: function() {

	            // Load package stored data
	        	var self = this;
	            this.collection.fetch().done( function() {
	            		
	            	// Compose data for view
	            	var game_information = self.collection.toJSON()
	            	var data = {
	            		items: game_information[0],
	            		trans: gameinfo.trans
	            	};
	    				
	            	// Render content
	            	self.$el.html( template(data) );

	            	// Run modules
	       			feed.init();
	            });
	        }
	    })
	}
});