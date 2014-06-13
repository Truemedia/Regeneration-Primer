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
	'fabric',
	'text!templates/home.html',
	'text!templates/game.html',
	'text!templates/three.html',
	'text!templates/regions/header.html',
	'text!templates/regions/footer.html',
	'text!templates/regions/content/selection.html',
	'text!templates/regions/content/stage.html',
	'text!templates/regions/content/realm.html',
	'text!templates/regions/content/maker.html',
	'Marionette', 'Bootstrap', 'fabric'
], function(fabric, homePage, gamePage, threePage, headerTemplate, footerTemplate, contentSelectionTemplate, contentStageTemplate, realmTemplate, makerTemplate, Marionette, jQuery) {
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
		},

		/* 3D test page */
		three: function() {

			console.log("3D page");

			/* Define core layout and contained regions */
			var layout = Backbone.Marionette.Layout.extend({
				el: "#layout",
				template: _.template(threePage),
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
			jQuery(page.content.el).html(realmTemplate);
			jQuery(page.footer.el).html(footerTemplate);
		},

		/* Map maker page */
		create: function() {

			console.log("Map maker page");

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
			jQuery(page.content.el).html(makerTemplate);
			jQuery(page.footer.el).html(footerTemplate);

			jQuery(document).ready( function() {
				var canvas = new fabric.Canvas('canvas');

  var rect = new fabric.Rect({
    left: 150,
    top: 200,
    originX: 'left',
    originY: 'top',
    width: 150,
    height: 120,
    angle: -10,
    fill: 'rgba(255,0,0,0.5)',
    transparentCorners: false
  });

  canvas.add(rect).setActiveObject(rect);
			});
		},
	}
});