/* 
* @file Game file/script
* @author Wade Penistone (Truemedia)
* @overview Base script containing entire game instance and methods for controlling all the low levels functions of the game (launching, saving, closing, pausing ect)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
// Include everything
define(['jQ.xslt', 'config', 'characterselection', 'scores', 'audio', 'health', 'debug', 'init', 'sprites', 'controls', 'diydie', 'spawner', 'gameobjects', 'gamedirector', 'windows', 'Gun.MOD', 'notification', 'marquee', 'jQ.flyoff'], function(jQuery, Crafty, characterselection, scores, audio, health, debug, init, sprites, controls, diydie, spawner, gameobjects, gamedirector, windows, Gun, notification, marquee) {
	return game = {
		launch: function(){ // Game starts here (launcher)
    		jQuery(document).ready( function(jQuery){
    			// TODO: Add cleanup hidden process
    			jQuery('#marquee_window').toggle();
    
    			// Setup initial scoring system
				scores.initialGameScoreValues();
	
				// Enable Music/Audio dialogue/Sounds
				audio.initGameAudio();
	
				// Load header and footer
				windows.init({'header': '', 'characterselection': '', 'footer': ''});
	
				// When character chosen
				jQuery('#characterselection_window').on("click", ".char_select", function(event){
					game.startSession(event, this.value);
				});	
	
				// Individual point debugging handlers
				jQuery("#scores_window").on("click", ".score_submit", function (event){
					var player_id = this.value; // Button click = relevant to player
					jQuery.getJSON("systems/numbers_as_words.json", function(json) {
   						var player_number_as_word = json[player_id]; // so we can use database keys without numbers
   						scores.incrementScore(player_number_as_word);
					});
				});
	
				return jQuery.noConflict(true);
			});
		},
		startSession: function(event, characterselected){ // Startup the actual game environment (once the player is happy to start)
			/* Delete selection screen */
			jQuery("#character_selection").remove();

			/* ..and Start the game up */
			// TODO: Hide Dev notices nicer
    		jQuery('.devhint').toggle();
    		jQuery('#marquee_window').toggle();
    		
			// Initializer
			init.initGame();

			// Setup all images as sprites
			sprites.setup();

			// Controls
			controls.mapper();

			// Generate Map
			diydie.generateWorld();

			// Put in the Game Objects
			gameobjects.gameObjects(characterselected);
	
			// Initialize Game Director
			gamedirector.initGameDirector(characterselected);
	
			// Initialize session windows
			windows.init({"inventory": '', "scores": characterselected, "marquee": characterselected, "social": '', "debug": '', "options": ''});
		
			// Hook up life bars
			health.lifeSetup();
		
			// Enable debugging (but hide from view)
			debug.initDebugger(null);
			
			// New gun module interface 
			// TODO: Use this standard for all other modules, or evolve upon it
			Gun.init();
			
			// Setup notification system
			notification.init();
		}
	}
});