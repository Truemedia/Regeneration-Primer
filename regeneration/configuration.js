/* 
* @file Config CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for setting and accessing properties globally across an application
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./JSONpatch"], function(jQuery, JSONpatch) {
	return Config = {
			
		// Variable containing all configuration files as JSON
		files: [],
			
		/* Get a configuration property value (same as Laravel class) */
		get: function(property, default_value){
			
			if (property === undefined) property = "";
		    if (default_value === undefined) default_value = "";
		    
		    // Extract filename and JSON pointer
			var file_name = Config.extract('filename', property);
			var json_pointer = Config.extract('jsonpointer', property);
			
			// Query JSON
			var data = Config.load(file_name);
			var value = new JSONpatch.JSONPointer(json_pointer).get(data);

			if (value === undefined){
				return default_value;
			}
			else {
				return value;
			}
		},
		
		/* Set a configuration property value (same as Laravel class) */
		set: function(property, supplied_value){

			// Extract filename and JSON pointer
			var file_name = Config.extract('filename', property);
			var json_pointer = Config.extract('jsonpointer', property);

			var data = Config.load(file_name);
			
			// Merge JSON change
			var value = new JSONpatch.JSONPointer(json_pointer).get(data);

			if (value === undefined){
				Config.files[file_name] = new JSONpatch.JSONPointer(json_pointer).add(data, supplied_value);
			}
			else {
				Config.files[file_name] = new JSONpatch.JSONPointer(json_pointer).replace(data, supplied_value);
			}
		},
		
		/* Return a config json array matched to filename from inside the class */
		load: function(file_name){

			// Load config file if not already loaded
			if (Config.files[file_name] === undefined){
				Config.prepare(file_name);
			}
			
			return Config.files[file_name];
		},
		
		/* Load a config file into the config class*/
		prepare: function(file_name){
			// Set ASYNC AJAX to false
			jQuery.ajaxSetup({
				async: false
			});

			jQuery.getJSON("config/"+file_name+".json", function(data){
				Config.files[file_name] = data;
			});
			
			// Set ASYNC AJAX back to true
			jQuery.ajaxSetup({
				async: true
			});
		},
		
		/* Extract information embedded inside a property */
		extract: function(embedded, property){

			var extracted = null;

			switch(embedded){
				case 'filename':
					extracted = property.substr(0, property.indexOf("."));
					break;
				case 'jsonpointer':
					var string = property.substr(property.indexOf("."), property.length);
					extracted = string.replace(/\./g, "/"); 
					break;
				default:
					extracted = property;
					break;
			}
			
			// Return extracted information
			return extracted;
		}
	}
});