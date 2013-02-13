// RequireJS config
require.config({
	baseUrl: "",
	paths: {
        'jQuery': "../../libraries/jQuery/jquery.min", /* jQuery core */
        'Crafty': "dependencies/craftyjs/crafty-local", /* Crafty core */
        'jQ.xslt': "libs/jquery.xslt", /* jQuery XSLT plugin */
        'config': "javascript/config", /* Game Config Variables */
        'init': "javascript/init", /* Initialize functions */
        'scores': "javascript/scores", /* Scoring system */
        'sprites': "javascript/sprites", /* Sprites */
        'controls': "javascript/controls", /* Controls */
        'gameobjects': "javascript/gameobjects", /* Game Objects */
        'gamedirector': "javascript/game_director/game_director", /* Game Director */
        'spawner': "javascript/spawner/spawner", /* Spawner */
        'diydie': "javascript/maps/diydie", /* Current MAP */
        'audio': "resource_managers/audio/audio", /* Audio */
        'debug': "javascript/game_director/debug", /* Debugging */
        'windows': "javascript/windows", /* AJAX-XSLT templates */
        'jQ.flyoff': "libs/jquery.flyoffpage.full" /* Fly off animation */
    },
    shim: {
    	// Dependencies
    	'jQuery': {
            exports: 'jQuery'
        },
        'Crafty': {
            exports: 'Crafty'
        },
        // jQuery plugins
        'jQ.xslt': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        'jQ.flyoff': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        // General game files
        'config': ['jQuery', 'Crafty'],
        'init': ['jQuery', 'Crafty'],
        'scores': ['jQuery', 'Crafty'],
        'sprites': ['jQuery', 'Crafty'],
        'controls': ['jQuery', 'Crafty'],
        'gameobjects': ['jQuery', 'Crafty'],
        'gamedirector': ['jQuery', 'Crafty'],
        'spawner': ['jQuery', 'Crafty'],
        'diydie': ['jQuery', 'Crafty'],
        'audio': ['jQuery', 'Crafty'],
        'debug': ['jQuery', 'Crafty'],
        'windows': ['jQuery', 'Crafty']
    }
});
// JavaScript includes
require(['jQ.xslt', 'config', 'init', 'scores', 'sprites', 'controls', 'gameobjects', 'gamedirector', 'spawner', 'diydie', 'audio', 'debug', 'windows', 'jQ.flyoff'], function(jQuery, Crafty) {
    // do something here...
    
    jQuery(document).ready( function(jQuery){
    // Setup initial scoring system
	initialGameScoreValues();
	
	// Enable Music/Audio dialogue/Sounds
	initGameAudio();
	
	// Enable debugging (but hide from view)
	initDebugger();
	
	// When character chosen
	jQuery(".char_select").click(function (){
		/* Delete selection screen */
		jQuery(".character_selection_row").remove();
		/* Show option to bring up selection screen.. */
		jQuery("#char_selection_screen").html("<a href='index.html'>Rechoose character</a>");
		/* ..and Start the game up */
		// Initializer
		init.initGame();

		// Setup all images as sprites
		sprites.setupSprites();

		// Controls
		controls.controlsMapper();

		// Generate Map
		diydie.generateWorld();

		// Put in the Game Objects
		gameobjects.gameObjects(this.value);
	
		// Initialize Game Director
		gamedirector.initGameDirector(this.value);
	
		// Initialize inventory
		windows.initInventory();
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
	// Enable or disable debugging UI
	jQuery("#debug_toggle").click(function (){
		pointsDebugger();
	});
	
	return jQuery.noConflict(true);
	});
});