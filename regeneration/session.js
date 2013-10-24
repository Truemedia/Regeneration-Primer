/* 
* @file Session CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for setting and accessing session variables globally across an application, from application launching to application closing
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery"], function(jQuery) {
	return Session = {
			
		// Variable to store all session variables
		variables: {},
			
		/* Get a session variable value (same as Laravel class) */
		get: function(property, default_value) {
			
			if (property === undefined) property = "";
		    if (default_value === undefined) default_value = "";

		    var value = Session.variables[property];
		    
			if (value === undefined) {
				return default_value;
			}
			else {
				return value;
			}
		},
		
		/* Add or update a session variable (same as Laravel class) */
		put: function(property, supplied_value) {
			
			Session.variables[property] = supplied_value;
		},
		
		/* Deletes a specific session variable (same as Laravel class) */
		forget: function(property) {
			
			if (Session.variables[property] !== undefined) {
				
				delete Session.variables[property];
			}
		},
		
		/* Retrive all session data (same as Laravel class) */
		all: function() {
			
			return Session.variables;
		},
		
		/* Delete all session data (same as Laravel class) */
		flush: function() {
			
			Session.variables = {};
		}
	}
});