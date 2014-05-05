/* 
* @file Site CONTROLLER
* @author Wade Penistone (Truemedia)
* @overview Base controller containing actions relevant to any URL possible within this SPA (Single page application)
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([
	'text!templates/home.html',
	'text!templates/game.html',
	'text!templates/regions/header.html',
	'text!templates/regions/footer.html',
	'text!templates/regions/content/selection.html',
	'text!templates/regions/content/stage.html',
	'Marionette', 'jQuery'
], function(homePage, gamePage, headerTemplate, footerTemplate, contentSelectionTemplate, contentStageTemplate, Marionette, jQuery) {
	return Site_Controller = {

		/* Default controller action */
		index: function() {

			console.log("Home page");

			/* Define core layout and contained regions */
			var layout = Backbone.Marionette.Layout.extend({
				el: "#layout",
				template: _.template(homePage),
				regions: {
					header: "header",
					//sidebarLeft: "#sidebar_left",
					content: "#content",
					//sidebarRight: "#sidebar_right",
					footer: "footer"
				},
			});

			// Setup layout
			page = new layout();
			page.render();

			// Load region templates
			jQuery(page.header.el).html(headerTemplate);
			jQuery(page.content.el).html(contentSelectionTemplate);
			jQuery(page.footer.el).html(footerTemplate);
		},

		/* Page which game is played on */
		game: function() {

			console.log("Game page");

			/* Define core layout and contained regions */
			var layout = Backbone.Marionette.Layout.extend({
				el: "#layout",
				template: _.template(gamePage),
				regions: {
					header: "header",
					//sidebarLeft: "#sidebar_left",
					content: "#content",
					//sidebarRight: "#sidebar_right",
					footer: "footer"
				},
			});

			// Setup layout
			page = new layout();
			page.render();

			// Load region templates
			jQuery(page.header.el).html(headerTemplate);
			jQuery(page.content.el).html(contentStageTemplate);
			jQuery(page.footer.el).html(footerTemplate);

			// Append profile package
			console.log("Launching game");
		}
	}
});