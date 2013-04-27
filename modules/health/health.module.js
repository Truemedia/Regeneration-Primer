/* 
* @file Health MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling and tracking health of players
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQ.ui.progressbar", "./Crafty", "./bindings.ko"], function(jQuery, Crafty, ko) {
	return health = {
		// Module variables (can be overwritten dynamically)
		default_value: 94,
		default_step: 4,
		max_value: 100,
		min_value: 1,
		
		registerEvents: function(){
			// Setup health tracking jQuery events
            jQuery('.player_health').bind('progressbarchange', function(event, ui) {
            	/* Grab relevant Elements and Information */
                var element = jQuery(this).children();
                var hp = parseInt(jQuery(this).attr("aria-valuenow"), 10);
                health.HPcolor(element, hp);
            });
		},
		registerUI: function(){
			// Setup progressbar
			jQuery(".player_health").progressbar();
		
			// Default progress bar colour
			/* Green (100 - 90% health) */
			jQuery('.player_health > div').css({ 'background': 'LightGreen' });
		},
		ViewModel: function() { 
			this.hp = ko.observable(health.default_value);
			this.step = ko.observable(health.default_step);
    		this.incrementHealth = function() {
    			if(this.hp() <= (health.max_value - this.step())){
        			this.hp(this.hp() + this.step()); // Normal modify event
        		}
        		else{
        			this.hp(health.max_value); // Reached modify limit
        		}
    		};
    		this.decrementHealth = function() {
    			if(this.hp() >= (health.min_value + this.step())){
        			this.hp(this.hp() - this.step()); // Normal modify event
        		}
        		else{
        			this.hp(health.min_value); // Reached modify limit
        		}
    		};
		},
		init: function(){
			health.registerUI(); // Kickstart UI
			health.registerEvents(); // Apply all jQuery event handlers
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
			} else{ // Red (20% - 1% health)
				console.log("Health color is Crimson, HP = "+hp);
				jQuery(element).css({ 'background': 'Crimson' });
			}	
			/* At 0% player will be crossed out */
			// TODO: Add visuals and code for inactive player (deceased)
		}
	}
});