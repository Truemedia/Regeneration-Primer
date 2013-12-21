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
		})
	};
});