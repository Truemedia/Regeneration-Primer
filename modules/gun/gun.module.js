/* 
* @file Gun MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling Gun objects in DOM
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./KO", "./Config", "./Gun.GOD"], function(jQuery, ko, Config, gun_object) {
	return Gun = {

		binding_element_id: "inventory_partial",
		
		/* Create a new gun object instance */
		spawn: function() {
			
			// Get game object definition and add entity in the entity pool
			me.game.add(gun_object, z);
		},

		init: function(){
			// TODO: Ammo count viewmodel (in progress)
			/*jQuery('.inventory_item').each(function(itemIteration, item) {
					ko.applyBindings(new Gun.ViewModel(), jQuery('.inventory_item:eq('+itemIteration+')'));
			});*/
			// Setup test view model
			ko.applyBindings(new Gun.TestViewModel("Player", "Name"), document.getElementById(Gun.binding_element_id)); // This makes Knockout get to work
		},

		// Here's my data model
		TestViewModel: function(first, last){
			this.firstName = ko.observable(first);
    		this.lastName = ko.observable(last);
 
    		this.fullName = ko.computed(function() {
        	// Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        		return this.firstName() + " " + this.lastName();
    		}, this);
    	},
		
		/* Create a new gun object instance and bind to player object */
		wield: function(gun_sprite, single_or_dual, dimensions){
			if(single_or_dual == "dual"){
				var gun_count = 2;
			}
			else{
				var gun_count = 1;
			}

			var objectLayer = me.game.currentLevel.getLayerByName('Rightwalls');
			var z = objectLayer.z;
			alert("Z-index = "+z);
			
			// Add an instance of the object to the canvas
			Gun.spawn();
			
			// Default dimension offsets
			/*var weapon_layer = 6;
			
			for(var gun_counter = 1; gun_counter <= gun_count; gun_counter++){
				if(gun_counter == 2){
					var gun_x = (dimensions[0]*2)+10;
				}
				else{
					var gun_x = dimensions[0];
				}
				Crafty.e("2D, DOM, wall_left, solid, "+gun_sprite+", LeftControls")
				// Draw the sprite
				.attr({x: gun_x, y: 98, z: weapon_layer})
				// Add controls to this object
				.leftControls(3);
			}*/
		},
		
		/* Get gun image filename (with full directory path) based on gun name */
		getImage: function(gun_name, file_ext) {
			
			if (file_ext === undefined) {
				file_ext = ".png"
			}
			
			// Main image directory
			var image_dir = Config.get('resources.directories.multimedia.root') + Config.get('content_pack.guns') + "/images/";
			
			// Gun images directory 
			var guns_sprites_dir = image_dir + "items/Guns/";
			
			// Build filename based on gun name and provided file extension
			var gun_image = guns_sprites_dir + gun_name + file_ext;
			
			return gun_image;
		}
	}
});