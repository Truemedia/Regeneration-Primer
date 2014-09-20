/**
 * @file Highscores PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package which provides an ordered overview of scores from past gaming sessions
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, null, require('jquery'), require('backbone'), require('knockout'));
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"i18n!./nls/strings", "stache!./templates/modal", "./vm", "Bootstrap", "Backbone", "KO"
		], function (nls, tpl, vm, jQuery, Backbone, ko) {
      		return (root.returnExportsGlobal = factory(nls, tpl, vm, jQuery, Backbone, ko));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (nls, tpl, vm, jQuery, Backbone, ko)
	{
  	/** 
     * Highscores package
     * @namespace highscores
     */
	highscores =
	{
		settings: null, // Package options
		trans: {}, // Translations
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			// Register package
			Package.register('highscores');

			// Load translations
			this.trans = Lang.getTrans(nls);

			// Save options
			this.settings = (Object.keys(options).length === 0) ? Config.get('highscores::defaults') : options;
		},
			
		/**
		 * Autoloading hook
		 * @param {object} element - HTML element the package is tied to in the DOM.
		 * @param {object} options - JSON string of options passed from the data-options attribute.
		 */
        load: function(element, options)
        {	
        	// Initialization code
        	this.init(options);

        	// View pre-processing
			if (jQuery(element).html().length === 0) { new this.view({el: element}); }

			// View post-processing
			else { this.view.post_render(element); }
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
	            this.collection = new highscores.collection({model: Backbone.Model.extend()});
	            this.render();
	        },
	        render: function()
	        {
	            // Load package stored data
	        	var self = this;
	            this.collection.fetch().done( function()
	            {		
	            	// Compose data for view
	            	var data = {
	            		items: self.collection.toJSON(),
	            		trans: highscores.trans
	            	};
	    				
	            	// Render content
	            	self.$el.html( tpl(data) )
	            		.promise()
	            		.done( self.post_render(self.$el) );
	            });
	        },
	        post_render: function(element)
	        {
	        	ko.applyBindings(new vm(), jQuery(element).get(0));
	        }
	    })
	};

	return highscores;
}));