/* 
* @file Site CONTROLLER
* @author Wade Penistone (Truemedia)
* @overview Base controller containing actions relevant to any URL possible within this SPA (Single page application)
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['Marionette', 'jQuery'], function(Marionette, jQuery) {
	return Site_Controller = {

		/* Default controller action */
		index: function() {

			console.log("Index page");
		},

		/* Page which game is played on */
		game: function() {

			console.log("Game page");
			// Append profile package
			/* console.log("Launching game");
			var inventory_html = '<div data-package="profile"></div>';
			jQuery('#layout').append(inventory_html); */
		}
	}
});