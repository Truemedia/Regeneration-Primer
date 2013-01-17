jQuery(document).ready(function (){
	// Setup initial scoring system
	initialGameScoreValues();
	
	// Enable Music/Audio dialogue/Sounds
	initGameAudio();
	
	// When character chosen
	jQuery(".char_select").click(function (){
		/* Delete selection screen */
		jQuery(".character_selection_row").remove();
		/* Show option to bring up selection screen.. */
		jQuery("#char_selection_screen").html("<a href='index.html'>Rechoose character</a>");
		/* ..and Start the game up */
		startGame(this.value);
	});	
	
	// Give yourself points
	jQuery(".score_submit").click(function (){
		var player_id = this.value; // Button click = relevant to player
		jQuery.getJSON("constants/numbers_as_words.json", function(json) {
   			var player_number_as_word = json[player_id]; // so we can use database keys without numbers
   			incrementScore(player_number_as_word);
		});
	});
	
	// Give everyone points
	jQuery("#points_incrementer").click(function (){
		jQuery.getJSON("constants/numbers_as_words.json", function(json) {
			jQuery.each(json, function(key, player_number_as_word) {
				console.log(player_number_as_word);
   				incrementScore(player_number_as_word); // one, two, three, four, five, six, seven, eight
			});
		});
	});
	
	// Mute or unmute audio
	jQuery("#audio_toggle").click(function (){
		toggleAudio(this.value);
	});
});

function startGame(character){
	// Initializer
	initGame();

	// Setup all images as sprites
	setupSprites();

	// Controls
	controlsMapper();

	// Generate Map
	generateWorld();

	// Put in the Game Objects
	gameObjects(character);
}