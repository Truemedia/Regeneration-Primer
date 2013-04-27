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
	return sprites = {
		
		setup: function(){
			// TODO: Extract in-use content pack from config
			var contentpack = "default";
			var sprites_dir = "multimedia/"+contentpack+"-contentpack/images/";
			var f = ".png"; // Only file format used at the moment
		
			// Load all sprites
			sprites.setupItems(sprites_dir, f);
			sprites.setupCharacters(sprites_dir, f);
			sprites.setupEnemies(sprites_dir, f);
		},
		setupItems: function(sprites_dir, f){
			/* Sprite maps for Items */
			// Containing Directory
			var items_sprites_dir = sprites_dir+"items/";
			// Directories
			var guns_sprites_dir = items_sprites_dir+"Guns/";
			var storage_sprites_dir = items_sprites_dir+"Storage/";
			var swords_sprites_dir = items_sprites_dir+"Swords/";
			
			Crafty.sprite(256, guns_sprites_dir+"AR-15"+f, { gun1: [0, 0] }); /* AR-15 */
			Crafty.sprite(256, guns_sprites_dir+"Glock"+f, { gun2: [0, 0] }); /* Glock */
			Crafty.sprite(256, guns_sprites_dir+"Bullet"+f, { mag: [0, 0] }); /* Gun magazine (TODO: rename image file on gun cleanup) */
			Crafty.sprite(256, storage_sprites_dir+"WoodenCrate"+f, { storageBox: [0, 0] }); /* General supplies box */
			Crafty.sprite(256, swords_sprites_dir+"Katana"+f, { katana: [0, 0] }); /* Katana */
		},
		setupCharacters: function(sprites_dir, f){
			/* Sprite maps for Characters */
			// Directories
			var characters_sprites_dir = characters_image_directory + default_sprite_filename_prefix;
			var af = default_sprite_filename_suffix; // Alternative filename.fileformat
			
			Crafty.sprite(256, characters_sprites_dir+"Coward"+af, { coward: [0, 0] }); /* Coward */
			Crafty.sprite(256, characters_sprites_dir+"Criminal"+af, { criminal: [0, 0] }); /* Criminal */
			Crafty.sprite(256, characters_sprites_dir+"Mother"+af, { mother: [0, 0] }); /* Mother */
			Crafty.sprite(256, characters_sprites_dir+"NextDoorNeighbor"+af, { nextdoorneighbor: [0, 0] }); /* Next Door Neighbor */
			Crafty.sprite(256, characters_sprites_dir+"PsychoticWorker"+af, { psychoticworker: [0, 0] }); /* Psychotic Worker */
			Crafty.sprite(256, characters_sprites_dir+"StoreOwner"+af, { storeowner: [0, 0] }); /* Store Owner */
			Crafty.sprite(256, characters_sprites_dir+"StoreOwnerWife"+af, { storeownerwife: [0, 0] }); /* Store Owner Wife */
			Crafty.sprite(256, characters_sprites_dir+"WomanHelicopterPilot"+af, { womanhelicopterpilot: [0, 0] }); /* Woman Helicopter Pilot */
		},
		setupEnemies: function(sprites_dir, f){
			/* Sprite maps for Enemies */
			// Directories
			var enemies_sprites_dir = sprites_dir+"enemies/";
			
			Crafty.sprite(320, enemies_sprites_dir+"(Brutal)_DefaultPose"+f, { brutal: [0, 0] }); /* First enemy */
		}
	}
});