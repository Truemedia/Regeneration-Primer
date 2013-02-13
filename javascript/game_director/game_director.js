define(["./jQuery", "./Crafty", "./spawner"], function(jQuery, Crafty, spawner) {
	return {
	initGameDirector: function(character){
		// Spawn players
		spawner.spawnCharacters(character);
	}
	}
});