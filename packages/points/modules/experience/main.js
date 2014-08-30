/* 
* @file Experience MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for attaining points based on experience of tasks 
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["Bootstrap", "KO"], function(jQuery, ko)
{
	Experience = {

        /* Properties */
        points: 0,

        /* Initialization method */
        init: function()
        {

        },

        /* ViewModel for this module */
        ViewModel: function()
        {
            // Defaults
            var value = ko.observable( Experience.points ),
                step = ko.observable( parseInt(Config.get('points::experience.default_step')) ),
                min_value = ko.observable( parseInt(Config.get('points::experience.min_value')) ),
                max_value = ko.observable( parseInt(Config.get('points::experience.max_value')) );

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

        /* Allocate ideal number of points based on several criteria */
        allocate_points: function(universal_points)
        {
            // Calculate potential values
            var exchange_rate = parseInt( Config.get('points::experience.exchange_rate') ),
                potential_points = Math.floor(universal_points / exchange_rate),
                max_points = parseInt( Config.get('points::experience.max_value') );

            // Allocate values to be used
            var used_points = (potential_points < max_points) ? potential_points : max_points,
                used_universal_points = (used_points * exchange_rate);

            Experience.points = used_points;

            return used_universal_points;
        },

        /* Log proceedings */
		logger: function()
        {
			console.log("Experience MODULE loaded");
		}
	};

    return Experience;
});