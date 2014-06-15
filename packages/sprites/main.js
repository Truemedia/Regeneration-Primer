/**
 * @file Sprites PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for loading Crafty sprite resources
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"./jQuery", "./Crafty", "./Config", "./characterselection.PKG"
], function(jQuery, Crafty, Config, characterselection)
{
	/** 
     * Sprites package
     * @namespace sprites
     */
	sprites = {
		
		setup: function()
		{
			var sprites_dir = Config.get('resources.directories.multimedia.images');
			var f = ".png"; // Only file format used at the moment
		
			// Load all sprites
			sprites.setupItems(sprites_dir, f);
			sprites.setupCharacters(sprites_dir, f);
			sprites.setupEnemies(sprites_dir, f);
		},
		setupItems: function(sprites_dir, f)
		{
			/* Sprite maps for Items */
			// Containing Directory
			var items_sprites_dir = sprites_dir+"items/";
			// Directories
			var guns_sprites_dir = items_sprites_dir+"Guns/";
			var storage_sprites_dir = items_sprites_dir+"Storage/";
			var swords_sprites_dir = items_sprites_dir+"Swords/";
			var tools_sprites_dir = items_sprites_dir+"Tools/";
			
			Crafty.sprite(1, guns_sprites_dir+"AR-15"+f, { gun1: [0, 0, 128, 256] }); /* AR-15 */
			Crafty.sprite(1, guns_sprites_dir+"Glock"+f, { gun2: [0, 0, 128, 256] }); /* Glock */
			Crafty.sprite(1, guns_sprites_dir+"Bullet"+f, { mag: [0, 0, 12, 32] }); /* Gun magazine (TODO: rename image file on gun cleanup) */
			Crafty.sprite(1, storage_sprites_dir+"WoodenCrate"+f, { storageBox: [0, 0, 128, 128] }); /* General supplies box */
			Crafty.sprite(1, storage_sprites_dir+"MetalContainer"+f, { container: [0, 0, 128, 128] }); /* General supplies box */
			Crafty.sprite(1, swords_sprites_dir+"Katana"+f, { katana: [0, 0, 128, 256] }); /* Katana */
		},
		setupCharacters: function()
		{
			/* Sprite maps for Characters */

			return [
			    // Coward
				{
					name: "coward",
					type: "image",
					src: characterselection.getCharacterImage("Coward")
				},
				// Criminal
				{
					name: "criminal",
					type: "image",
					src: characterselection.getCharacterImage("Criminal")
				},
				// Mother
				{
					name: "mother",
					type: "image",
					src: characterselection.getCharacterImage("Mother")
				},
				// Next Door Neighbor
				{
					name: "nextdoorneighbor",
					type: "image",
					src: characterselection.getCharacterImage("NextDoorNeighbor")
				},
				// Psychotic Worker
				{
					name: "psychoticworker",
					type: "image",
					src: characterselection.getCharacterImage("PsychoticWorker")
				},
				// Store Owner
				{
					name: "storeowner",
					type: "image",
					src: characterselection.getCharacterImage("StoreOwner")
				},
				// Store Owner Wife
				{
					name: "storeownerwife",
					type: "image",
					src: characterselection.getCharacterImage("StoreOwnerWife")
				},
				// Woman Helicopter Pilot
				{
					name: "womanhelicopterpilot",
					type: "image",
					src: characterselection.getCharacterImage("WomanHelicopterPilot")
				}
			];
		},
		setupEnemies: function(sprites_dir, f)
		{
			/* Sprite maps for Enemies */
			// Directories
			var enemies_sprites_dir = sprites_dir+"enemies/";
			
			Crafty.sprite(1, enemies_sprites_dir+"(Brutal)_DefaultPose"+f, { brutal: [0, 0, 320, 320] }); /* First enemy */
		}
	};

	return spawner;
});