/* 
* @file Application file/script
* @author Wade Penistone (Truemedia)
* @overview Base script containing application instance and methods for controlling all the low levels functions of the application (file handling, server side integration)
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	'text!views/layout.html', 'controllers/site', 'Marionette', 'jQuery', 'fuelux'
], function(layoutTemplate, Site_Controller, Marionette, jQuery) {
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

		/* Application startup method */
		start: function() {

			// Setup layout
			var layout = new this.layout();
			layout.render();

			// Setup routing and general MVC
			var MVC = new Backbone.Marionette.Application();
			MVC.on('initialize:after', function() {

		        new Router({ controller: Site_Controller });
		        Backbone.history.start();
		    });
		    MVC.start();

		    // Run autoloader for packages
			this.autoloader();
		},

		/* Regenerate the applications packages/data */
		regenerate: function() {

			requirejs(['conditioner'], function(conditioner) {
	
				// Rerun autoloader
				conditioner.parse(document);
			});
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