/* 
* @file Game file/script
* @author Wade Penistone (Truemedia)
* @overview Base script containing entire game instance and methods for controlling all the low levels functions of the game (launching, saving, closing, pausing ect)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
// Logic for the most important game events
define(["./jQuery"], function(jQuery) {
	return Game = {
			
		/* Steps to progress the game */
		steps: {
			
			startup: [
				'characterselection',
				'maps'
			]
		},
			
		/* Proceed the game to the next step */
		proceed: function() {
			alert("Going to the next step");
		}
	}
});