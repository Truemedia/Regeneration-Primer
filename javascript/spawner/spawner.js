function spawnCharacters(character){
	jQuery.getJSON("constants/character_info.json", function(all_characters_info) {
		jQuery.each(all_characters_info, function(key, item){
			// Code to add player/s on screen
			spawnCharacter(item, character, key);
		});
	});
}
function spawnCharacter(char_name, players_char_name, char_id){
	if(char_name == players_char_name){
		// Matches character we choose (spawning us)
		Crafty.e("2D, DOM, wall_left, solid, "+char_name+", LeftControls")
		// Draw the sprite
		.attr({x: 2, y: 2, z: 1})
		// Add controls to this object
		.leftControls(3);
	}
	else{
		// Spawning bot
		Crafty.e("2D, DOM, wall_left, solid, "+char_name)
		// Draw the sprite
		.attr({x: (80+(40*char_id)), y: (20*char_id), z: (1*char_id)});
	}
}
function spawnEnemies(spawn_amount){
	// Code to add monster/s on screen
	/*for(i=1;  i<=spawn_amount; i++){
		spawnEnemy(480, 480);
	}*/
}
function spawnEnemy(){
	//craft draw stuff
}
function randomSpawnCoordinates(max_x, max_y){
	//random()
}