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
define(['jQ.xslt', 'config.SYS', 'header.SYS', 'footer.SYS', 'highscores.SYS', 'characterselection.SYS', 'mainmenu.SYS', 'gameinfo.SYS', 'about.SYS', 'theme.SYS', 'points.SYS', 'audio.SYS', 'Health.MOD', 'debug.SYS', 'init.SYS', 'sprites.SYS', 'controls.SYS', 'diydie.SYS', 'spawner.SYS', 'gameobjects.SYS', 'gamedirector.SYS', 'windows.SYS', 'Gun.MOD', 'notification.SYS', 'marquee.SYS', 'jQ.flyoff'], function(jQuery, Crafty, header, footer, highscores, characterselection, mainmenu, gameinfo, about, theme, points, audio, health, debug, init, sprites, controls, diydie, spawner, gameobjects, gamedirector, windows, Gun, notification, marquee) {
	return game = {
		launch: function(){ // Game starts here (launcher)
    		jQuery(document).ready( function(jQuery){
    			// TODO: Add cleanup hidden process
    			jQuery('#marquee_window').toggle();
    			jQuery('.window-column').toggle();
	
				// Enable Music/Audio dialogue/Sounds
				audio.initGameAudio();
				
				// Information screens made of modals
				mainmenu.init();
				gameinfo.init();
				about.init();
	
				// Load header and footer
				header.init();
				characterselection.init();
				footer.init();
				highscores.init();
				
				// Setup theme/themes
				theme.init();
				
				/* CHARACTER SELECTION EVENT */
				jQuery('#characterselection_partial').on("click", ".start_session", function(event){

					// Specific character chosen
					if(jQuery(this).attr("id") == "use_picked_char"){
						console.log("Using players choosen character: "+this.value);
						game.startSession(event, this.value);
					} else {
					// Choose a random character for the player
						console.log("Using random character");
						jQuery.getJSON("systems/characterselection/info/characters_advanced.json", function(all_characters_info) {
							number_of_chars = all_characters_info.characters.length - 1;
							var random_char_id = Math.floor((Math.random()*number_of_chars)+1);
							var random_char_name = all_characters_info.characters[random_char_id].identifierReference;
							game.startSession(event, random_char_name);
						});
					}
				});	
	
				return jQuery.noConflict(true);
			});
		},
		startSession: function(event, characterselected){ // Startup the actual game environment (once the player is happy to start)
			/* Delete selection screen */
			jQuery("#characterselection_partial").remove();

			/* ..and Start the game up */
			// TODO: Hide Dev notices nicer
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
			points.init();
			windows.init({"inventory": '', "marquee": characterselected, "social": '', "debug": ''});
		
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