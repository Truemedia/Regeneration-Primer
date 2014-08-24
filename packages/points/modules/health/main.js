/* 
* @file Health MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling and tracking health of players
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["Config", "Bootstrap", "KO", "Toastr"], function(Config, jQuery, ko, toastr)
{
	Health = {

        init: function()
        {
            Health.registerEvents(); // Apply all jQuery event handlers
        },

        /* Register jQuery event handlers */
        registerEvents: function()
        {
            jQuery('div[data-package="points"]').on("click", ".debug_button", function(e) {

                jQuery(this).next(".debug_controls").toggle();
                e.preventDefault();
            });
        },

        ViewModel: function(player_id)
        {
            // Defaults
            var value = ko.observable( parseInt(Config.get('points::health.default_value')) ),
                step = ko.observable( parseInt(Config.get('points::health.default_step')) ),
                min_value = ko.observable( parseInt(Config.get('points::health.min_value')) ),
                max_value = ko.observable( parseInt(Config.get('points::health.max_value')) );

            // Custom variables
            var player_id = ko.observable(player_id),
                dead = ko.observable(false);

            // Animate progress bar value based on HP percentage
            var progress = ko.computed( function() {
                return value() + '%';
            });

            // Animate progress bar color based on HP percentage
            var color = ko.computed( function() {

                var health_color = '';

                if (value() >= 90) { health_color = 'LightGreen'; } // Green (100 - 90% health)
                else if (value() >= 75) { health_color = 'Orange'; } // Orange (89% - 75% health)
                else if (value() >= 60) { health_color = 'Yellow'; } // Yellow (74% - 60% health)
                else if (value() >= 40) { health_color = 'HotPink'; } // Pink (59% - 40% health)
                else if (value() >= 20) { health_color = 'Purple'; } // Purple (40% - 20% health)
                else if (value() >= 1) { health_color = 'Crimson'; } // Red (20% - 1% health)
                else { health_color = 'Grey'; } // Black (0% health)
                
                return health_color;
            });
            
            // Increase/Decrease methods
            var increase = function()
            {
                if (dead() === false)
                {
                    if (value() <= ( max_value() - step() ))
                    {
                        if (player_id() === 0)
                        {
                            jQuery("#player_purgatory > span").html("Alive");
                            jQuery("#player_purgatory")
                                .removeClass("deceased")
                                .addClass("alive");
                        }
                        value(value() + step()); // Increased
                    }
                    else
                    {
                        if (player_id() === 0)
                        {
                            jQuery("#player_purgatory > span").html("Alive");
                            jQuery("#player_purgatory")
                                .removeClass("deceased")
                                .addClass("alive");
                        }
                        value( max_value() ); // Reached upper limit
                    }
                }
            };

            var decrease = function()
            {
                if (value() >= ( min_value() + step() ))
                {
                    if (player_id() === 0)
                    {
                        jQuery("#player_purgatory > span").html("Alive");
                        jQuery("#player_purgatory")
                            .removeClass("deceased")
                            .addClass("alive");
                    }
                    value(value() - step()); // Decreased
                }
                // Reached lower limit
                else
                {
                    if (player_id() === 0)
                    {
                        jQuery("#player_purgatory > span").html("Deceased (no health)");
                        jQuery("#player_purgatory")
                            .removeClass("alive")
                            .addClass("deceased");
                    }
                    
                    // Kill off the player
                    if (dead() === false)
                    {
                        value( min_value() );
                        dead(true);
                        toastr.error("Stay alive until the next round", "Player " + (player_id() + 1) + " has been killed");
                    }
                }
            };

            return {
                player_id: player_id,
                dead: dead,
                value: value,
                max_value: max_value,
                step: step,
                progress: progress,
                color: color,
                increase: increase,
                decrease: decrease
            };
        },

		logger: function()
        {
			console.log("Health MODULE loaded");
		}
	};

    return Health;
});