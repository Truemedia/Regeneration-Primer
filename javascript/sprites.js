// Sprites module
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		setup: function(){
			// Sprite Map for items
			Crafty.sprite(256, "images/items/Guns/AR-15.png", {
   				gun1: [0, 0]
			});

			// Sprite Map for charachters
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
			Crafty.sprite(320, "images/enemies/(Brutal)_DefaultPose.png", {
   				brutal: [0, 0]
			});
		}
	}
});