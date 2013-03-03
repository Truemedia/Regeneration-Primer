// Game director module
define(["./jQuery", "./Crafty", "./spawner"], function(jQuery, Crafty, spawner) {
	return {
		initGameDirector: function(character){
			// Spawn players
			jQuery.getJSON("constants/character_info.json", function(all_characters_info) {
				jQuery.each(all_characters_info, function(key, item){
					// Code to add player/s on screen
					spawner.spawnCharacter(item, character, key);
				});
			});
		}
	}
});