import $ from 'jquery';
import JSONpatch from 'jsonpatch';
import yaml from 'js-yaml';
import Path from './path';

	export var Config = {
			
		// Variable to store all configuration files (original and modifications) as nested JSON when needed
		files: {
			application: [],
			packages: []
		},
			
		/* Get a configuration jsonpath value (same as Laravel class) */
		get: function(jsonpath, default_value = "")
		{
			var current_path = new Path(jsonpath);
		    var value = null;
		    
		    // Extract JSON pointer
			var json_pointer = current_path.extract('json_pointer');
		    
		    // Grab full config
		    var data = Config.instance(jsonpath);
			
		    // Query JSON file
		    if (json_pointer !== '/') { value = new JSONpatch.JSONPointer(json_pointer).get(data); }
		    // Pass back whole JSON file
		    else { value = data; }

			if (value === null) { return default_value; }
			else { return value; }
		},
		
		/* Set a configuration jsonpath value (same as Laravel class) */
		set: function(jsonpath, supplied_value)
		{	
			// Extract filename and JSON pointer
			var current_path = new Path(jsonpath);
			var file_name = current_path.extract('file_name');
			var json_pointer = current_path.extract('json_pointer');

			// Grab full config
		    var data = Config.instance(jsonpath);
			
			// Get original jsonpath value
			var value = new JSONpatch.JSONPointer(json_pointer).get(data);
			
			// Setting Package config jsonpath
			if (current_path.origin() == 'package')
			{
				var package_name = current_path.extract('package_name');
				if (value === undefined)
				{
					Config.files.packages[package_name][file_name] = new JSONpatch.JSONPointer(json_pointer).add(data, supplied_value);
				}
				else
				{
					Config.files.packages[package_name][file_name] = new JSONpatch.JSONPointer(json_pointer).replace(data, supplied_value);
				}
			}
			// Setting Application config jsonpath
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
		
		instance: function(jsonpath)
		{
			// Extract filename
			var current_path = new Path(jsonpath);
			var file_name = current_path.extract('file_name');
			
			// Retrieve JSON instance of config
			var data = null;
			if (current_path.origin() == 'package')
			{	
				var package_name = current_path.extract('package_name');
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
				
				var file_path = `src/packages/${package_name}/config/${file_name}.yml`;
				$.get(file_path, function(data)
				{
					Config.files.packages[package_name][file_name] = yaml.safeLoad(data);
				})
				.fail( function()
				{
					alert(`Failed to find configuration file ${file_path}, please check the file exists`);
				});
			}
			// Application config directory
			else
			{
				var file_path = `src/config/${file_name}.yml`;
				$.get(file_path, function(data)
				{
					Config.files.application[file_name] = yaml.safeLoad(data);
				})
				.fail( function()
				{
					alert(`Failed to find configuration file ${file_path}, please check the file exists`);
				});
			}
			
			// Set ASYNC AJAX back to true
			$.ajaxSetup({ async: true });
		}
	};