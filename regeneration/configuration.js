/* 
* @file Config CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for setting and accessing properties globally across an application
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery"], function(jQuery) {
	return config = {
			
		/* Get a configuration property (similar to Laravel class) */
		get: function(property, default_value){
			
			if (property === undefined) property = "";
		    if (default_value === undefined) default_value = "";
			
			// Set ASYNC AJAX to false
			jQuery.ajaxSetup({
				async: false
			});

			// Extract first string as JSON filename
			var filename = property.substr(0, property.indexOf("."));
			var property = property.substr((property.indexOf(".") + 1), property.length);
			
			// Fetch JSON
			var value = "";
			jQuery.getJSON("config/"+filename+".json", function(data){
				value = data[property];
			});
			
			// Set ASYNC AJAX back to true
			jQuery.ajaxSetup({
				async: true
			});
			
			if (value === undefined){
				return default_value;
			}
			else {
				return value;
			}
		}
	}
});