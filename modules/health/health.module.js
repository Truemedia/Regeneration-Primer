/* 
* @file Health MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling and tracking health of players
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQ.ui", "./Crafty", "./bindings.ko", "./player.PKG"], function(jQuery, Crafty, ko, player) {
	return health = {
		// Module variables (can be overwritten dynamically)
		default_value: 94,
		default_step: 4,
		max_value: 100,
		min_value: 0,
		
		registerEvents: function(){
			// Setup health tracking jQuery events
            jQuery('.player_health').bind('progressbarchange', function(event, ui) {
            	/* Grab relevant Elements and Information */
                var element = jQuery(this).children();
                var hp = parseInt(jQuery(this).attr("aria-valuenow"), 10);
                health.HPcolor(element, hp);
            });
            jQuery('#points_partial').on("click", ".debug_button", function(event) {

				jQuery(this).parent().parent().children(".debug_controls").toggle();
			});
		},
		registerUI: function(){
			// Setup progressbar
			jQuery(".player_health").progressbar();
		
			// Default progress bar colour
			/* Green (100 - 90% health) */
			jQuery('.player_health > div').css({ 'background': 'LightGreen' });
		},
		ViewModel: function(player_id) {
			this.player_id = ko.observable(player_id);
			this.dead = ko.observable(false);
			this.hp = ko.observable(health.default_value);
			this.step = ko.observable(health.default_step);
			
			// Add health (if not dead)
    		this.incrementHealth = function() { if(this.dead() == false){
    				if(this.hp() <= (health.max_value - this.step())){
    					if(this.player_id() == 0){
    						jQuery("#player_purgatory > span").html("Alive")
    						jQuery("#player_purgatory")
    							.removeClass("deceased")
    							.addClass("alive");
    					}
        				this.hp(this.hp() + this.step()); // Normal modify event
        			}
        			else{
        				if(this.player_id() == 0){
    						jQuery("#player_purgatory > span").html("Alive")
    						jQuery("#player_purgatory")
    							.removeClass("deceased")
    							.addClass("alive");
    					}
        				this.hp(health.max_value); // Reached modify limit (Maximum health)
        			}
        		}
    		};
    		
    		// Remove health
    		this.decrementHealth = function() {
    			if(this.hp() >= (health.min_value + this.step())){
    				if(this.player_id() == 0){
    					jQuery("#player_purgatory > span").html("Alive")
    					jQuery("#player_purgatory")
    						.removeClass("deceased")
    						.addClass("alive");
    				}
        			this.hp(this.hp() - this.step()); // Normal modify event
        		}
        		else{

        			// Reached modify limit (No health)
        			if(this.player_id() == 0){
        				jQuery("#player_purgatory > span").html("Deceased (no health)")
        				jQuery("#player_purgatory")
        					.removeClass("alive")
    						.addClass("deceased");
        			}
        			
        			// Kill off the player
        			if(this.dead() == false){
        				this.hp(health.min_value);
        				this.dead(true);
        				player.killPlayer(this.player_id());
        			}
        		}
    		};
		},
		init: function(){
			health.registerUI(); // Kickstart UI
			health.registerEvents(); // Apply all jQuery event handlers
			player.loadProfile();
		},
		HPcolor: function(element, hp){
			/* Change progress bar colour, depending on value ranges */
			if (hp >= 90){ // Green (100 - 90% health)
				console.log("Health color is Green, HP = "+hp);
				jQuery(element).css({ 'background': 'LightGreen' });
			} else if (hp >= 75){ // Orange (89% - 75% health)
				console.log("Health color is Orange, HP = "+hp);
				jQuery(element).css({ 'background': 'Orange' });
			} else if (hp >= 60){ // Yellow (74% - 60% health)
				console.log("Health color is Yellow, HP = "+hp);
				jQuery(element).css({ 'background': 'Yellow' });
			} else if (hp >= 40){ // Pink (59% - 40% health)
				console.log("Health color is Pink, HP = "+hp);
				jQuery(element).css({ 'background': 'HotPink' });
			} else if (hp >= 20){ // Purple (40% - 20% health)
				console.log("Health color is Purple, HP = "+hp);
				jQuery(element).css({ 'background': 'Purple' });
			} else if (hp >= 1){ // Red (20% - 1% health)
				console.log("Health color is Crimson, HP = "+hp);
				jQuery(element).css({ 'background': 'Crimson' });
			} else { // Black (0% health)
				console.log("Health color is Grey, HP = "+hp);
				jQuery(element).css({ 'background': 'Grey' });
			}	
			/* At 0% player will be crossed out */
			// TODO: Add visuals and code for inactive player (deceased)
		}
	}
});