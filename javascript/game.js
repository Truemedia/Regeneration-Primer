// RequireJS config
require.config({
	baseUrl: "",
	paths: {
		/* Core dependencies */
        'jQuery': "dependencies/jqueryUI/jquery-1.9.1", // jQuery core
        'Crafty': "dependencies/craftyjs/crafty-local", // Crafty core
        'jQ.xslt': "libs/jquery.xslt", // jQuery XSLT plugin (JXON)
        
        /* Game modules */
        'config': "javascript/config", // Game Config Variables
        'scores': "javascript/scores", // Scoring system
        'audio': "resource_managers/audio/audio", // Audio
        'health': "javascript/health", // Health
        'debug': "javascript/game_director/debug", // Debugging
        'init': "javascript/init", // Initialize functions
        'sprites': "javascript/sprites", // Sprites
        'controls': "javascript/controls", // Controls
        'diydie': "javascript/maps/diydie", // Current MAP
        'spawner': "javascript/spawner/spawner", // Spawner
        'gameobjects': "javascript/gameobjects", // Game Objects
        'gamedirector': "javascript/game_director/game_director", // Game Director
        'windows': "javascript/windows", // AJAX-XSLT templates
        
        /* jQuery plugins */
        'jQ.flyoff': "libs/jquery.flyoffpage.full", // Fly off animation
        
        /* jQuery UI files */
        'jQ.ui.widget': "dependencies/jqueryUI/ui/jquery.ui.widget", // Core widget file
        'jQ.ui.progressbar': "dependencies/jqueryUI/ui/jquery.ui.progressbar" // Progress bar
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
        // jQuery UI 
        'jQ.ui.widget': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        'jQ.ui.progressbar': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        // General game files
        'config': ['jQuery', 'Crafty'],
        'scores': ['jQuery', 'Crafty'],
        'audio': ['jQuery', 'Crafty'],
        'health': ['jQuery', 'Crafty'],
        'debug': ['jQuery', 'Crafty'],
        'init': ['jQuery', 'Crafty'],
        'sprites': ['jQuery', 'Crafty'],
        'controls': ['jQuery', 'Crafty'],
        'diydie': ['jQuery', 'Crafty'],
        'spawner': ['jQuery', 'Crafty'],
        'gameobjects': ['jQuery', 'Crafty'],
        'gamedirector': ['jQuery', 'Crafty', 'spawner'],
        'windows': ['jQuery', 'Crafty']
    }
});
// JavaScript includes
require(['jQ.xslt', 'config', 'scores', 'audio', 'health', 'debug', 'init', 'sprites', 'controls', 'diydie', 'spawner', 'gameobjects', 'gamedirector', 'windows', 'jQ.flyoff'], function(jQuery, Crafty, scores, audio, health, debug, init, sprites, controls, diydie, spawner, gameobjects, gamedirector, windows) {
    // do something here...
    
    jQuery(document).ready( function(jQuery){
    	// Setup initial scoring system
		scores.initialGameScoreValues();
	
		// Enable Music/Audio dialogue/Sounds
		audio.initGameAudio();
	
		// Load header and footer
		windows.initHT();
	
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
			sprites.setup();

			// Controls
			controls.mapper();

			// Generate Map
			diydie.generateWorld();

			// Put in the Game Objects
			gameobjects.gameObjects(this.value);
	
			// Initialize Game Director
			gamedirector.initGameDirector(this.value);
	
			// Initialize and adapt windows
			windows.initInventory();
			windows.RearrangeForCanvas();
		
			// Hook up life bars
			health.lifeSetup();
		
			// Enable debugging (but hide from view)
			debug.initDebugger();
		});	
	
		// Give yourself points
		jQuery(".score_submit").click(function (){
			var player_id = this.value; // Button click = relevant to player
			jQuery.getJSON("constants/numbers_as_words.json", function(json) {
   				var player_number_as_word = json[player_id]; // so we can use database keys without numbers
   				scores.incrementScore(player_number_as_word);
			});
		});
	
		// Give everyone points
		jQuery("#points_incrementer").click(function (){
			jQuery.getJSON("constants/numbers_as_words.json", function(json) {
				jQuery.each(json, function(key, player_number_as_word) {
					console.log(player_number_as_word);
   					scores.incrementScore(player_number_as_word); // one, two, three, four, five, six, seven, eight
				});
			});
		});
	
		// Mute or unmute audio
		jQuery("#audio_toggle").click(function (){
			audio.toggleAudio(this.value);
		});
		// Enable or disable debugging UI
		jQuery("#debug_toggle").click(function (){
			debug.pointsDebugger();
		});
	
		return jQuery.noConflict(true);
	});
});