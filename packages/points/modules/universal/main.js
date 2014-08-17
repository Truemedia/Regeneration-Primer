/* 
* @file Universal MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for universal point rationing, allocation and rates 
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["Bootstrap", "KO"], function(jQuery, ko)
{
	Universal = {

        /* Initialization method */
        init: function()
        {

        },

        /* ViewModel for this module */
		ViewModel: function()
        {
            // Knockout variables
            var string = ko.observable('');

            // Return public methods
            return {
              string: string
            };
		},

        /* Log proceedings */
		logger: function()
        {
			console.log("Universal MODULE loaded");
		}
	};

    return Universal;
});