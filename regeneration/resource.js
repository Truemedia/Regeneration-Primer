/* 
* @file Resource Class
* @author Wade Penistone (Truemedia)
* @overview Class used for loading resources utilized by the game instance
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
// Logic for the most important game events
define(["jQuery"], function(jQuery) {
	return Resource = {

		// Compile all resources into JSON format for loading */
		compile: function() {

			// Build maps and map resources
			var compiled_resources = this.compileMaps();
			
			// Get all character sprites
			compiled_resources = compiled_resources.concat( this.compilePlayers() );

			// Gun sprite
			/*resources.push({
				name: "gun_sprite",
				type: "image",
				src: require('Gun.MOD').getImage("AR-15")
			});*/
			
			// Game font
			// TODO: Convert font to PNG
			/*resources.push({
				name: "32x32_font",
				type: "image",
				src: "multimedia/default-contentpack/fonts/visitor/32x32_font.ttf"
			}); */
			
			return compiled_resources;
		},

		/* Compile all map resources */
		compileMaps: function() {

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
		},

		/* Compile all player resources */
		compilePlayers: function() {

			// Filename prefix/suffix
			var f_pfx = Config.get('resources.sprites.sprite_filename_prefix');
			var f_sfx = Config.get('resources.sprites.sprite_filename_suffix');

			// Image extension
			var ext = f_sfx;

			return [
			    // Coward
				{
					name: "coward",
					type: "image",
					src: Config.get('resources.directories.sprites.characters') + f_pfx + "Coward" + ext
				},
				// Criminal
				{
					name: "criminal",
					type: "image",
					src: Config.get('resources.directories.sprites.characters') + f_pfx + "Criminal" + ext
				},
				// Mother
				{
					name: "mother",
					type: "image",
					src: Config.get('resources.directories.sprites.characters') + f_pfx + "Mother" + ext
				},
				// Next Door Neighbor
				{
					name: "nextdoorneighbor",
					type: "image",
					src: Config.get('resources.directories.sprites.characters') + f_pfx + "NextDoorNeighbor" + ext
				},
				// Psychotic Worker
				{
					name: "psychoticworker",
					type: "image",
					src: Config.get('resources.directories.sprites.characters') + f_pfx + "PsychoticWorker" + ext
				},
				// Store Owner
				{
					name: "storeowner",
					type: "image",
					src: Config.get('resources.directories.sprites.characters') + f_pfx + "StoreOwner" + ext
				},
				// Store Owner Wife
				{
					name: "storeownerwife",
					type: "image",
					src: Config.get('resources.directories.sprites.characters') + f_pfx + "StoreOwnerWife" + ext
				},
				// Woman Helicopter Pilot
				{
					name: "womanhelicopterpilot",
					type: "image",
					src: Config.get('resources.directories.sprites.characters') + f_pfx + "WomanHelicopterPilot" + ext
				}
			];
		}
	}
});