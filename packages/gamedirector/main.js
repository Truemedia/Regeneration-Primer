/**
 * @file Game director PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for balancing the difficultly of the game where implemented to a reasonable level where the difficulty can gradually progress
 * @copyright Wade Penistone 2013
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define(["./Toastr", "./Crafty", "./spawner.PKG", "./Config"], function(toastr, Crafty, spawner, Config) {
	/** 
     * Game Director package
     * @namespace gamedirector
     */
	return gamedirector = {
			
		// Round/Wave number
		round_number: 0,
			
		/* Warn player that next round is commencing */
		roundCall: function()
		{	
			// Increment round number
			gamedirector.round_number++;
			
			// Display notification
			toastr.options = Config.get('gamedirector::toastr');
			toastr.error("Prepare to fight", "Round "+gamedirector.round_number);
		},
			
		initGameDirector: function(character)
		{
			// Spawn players
			jQuery.getJSON("packages/characterselection/info/characters.json", function(all_characters_info) {
				jQuery.each(all_characters_info, function(key, item){
					// Code to add player/s on screen
					spawner.spawnCharacter(item, character, key);
				});
			});
		}
	}
});