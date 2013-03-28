/* 
* @file Sprites SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for loading Crafty sprite resources
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		setup: function(){
			/* Sprite Map for items */
			// TODO: Extract in-use content pack from config
			var contentpack = "default";
			
			Crafty.sprite(256, "multimedia/"+contentpack+"-contentpack/images/items/Guns/AR-15.png", { // AR-15
   				gun1: [0, 0]
			});
			Crafty.sprite(256, "multimedia/"+contentpack+"-contentpack/images/items/Guns/Glock.png", { // Glock
   				gun2: [0, 0]
			});
			Crafty.sprite(256, "multimedia/"+contentpack+"-contentpack/images/items/Storage/WoodenCrate.png", { // General supplies box
   				storageBox: [0, 0]
			});

			
			/* Sprite Map for characters */
			/* Coward */
			Crafty.sprite(256, characters_image_directory+default_sprite_filename_prefix+"Coward"+default_sprite_filename_suffix, {
   				coward: [0, 0]
			});
	
			/* Criminal */
			Crafty.sprite(256, characters_image_directory+default_sprite_filename_prefix+"Criminal"+default_sprite_filename_suffix, {
   				criminal: [0, 0]
			});
	
			/* Mother */
			Crafty.sprite(256, characters_image_directory+default_sprite_filename_prefix+"Mother"+default_sprite_filename_suffix, {
   				mother: [0, 0]
			});
	
			/* Next Door Neighbor */
			Crafty.sprite(256, characters_image_directory+default_sprite_filename_prefix+"NextDoorNeighbor"+default_sprite_filename_suffix, {
   				nextdoorneighbor: [0, 0]
			});
	
			/* Psychotic Worker */
			Crafty.sprite(256, characters_image_directory+default_sprite_filename_prefix+"PsychoticWorker"+default_sprite_filename_suffix, {
   				psychoticworker: [0, 0]
			});
	
			/* Store Owner */
			Crafty.sprite(256, characters_image_directory+default_sprite_filename_prefix+"StoreOwner"+default_sprite_filename_suffix, {
   				storeowner: [0, 0]
			});
	
			/* Store Owner Wife */
			Crafty.sprite(256, characters_image_directory+default_sprite_filename_prefix+"StoreOwnerWife"+default_sprite_filename_suffix, {
   				storeownerwife: [0, 0]
			});
	
			/* Woman Helicopter Pilot */
			Crafty.sprite(256, characters_image_directory+default_sprite_filename_prefix+"WomanHelicopterPilot"+default_sprite_filename_suffix, {
   				womanhelicopterpilot: [0, 0]
			});
	
			/* First enemy */
			Crafty.sprite(320, "multimedia/"+contentpack+"-contentpack/images/enemies/(Brutal)_DefaultPose.png", {
   				brutal: [0, 0]
			});
		}
	}
});