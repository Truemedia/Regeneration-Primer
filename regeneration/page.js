/* 
* @file Page CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for working with interacting with page events (manipulating packages within the DOM)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery"], function(jQuery) {
	return Page = {

		/* Interact with the fixed sidebars in the DOM of the application */
		sidebar: function(hook, action) {

			switch (hook) {
				case 'left':
					if (action === 'toggle') {

						jQuery('#points_partial').toggle();
						console.log("Hiding or showing points panel");
					}
				break;
				case 'right':
					if (action === 'toggle') {

						jQuery('.partial-column').toggle();
						console.log("Hiding or showing profile & inventory panels");
					}
				break;
			}
		}
	}
});