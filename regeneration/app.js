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
	'controllers/site', 'Marionette', 'jQuery', 'fuelux'
], function(Site_Controller, Marionette, jQuery) {
	return App = {

		/* Intialize SPA (Single page applicatio) base code */
		spa: function(layout) {

			// Setup routing and general MVC
			var MVC = new Backbone.Marionette.Application();
			MVC.on('initialize:after', function() {

		        new Router({ controller: Site_Controller });
		        Backbone.history.start();
		    });
		    MVC.start();

		    // Reload on backbone route
		    jQuery(window).bind('hashchange', function() {
		    	location.reload();
		    });
		},

		/* Application startup method */
		start: function() {

			// Run SPA if no server environment available
			var is_spa = (Config.get('server.spa') === "true") ? true : false;
			if (is_spa) { this.spa(); }

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