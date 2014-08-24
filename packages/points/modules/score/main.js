/* 
* @file Score MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling and tracking scores of players
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["Config", "Bootstrap", "KO"], function(Config, jQuery, ko)
{
	Score = {
		
		init: function()
        {
			// Setup my score
			var my_score = Config.get('points::score.default_value');
			jQuery("#my_score").html(my_score);
		},

		ViewModel: function(value)
        {
            // Defaults
            var value = ko.observable( parseInt(value) ),
                step = ko.observable( parseInt(Config.get('points::score.default_step')) ),
                min_value = ko.observable( parseInt(Config.get('points::score.min_value')) ),
                max_value = ko.observable( parseInt(Config.get('points::score.max_value')) );

            // Increase/Decrease methods
            var increase = function()
            {
                if (value() <= ( max_value() - step() ))
                {
                    value( value() + step() ); // Increased
                }
                else
                {
                    value( max_value() ); // Reached upper limit
                }
            };

            var decrease = function()
            {
                if (value() >= ( min_value() + step() ))
                {
                    value( value() - step() ); // Decreased
                }
                else
                {
                    value( min_value() ); // Reached lower limit
                }
            };

            // Return public methods
            return {
                value: value,
                step: step,
                increase: increase,
                decrease: decrease
            };
		},

		logger: function()
        {
			console.log("Score MODULE loaded");
		}
	};

    return Score;
});