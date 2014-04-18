/**
 * @file Maps PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for loading maps (certain levels of game modes)
 * @copyright Wade Penistone 2013
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"stache!./views/step", "i18n!./nls/strings", "Config", "Lang", "Package", "Session", "Crafty", "jQuery", "Leaflet"
], function(template, nls, Config, Lang, Package, Session, Crafty, jQuery, L) {
	/** 
     * Maps package
     * @namespace maps
     */
	return maps = {
		
		layers: 1,
	
		// Translations
		trans: {},
			
		/* Load this package */
	 	init: function()
	 	{	
	 		// Register package
			Package.register('maps');
	 		
	 		// Load translations
			maps.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			maps.loadDOM();
		},
		
		/* Autoloading hook */
        load: function(element, options)
        {
        	this.init();
        },

		/* Append the HTML for this package to the DOM */
		loadDOM: function()
		{
			// Load up list of maps to choose from
			jQuery.getJSON("packages/maps/data.json", function(data){
				
				// Append language strings to JSON data source
				data.trans = maps.trans;
			
				// Load view
				jQuery("[data-package='maps']").html( template(data) );

				// Load map views
				jQuery.getJSON('maps/scraproom/geo.json', function(geojsonFeature) {
					jQuery.each(data.maps, function(index, map_info) {

						var map = L.map(map_info.identifier);

						L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
							attribution: '2 hours after outbreak'
						}).addTo(map);
						map.setView([53.71082, -1.33450], 13);
						L.geoJson(geojsonFeature).addTo(map);

						// Disable map interaction
						map.dragging.disable();
						map.touchZoom.disable();
						map.doubleClickZoom.disable();
						map.scrollWheelZoom.disable();
						map.boxZoom.disable();
						map.keyboard.disable();
					});
				});
				
				// Register events
				maps.registerEvents();
			});
		},
		
		/* Register jQuery event handlers */
		registerEvents: function()
		{	
			// Mouse over animation for map selection
			jQuery("[data-package='maps']").on("mouseover", ".map_select", function(event) {

				var enabled = !jQuery(this).hasClass("disabled");
				if (enabled) {
					jQuery(this).addClass("btn-success");
				}
				else {
					jQuery(this).children("span").html("Not available");
				}
			});

			// Mouse leave animation for map selection
			jQuery("[data-package='maps']").on("mouseleave", ".map_select", function(event) {

				var enabled = !jQuery(this).hasClass("disabled");
				if (enabled) {
					jQuery(this).removeClass("btn-success");
				}
				else {
					jQuery(this).children("span").html("Play map");
				}
			});

			// Map selected
			jQuery("[data-package='maps']").on("click", ".map_select", function(event) {

				var map_choosen = jQuery(this).val();
				Session.put('map', map_choosen);
				maps.deactivate();

				// Trigger game route
				document.location.hash = "play";
				location.reload();
			});
		},
		
		// Deactivate package
		deactivate: function()
		{
			jQuery("[data-package='maps']").remove();
		},
		
		/* Format maps into array suitable for melonJS */
		compileMaps: function(maps)
		{	
			var maps = [];
			
			// Set ASYNC AJAX to false
			jQuery.ajaxSetup({
				async: false
			});
			
			// Load up list of maps to choose from
			jQuery.getJSON("packages/maps/data.json", function(data){
				
				jQuery.each(data.maps, function(index, map) {
					if (jQuery.trim(map.disabled) !== "disabled") {
						
						// Set directory for map resources
						var map_dir = map.identifier;
						
						// Images
						var map_tileset = {
							name: "tileset",
							type: "image",
							src: "maps/" + map_dir + "/tileset.png"
						};
		               	// TMX map
						var map_data = {
							name: map_dir,
							type: "tmx",
							src: "maps/" + map_dir + "/map.tmx"
						};
						
						maps.push(map_tileset);
						maps.push(map_data);
					}
				});
			});
			
			// Set ASYNC AJAX back to true
			jQuery.ajaxSetup({
				async: true
			});
			
			return maps;
		}
	}
});