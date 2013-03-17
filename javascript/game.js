// RequireJS config
require.config({
	baseUrl: "",
	paths: {
		// All JavaScript files used in the game (paths arranged alphabetically)
		/* Core dependencies */
		'Crafty': "dependencies/craftyjs/crafty-local", // Crafty core
        'jQuery': "dependencies/jqueryUI/jquery-1.9.1", // jQuery core
        'jQ.xslt': "libs/jquery.xslt", // jQuery XSLT plugin (JXON)
        'jQ.xml2json': "libs/jquery.xml2json", // jQuery XML2JSON plugin (JXON)
        'KO': "dependencies/knockout/build/output/knockout-latest", // KnockoutJS core
                
        /* Systems (Core game mechanics) */
        'audio': "resource_managers/audio/audio", // Audio system
        'config': "javascript/config", // Game Config system
        'controls': "javascript/controls", // Controls system
        'debug': "javascript/game_director/debug", // Debugging system
        'diydie': "javascript/maps/diydie", // Map System (Current MAP only)
        'gamedirector': "javascript/game_director/game_director", // Game Director system
        'gameobjects': "javascript/gameobjects", // Game Objects system
        'health': "javascript/health", // Health system
        'init': "javascript/init", // Initialization system
        'notification': "javascript/notification", // Notification system
        'scores': "javascript/scores", // Scoring system
        'spawner': "javascript/spawner/spawner", // Spawner system
        'sprites': "javascript/sprites", // Sprites system
        'tooltip': "javascript/tooltip", // Tooltips system
        'windows': "javascript/windows", // AJAX-XSLT templates system
        
        /* Game modules */
        'Gun.MOD': "interfaces/gun/gun.module", // Gun module
        
        /* jQuery plugins */
        'jQ.flyoff': "libs/jquery.flyoffpage.full", // Fly off animation
        
        /* jQuery UI files */
        'jQ.ui.accordion': "dependencies/jqueryUI/ui/jquery.ui.accordion", // Accordion
        'jQ.ui.autocomplete': "dependencies/jqueryUI/ui/jquery.ui.autocomplete", // Auto Complete
        'jQ.ui.button': "dependencies/jqueryUI/ui/jquery.ui.button", // Button
        'jQ.ui.core': "dependencies/jqueryUI/ui/jquery.ui.core", // Core file
        'jQ.ui.datepicker': "dependencies/jqueryUI/ui/jquery.ui.datepicker", // Date Picker
        'jQ.ui.dialog': "dependencies/jqueryUI/ui/jquery.ui.dialog", // Dialog
        'jQ.ui.draggable': "dependencies/jqueryUI/ui/jquery.ui.draggable", // Draggable
        'jQ.ui.droppable': "dependencies/jqueryUI/ui/jquery.ui.droppable", // Droppable
        'jQ.ui.effect': "dependencies/jqueryUI/ui/jquery.ui.effect", // Effect
        'jQ.ui.menu': "dependencies/jqueryUI/ui/jquery.ui.menu", // Menu
        'jQ.ui.mouse': "dependencies/jqueryUI/ui/jquery.ui.mouse", // Mouse
        'jQ.ui.position': "dependencies/jqueryUI/ui/jquery.ui.position", // Position
       	'jQ.ui.progressbar': "dependencies/jqueryUI/ui/jquery.ui.progressbar", // Progress bar
       	'jQ.ui.resizable': "dependencies/jqueryUI/ui/jquery.ui.resizable", // Resizable
       	'jQ.ui.selectable': "dependencies/jqueryUI/ui/jquery.ui.selectable", // Selectable
       	'jQ.ui.slider': "dependencies/jqueryUI/ui/jquery.ui.slider", // Slider
       	'jQ.ui.sortable': "dependencies/jqueryUI/ui/jquery.ui.sortable", // Sortable
       	'jQ.ui.spinner': "dependencies/jqueryUI/ui/jquery.ui.spinner", // Spinner
       	'jQ.ui.tabs': "dependencies/jqueryUI/ui/jquery.ui.tabs", // Tabs
       	'jQ.ui.tooltip': "dependencies/jqueryUI/ui/jquery.ui.tooltip", // Tooltip
        'jQ.ui.widget': "dependencies/jqueryUI/ui/jquery.ui.widget" // Core widget file
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
        'jQ.xml2json': {
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
        'jQ.ui.accordion': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.autocomplete': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.button': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.core': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.datepicker': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.dialog': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.draggable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.droppable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.effect': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.menu': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.mouse': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.position': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.progressbar': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        }, 
       	'jQ.ui.resizable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.selectable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.slider': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.sortable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.spinner': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.tabs':  {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.tooltip': {
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
require(['jQ.xslt', 'config', 'scores', 'audio', 'health', 'debug', 'init', 'sprites', 'controls', 'diydie', 'spawner', 'gameobjects', 'gamedirector', 'windows', 'Gun.MOD', 'notification', 'jQ.flyoff'], function(jQuery, Crafty, scores, audio, health, debug, init, sprites, controls, diydie, spawner, gameobjects, gamedirector, windows, Gun, notification) {
    // Game starts here (bootstrap)
    
    jQuery(document).ready( function(jQuery){
    	// Setup initial scoring system
		scores.initialGameScoreValues();
	
		// Enable Music/Audio dialogue/Sounds
		audio.initGameAudio();
	
		// Load header and footer
		windows.init({'header': '', 'footer': ''});
	
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
	
			// Initialize session windows
			windows.init({"inventory": '', "scores": this.value, "marquee": this.value});
		
			// Hook up life bars
			health.lifeSetup();
		
			// Enable debugging (but hide from view)
			debug.initDebugger();
			
			// New gun module interface 
			// TODO: Use this standard for all other modules, or evolve upon it
			Gun.init();
			
			// Adapt to new scene
			windows.RearrangeForCanvas(this.value);
			
			// Setup notification system
			notification.init();
		});	
	
		// Individual point debugging handlers
		jQuery("#scores_window").on("click", ".score_submit", function (event){
			var player_id = this.value; // Button click = relevant to player
			jQuery.getJSON("constants/numbers_as_words.json", function(json) {
   				var player_number_as_word = json[player_id]; // so we can use database keys without numbers
   				scores.incrementScore(player_number_as_word);
			});
		});
	
		// Give yourself points
		jQuery("#marquee_window").on("click", ".score_submit", function (event){
			var player_id = this.value; // Button click = relevant to player
			jQuery.getJSON("constants/numbers_as_words.json", function(json) {
   				var player_number_as_word = json[player_id]; // so we can use database keys without numbers
   				scores.incrementScore(player_number_as_word);
			});
		});
	
		// Give everyone points
		jQuery("#marquee_window").on("click", "#points_incrementer", function (event){
			jQuery.getJSON("constants/numbers_as_words.json", function(json) {
				jQuery.each(json, function(key, player_number_as_word) {
					console.log(player_number_as_word);
   					scores.incrementScore(player_number_as_word); // one, two, three, four, five, six, seven, eight
				});
			});
		});
	
		/* Marquee event handlers */
		// Mute or unmute audio
		jQuery('#marquee_window').on("click", "#audio_toggle", function(event){
			audio.toggleAudio(event);
		});
		jQuery('#marquee_window').on("mouseenter", "#audio_toggle", function(event){
			controls.hints("audio", event);
		});
		jQuery('#marquee_window').on("mouseleave", "#audio_toggle", function(event){
			controls.hints("audio", event);
		});
		
		// Enable or disable debugging UI
		jQuery('#marquee_window').on("click", "#debug_toggle", function(event){
			debug.pointsDebugger(event);
		});
		jQuery('#marquee_window').on("mouseenter", "#debug_toggle", function(event){
			controls.hints("debug", event);
		});
		jQuery('#marquee_window').on("mouseleave", "#debug_toggle", function(event){
			controls.hints("debug", event);
		});
		
		// Show control hints
		jQuery('#marquee_window').on("mouseenter", "#controls_tooltip", function(event){
			controls.hints("controls", event);
		});
		jQuery('#marquee_window').on("mouseleave", "#controls_tooltip", function(event){
			controls.hints("controls", event);
		});
		/* /Marquee event handlers */
	
		return jQuery.noConflict(true);
	});
});