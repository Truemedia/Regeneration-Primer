/* 
* @file Lang CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for working with manipulating languages in multi-lingual applications
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery"], function(jQuery) {
	return Lang = {

		/* Set the language used for the application (same as function in App Laravel class) */
		setLocale: function(lang_code) {
			
			// Change language
			localStorage['language'] = lang_code;
			
			// Refresh the page (will pickup language change)
			location.reload();
		},
		
		/* Return all language strings (Merge package translations with main application translations) */
		getTrans: function(strings) {
			
			// TODO: Create the actual merger code instead of using as dummy function
			return strings;
		}
	}
});