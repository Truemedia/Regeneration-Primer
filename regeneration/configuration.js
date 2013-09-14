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
			
		// Variable to store all configuration files (original and modifications) as nested JSON when needed
		files: {
			application: [],
			packages: []
		},
			
		/* Get a configuration property value (same as Laravel class) */
		get: function(property, default_value) {
			
			if (property === undefined) property = "";
		    if (default_value === undefined) default_value = "";
		    
		    // Extract JSON pointer
			var json_pointer = Config.property_extract('json_pointer', property);
		    
		    // Grab full config
		    var data = Config.instance(property);
			
		    // Query JSON
			var value = new JSONpatch.JSONPointer(json_pointer).get(data);

			if (value === undefined) {
				return default_value;
			}
			else {
				return value;
			}
		},
		
		/* Set a configuration property value (same as Laravel class) */
		set: function(property, supplied_value) {
			
			// Extract filename and JSON pointer
			var file_name = Config.property_extract('file_name', property);
			var json_pointer = Config.property_extract('json_pointer', property);

			// Grab full config
		    var data = Config.instance(property);
			
			// Get original property value
			var value = new JSONpatch.JSONPointer(json_pointer).get(data);
			
			// Setting Package config property
			if (Config.property_origin(property) == 'package') {

				var package_name = Config.property_extract('package_name', property);
				if (value === undefined) {
					Config.files.packages[package_name][file_name] = new JSONpatch.JSONPointer(json_pointer).add(data, supplied_value);
				}
				else {
					Config.files.packages[package_name][file_name] = new JSONpatch.JSONPointer(json_pointer).replace(data, supplied_value);
				}
			}
			// Setting Application config property
			else {

				if (value === undefined) {
					Config.files.application[file_name] = new JSONpatch.JSONPointer(json_pointer).add(data, supplied_value);
				}
				else {
					Config.files.application[file_name] = new JSONpatch.JSONPointer(json_pointer).replace(data, supplied_value);
				}
			}
		},
		
		instance: function(property) {

			// Extract filename
			var file_name = Config.property_extract('file_name', property);
			
			// Retrieve JSON instance of config
			var data = null;
			if (Config.property_origin(property) == 'package') {
				
				var package_name = Config.property_extract('package_name', property);
				data = Config.load(file_name, package_name);
			}
			else {
				
				data = Config.load(file_name);
			}
			
			// Return JSON instance
			return data;
		},
		
		/* Return a config json array matched to filename from inside the class */
		load: function(file_name, package_name) {
			
			if (package_name === undefined) package_name = "";

			// Load config file if not already loaded
			
			// Package config prepare
			if (package_name !== "") {

				if (Config.files.packages[package_name] === undefined || Config.files.packages[package_name][file_name] === undefined) {
					Config.prepare(file_name, package_name);
				}
				return Config.files.packages[package_name][file_name];
			}
			// Application config prepare
			else {

				if (Config.files.application[file_name] === undefined) {
					Config.prepare(file_name);
				}
				return Config.files.application[file_name];
			}
		},
		
		/* Load a config file into the config class*/
		prepare: function(file_name, package_name) {
			
			if (package_name === undefined) package_name = "";
			
			// Set ASYNC AJAX to false
			jQuery.ajaxSetup({
				async: false
			});

			// Package config directory
			if (package_name !== "") {
				
				// Package has no config files loaded
				if (Config.files.packages[package_name] === undefined) {
					Config.files.packages[package_name] = [];
				}
				
				var config_dir = "packages/" + package_name + "/config/";
				jQuery.getJSON(config_dir+file_name+".json", function(data) {
					Config.files.packages[package_name][file_name] = data;
				});
			}
			// Application config directory
			else {
				var config_dir = "config/";
				jQuery.getJSON(config_dir+file_name+".json", function(data) {
					Config.files.application[file_name] = data;
				});
			}
			
			// Set ASYNC AJAX back to true
			jQuery.ajaxSetup({
				async: true
			});
		},
		
		/* Extract information embedded inside a property */
		property_extract: function(embedded, property) {

			var extracted = null;
			var package_indicator = '::';

			switch(embedded){
				case 'package_name':
					
					if (Config.property_origin(property) == 'package') {
						extracted = property.substr(0, property.indexOf(package_indicator));
					}
					break;
				case 'file_name':
					
					// Package config file
					if (Config.property_origin(property) == 'package') {

						var file_name_position = property.indexOf(package_indicator) + package_indicator.length;
						extracted = property.substr(file_name_position, property.indexOf(".") - file_name_position);
					}
					// Application config file
					else {
	
						extracted = property.substr(0, property.indexOf("."));
					}
					break;
				case 'json_pointer':
					
					// Package or Application JSON pointer
					var string = property.substr(property.indexOf("."));
					extracted = string.replace(/\./g, "/");
					break;
				default:
					extracted = property;
					break;
			}
			
			// Return extracted information
			return extracted;
		},
		
		/* Return whether property originates from application or package config file */
		property_origin: function(property) {
			
			var property_origin = null;
			
			if (new RegExp('::').test(property)) {

				// Package config file
				property_origin = 'package';
			}
			else {

				// Application config file
				property_origin = 'application';
			}
			
			return property_origin;
		}
	}
});