/* 
* @file Life MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for allocation and termination of life points 
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["Bootstrap", "KO"], function(jQuery, ko)
{
	Life = {

        /* Initialization method */
        init: function()
        {

        },

        /* ViewModel for this module */
        ViewModel: function(value)
        {
            // Defaults
            var value = ko.observable( parseInt(value) ),
                step = ko.observable( parseInt(Config.get('points::life.default_step')) ),
                min_value = ko.observable( parseInt(Config.get('points::life.min_value')) ),
                max_value = ko.observable( parseInt(Config.get('points::life.max_value')) );

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

        /* Log proceedings */
		logger: function()
        {
			console.log("Life MODULE loaded");
		}
	};

    return Life;
});