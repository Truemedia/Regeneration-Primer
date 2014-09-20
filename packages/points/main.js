/**
 * @file Points PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used as CRUDL API of various point mechanisms relevant to players
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, null, require('jquery'), require('backbone'), require('knockout'), null, null, null, null, null, null, null, null, null);
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			'i18n!./nls/strings', 'stache!./templates/partial', './vm',
			'jQuery', 'Backbone', 'KO',
			'./modules/attack/main', './modules/currency/main', './modules/defense/main', './modules/experience/main',
			'./modules/health/main', './modules/life/main', './modules/reputation/main', './modules/score/main', './modules/universal/main'
		], function (nls, tpl, vm, jQuery, Backbone, ko, Attack, Currency, Defense, Experience, Health, Life, Reputation, Score, Universal) {
      		return (root.returnExportsGlobal = factory(nls, tpl, vm, jQuery, Backbone, ko, Attack, Currency, Defense, Experience, Health, Life, Reputation, Score, Universal));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (nls, tpl, vm, jQuery, Backbone, ko, Attack, Currency, Defense, Experience, Health, Life, Reputation, Score, Universal)
	{
	/** 
     * Points package
     * @namespace points
     */
	points =
	{	
		// Partial loading location	
		partial_block_element: 'points_partial',
			
		// defaults
		binding_element_class: "score_container",
		
		settings: null, // Package options
		trans: {}, // Translations
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			// Register package
			Package.register('points');

			// Load translations
			this.trans = Lang.getTrans(nls);

			// Save options
			this.settings = (Object.keys(options).length === 0) ? Config.get('points::defaults') : options;
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
	        url: function() { return Config.get('points::routes.' + points.settings.source); },
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({	
	        initialize: function()
	        {    	
	            this.collection = new points.collection({model: Backbone.Model.extend()});
	            this.render();
	        },
	        render: function()
	        {
	            // Load package stored data
	        	var self = this;
	            this.collection.fetch().done( function() {
	            		
	            	// Compose data for view
	            	var data = {
	            		content_pack: Config.get('resources.directories.multimedia.root'),
	            		items: self.collection.toJSON(),
	            		trans: points.trans,
	            		modules:
	            		[
	            			Config.get('points::attack'),
	            			Config.get('points::currency'),
	            			Config.get('points::defense'),
	            			Config.get('points::experience'),
							Config.get('points::health'),
							Config.get('points::life'),
							Config.get('points::reputation'),
	            			Config.get('points::score'),
	            			Config.get('points::universal')
	            		]
	            	};
	    				
	            	// Render content
	            	self.$el.html( tpl(data) );
	            	points.registerEvents();
	            });
	        }
	    }),

	    /* jQuery event handlers */
	    registerEvents: function()
	    {
	    	this.registerBindings(); // Apply all KO bindings
 					
			// Start up modules
 			Health.init();
 					
 			// Hide points debugging (TODO: Make hidden via KO)
 			jQuery('.debug_controls').toggle();
	    },

		/* Register ViewModel with DOM elements */
		registerBindings: function()
		{
			// Iterate multiple binding instances with jQuery
			jQuery("."+points.binding_element_class).each(function(index) {
				ko.applyBindings(new vm(index), this);
			});
		}

		/* Visually differentiate the player of this game instance from other players
		highlightMainPlayer: function(character){

			// Move current character to top of list (shown as highlighted)
			jQuery("#points_partial .score_container:first").before(
				jQuery('#points_partial > .score_container > input.player_object[value='+character+']').parent()
			);
			
			// Label main player as (You) and rest of players as (Bot)
			jQuery("#points_partial .score_container").each(function(charIteration){
				var charName = jQuery(this).children("input.player_object").val();
				var charNumDOM = jQuery(this).children("dl.player_info").children("dt.player_overview").children("span.player_number");

				if(charName == character){ // Populate the player
					jQuery(charNumDOM).append(" (You)");
				}
				else{ // Populate a bot
					jQuery(charNumDOM).append(" (Bot)");
				}
			});
		},

		/* KnockOut function call via Crafty
		incrementScore: function(player_id) {

			// Execute ViewModel function for this element
			var firstPlayerScore = jQuery("."+points.binding_element_class+":eq("+player_id+")").get(0);
			var vm = ko.dataFor(firstPlayerScore);
    		vm.score.incrementScore();
		},

		/* Execute main score function
		incrementMyScore: function() {

			points.incrementScore(0);
		},

		/* Execute main score function/KnockOut function call via Crafty 
		incrementAllScores: function() {

			// Execute ViewModel function for all elements
			jQuery("#points_partial .score_container").each(function(charIteration){
				points.incrementScore(charIteration);
			});
		}*/
	};

	return points;
}));