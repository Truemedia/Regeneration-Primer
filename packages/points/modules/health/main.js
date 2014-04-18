/* 
* @file Health MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling and tracking health of players
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["Config", "Bootstrap", "KO", "Toastr"], function(Config, jQuery, ko, toastr) {
	return Health = {

        init: function(){

            Health.registerEvents(); // Apply all jQuery event handlers
        },

        /* Register jQuery event handlers */
        registerEvents: function() {

            jQuery('div[data-package="points"]').on("click", ".debug_button", function(e) {

                jQuery(this).next(".debug_controls").toggle();
                e.preventDefault();
            });
        },

		ViewModel: function(player_id) {

            // Defaults
			this.player_id = ko.observable(player_id);
			this.dead = ko.observable(false);
			this.hp = ko.observable( parseInt(Config.get('points::health.default_value')) );
			this.step = ko.observable( parseInt(Config.get('points::health.default_step')) );

            // Animate progress bar value based on HP percentage
            this.progress = ko.computed( function() {
                return this.hp() + '%';
            }, this);

            // Animate progress bar color based on HP percentage
            this.color = ko.computed( function() {

                if (this.hp() >= 90) { // Green (100 - 90% health)

                    var health_color = 'LightGreen';
                } else if (this.hp() >= 75) { // Orange (89% - 75% health)

                    var health_color = 'Orange';
                } else if (this.hp() >= 60) { // Yellow (74% - 60% health)

                    var health_color = 'Yellow';
                } else if (this.hp() >= 40) { // Pink (59% - 40% health)

                    var health_color = 'HotPink';
                } else if (this.hp() >= 20) { // Purple (40% - 20% health)

                    var health_color = 'Purple';
                } else if (this.hp() >= 1) { // Red (20% - 1% health)

                    var health_color = 'Crimson';
                } else { // Black (0% health)

                    var health_color = 'Grey';
                }
                return health_color;
            }, this);
			
			// Increase/Decrease methods
    		this.increaseHealth = function() { if(this.dead() == false){
    				if (this.hp() <= (  parseInt(Config.get('points::health.max_value')) - this.step() )) {
    					if (this.player_id() == 0) {
    						jQuery("#player_purgatory > span").html("Alive")
    						jQuery("#player_purgatory")
    							.removeClass("deceased")
    							.addClass("alive");
    					}
        				this.hp(this.hp() + this.step()); // Normal modify event
        			}
        			else {
        				if (this.player_id() == 0) {
    						jQuery("#player_purgatory > span").html("Alive")
    						jQuery("#player_purgatory")
    							.removeClass("deceased")
    							.addClass("alive");
    					}
        				this.hp( parseInt(Config.get('points::health.max_value')) ); // Reached modify limit (Maximum health)
        			}
        		}
    		};

    		this.decreaseHealth = function() {
    			if (this.hp() >= ( parseInt(Config.get('points::health.min_value')) + this.step() )) {
    				if (this.player_id() == 0) {
    					jQuery("#player_purgatory > span").html("Alive")
    					jQuery("#player_purgatory")
    						.removeClass("deceased")
    						.addClass("alive");
    				}
        			this.hp(this.hp() - this.step()); // Normal modify event
        		}
        		else{

        			// Reached modify limit (No health)
        			if(this.player_id() == 0) {
        				jQuery("#player_purgatory > span").html("Deceased (no health)")
        				jQuery("#player_purgatory")
        					.removeClass("alive")
    						.addClass("deceased");
        			}
        			
        			// Kill off the player
        			if(this.dead() == false) {
        				this.hp( Config.get('points::health.min_value') );
        				this.dead(true);
        				toastr.error("Stay alive until the next round", "Player " + player_id + " has been killed");
        			}
        		}
    		};
		},

		logger: function() {
			console.log("Health MODULE loaded");
		}
	}
});