/* 
* @file Application file/script
* @author Wade Penistone (Truemedia)
* @overview Base script containing application instance and methods for controlling all the low levels functions of the application (file handling, server side integration)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	'text!views/layout.html', 'Marionette', 'jQuery', 'fuelux'
], function(layoutTemplate, Marionette, jQuery) {
	return App = {
	
		/* Define core layout and contained regions */
		layout: Backbone.Marionette.Layout.extend({

			/* Render layout and regions */
			el: "#layout",
			template: _.template(layoutTemplate),
			 
			regions: {
				header: "#header",
				//sidebarLeft: "#sidebar_left",
				//sidebarRight: "#sidebar_right",
				footer: "#footer"
			}
		}),

		/* Function to register events which tie together multiple packages to start the game */
		hooks: function() {

			jQuery('a[href="#step3"]').on('click', function(e) {
				App.regenerate();
			});
		},

		/* Application startup method */
		start: function() {

			// Setup layout
			var layout = new this.layout();
			layout.render();

			this.autoloader();
			this.hooks();
		},

		/* Regenerate the applications packages/data */
		regenerate: function() {

			// TODO: Load queued regions

			// Run the autoloader
			App.autoloader();
		},

		/* Autoloading procedure */
		autoloader: function() {
			
			requirejs(['conditioner'], function(conditioner) {

				// Reset the base URL to package directory
				require.config({
					baseUrl: "packages/"
				});
	
				// Run the package autoloader
				conditioner.init();
			});
		}
	};
});