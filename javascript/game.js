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