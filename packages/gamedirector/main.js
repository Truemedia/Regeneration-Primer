/* 
* @file Game director PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for balancing the difficultly of the game where implemented to a reasonable level where the difficulty can gradually progress
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./spawner.PKG"], function(jQuery, Crafty, spawner) {
	return gamedirector = {
		initGameDirector: function(character){
			// Spawn players
			jQuery.getJSON("packages/characterselection/info/characters.json", function(all_characters_info) {
				jQuery.each(all_characters_info, function(key, item){
					// Code to add player/s on screen
					spawner.spawnCharacter(item, character, key);
				});
			});
		}
	}
});