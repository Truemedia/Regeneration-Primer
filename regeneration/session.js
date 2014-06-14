/* 
* @file Session CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for setting and accessing session variables globally across an application, from application launching to application closing
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["jQuery", "Cookie", "Config"], function(jQuery, Cookie, Config)
{
	Session = {
			
		// Variable to store all session variables
		variables: {},
			
		/* Get a session variable value (same as Laravel class) */
		get: function(property, default_value)
		{	
			if (property === undefined) property = "";
		    if (default_value === undefined) default_value = "";
		    var value = null;

		    // Handle session driver
		    switch(Config.get("client.session_driver")) {
		    	case 'cookie':
		    		value = Cookie.get(property);
		    		break;
		    	case 'variable':
		    		value = Session.variables[property];
		    		break;
		    }
		    
			if (value === null) {
				return default_value;
			}
			else {
				return value;
			}
		},
		
		/* Add or update a session variable (same as Laravel class) */
		put: function(property, supplied_value) {
			
			// Handle session driver
			switch(Config.get("client.session_driver")) {
				case 'cookie':
		    		Cookie.set(property, supplied_value);
		    		break;
		    	case 'variable':
		    		Session.variables[property] = supplied_value;
		    		break;
		    }
		},
		
		/* Deletes a specific session variable (same as Laravel class) */
		forget: function(property) {
			
			// Handle session driver
			switch(Config.get("client.session_driver")) {
				case 'cookie':
		    		Cookie.expire(property);
		    		break;
		    	case 'variable':
		    		if (Session.variables[property] !== undefined) {
				
						delete Session.variables[property];
					}
		    		break;
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
	};

	return Session;
});