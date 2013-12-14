/* 
* @file Controls PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	"stache!./views/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "Bootstrap", "Backbone" //"./modules/keyboard/main", "./modules/mouse/main"
], function(template, nls, Config, Lang, Package, jQuery, Backbone) {
	return controls = {
		
		// Translations
		trans: {},
				
		/* Initial load-up procedure if first time package is loaded */
		init: function() {
			
			// Register package
			Package.register('controls');
	 		
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
	        url: 'packages/controls/data.json',
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        	
	        initialize: function() {
	            	
	            this.collection = new controls.collection();
	            this.render();
	        },

	        render: function() {

	            // Load package stored data
	        	var self = this;
	            this.collection.fetch().done( function() {
	            		
	            	// Compose data for view
	            	var data = Config.instance('controls::default');
	            	data.items = self.collection.toJSON();
	            	data.trans = controls.trans;
	    				
	            	// Render content
	            	self.$el.html( template(data) );
	            });
	        }
	    }),
		
		/* Bind all Human interface Devices (physical controllers) to the game */
		bindHumanInterfaceDevices: function() {
			
			// PC gaming hardware
			//keyboard.bindControls();
			//mouse.bindControls();
		}
	}
});