jQuery(document).ready(function (){
	// When character chosen
	jQuery(".char_select").click(function (){
		/* Delete selection screen */
		jQuery(".character_selection_row").remove();
		/* Show option to bring up selection screen.. */
		jQuery("#char_selection_screen").html("<a href='index.html'>Rechoose character</a>");
		/* ..and Start the game up */
		startGame(this.value);
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