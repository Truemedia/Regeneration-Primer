import $ from 'jquery';
import JSONpatch from 'jsonpatch';

	export var Config = {
			
		// Variable to store all configuration files (original and modifications) as nested JSON when needed
		files: {
			application: [],
			packages: []
		},
			
		/* Get a configuration property value (same as Laravel class) */
		get: function(property, default_value)
		{	
			if (property === undefined) property = "";
		    if (default_value === undefined) default_value = "";
		    var value = null;
		    
		    // Extract JSON pointer
			var json_pointer = Config.property_extract('json_pointer', property);
		    
		    // Grab full config
		    var data = Config.instance(property);
			
		    // Query JSON file
		    if (json_pointer !== '/') { value = new JSONpatch.JSONPointer(json_pointer).get(data); }
		    // Pass back whole JSON file
		    else { value = data; }

			if (value === null) { return default_value; }
			else { return value; }
		},
		
		/* Set a configuration property value (same as Laravel class) */
		set: function(property, supplied_value)
		{	
			// Extract filename and JSON pointer
			var file_name = Config.property_extract('file_name', property);
			var json_pointer = Config.property_extract('json_pointer', property);

			// Grab full config
		    var data = Config.instance(property);
			
			// Get original property value
			var value = new JSONpatch.JSONPointer(json_pointer).get(data);
			
			// Setting Package config property
			if (Config.property_origin(property) == 'package')
			{
				var package_name = Config.property_extract('package_name', property);
				if (value === undefined)
				{
					Config.files.packages[package_name][file_name] = new JSONpatch.JSONPointer(json_pointer).add(data, supplied_value);
				}
				else
				{
					Config.files.packages[package_name][file_name] = new JSONpatch.JSONPointer(json_pointer).replace(data, supplied_value);
				}
			}
			// Setting Application config property
			else
			{
				if (value === undefined)
				{
					Config.files.application[file_name] = new JSONpatch.JSONPointer(json_pointer).add(data, supplied_value);
				}
				else
				{
					Config.files.application[file_name] = new JSONpatch.JSONPointer(json_pointer).replace(data, supplied_value);
				}
			}
		},
		
		instance: function(property)
		{
			// Extract filename
			var file_name = Config.property_extract('file_name', property);
			
			// Retrieve JSON instance of config
			var data = null;
			if (Config.property_origin(property) == 'package')
			{	
				var package_name = Config.property_extract('package_name', property);
				data = Config.load(file_name, package_name);
			}
			else
			{	
				data = Config.load(file_name);
			}
			
			// Return JSON instance
			return data;
		},
		
		/* Return a config json array matched to filename from inside the class */
		load: function(file_name, package_name)
		{	
			if (package_name === undefined) package_name = "";

			// Load config file if not already loaded
			
			// Package config prepare
			if (package_name !== "")
			{
				if (Config.files.packages[package_name] === undefined || Config.files.packages[package_name][file_name] === undefined)
				{
					Config.prepare(file_name, package_name);
				}
				return Config.files.packages[package_name][file_name];
			}
			// Application config prepare
			else
			{
				if (Config.files.application[file_name] === undefined)
				{
					Config.prepare(file_name);
				}
				return Config.files.application[file_name];
			}
		},
		
		/* Load a config file into the config class*/
		prepare: function(file_name, package_name)
		{	
			if (package_name === undefined) package_name = "";
			var config_dir = "";
			
			// Set ASYNC AJAX to false
			$.ajaxSetup({ async: false });

			// Package config directory
			if (package_name !== "")
			{	
				// Package has no config files loaded
				if (Config.files.packages[package_name] === undefined) {
					Config.files.packages[package_name] = [];
				}
				
				$.getJSON(`src/packages/${package_name}/config/${file_name}.json`, function(data)
				{
					Config.files.packages[package_name][file_name] = data;
				});
			}
			// Application config directory
			else
			{
				$.getJSON(`src/config/${file_name}.json`, function(data)
				{
					Config.files.application[file_name] = data;
				});
			}
			
			// Set ASYNC AJAX back to true
			$.ajaxSetup({ async: true });
		},
		
		/* Extract information embedded inside a property */
		property_extract: function(embedded, property)
		{
			var extracted = null;
			var package_indicator = '::';
			var dot_location = property.indexOf(".");

			switch (embedded)
			{
				case 'package_name':
					if (Config.property_origin(property) == 'package')
					{
						extracted = property.substr(0, property.indexOf(package_indicator));
					}
				break;

				case 'file_name':
					// Package config file
					if (Config.property_origin(property) == 'package')
					{
						var file_name_position = property.indexOf(package_indicator) + package_indicator.length;
						
						// Points to key inside JSON file
						if (dot_location >= 0)
						{	
							extracted = property.substr(file_name_position, dot_location - file_name_position);
						}
						// Points to a JSON file
						else
						{
							extracted = property.substr(file_name_position, property.length - file_name_position);
						}
					}
					// Application config file
					else
					{
						// Points to key inside JSON file
						if (dot_location >= 0)
						{	
							extracted = property.substr(0, dot_location);
						}
						// Points to a JSON file
						else
						{
							extracted = property;
						}	
					}
				break;

				case 'json_pointer':
					// Points to key inside JSON file
					if (dot_location >= 0)
					{	
						var string = property.substr(dot_location);
						extracted = string.replace(/\./g, "/");
					}
					// Points to a JSON file
					else
					{
						extracted = "/";
					}	
				break;

				default:
					extracted = property;
				break;
			}
			
			// Return extracted information
			return extracted;
		},
		
		/* Return whether property originates from application or package config file */
		property_origin: function(property)
		{	
			var property_origin = null;
			
			// Package config file
			if (new RegExp('::').test(property))
			{
				property_origin = 'package';
			}
			// Application config file
			else
			{
				property_origin = 'application';
			}

			return property_origin;
		}
	};