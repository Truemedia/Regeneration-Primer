import {Config} from './config';
import Path from './path';
import $ from 'jquery';
	
	export default class Resource
	{
		constructor(jsonpath, cb, context = "template", precompiled = false)
		{
			this.options = {jsonpath, precompiled, context, cb};
			this.path = new Path(this.options.jsonpath);
		}

		/* Information related to resource */
		get info()
		{
			let name = this.path.extract('file_name');
			let package_name = this.path.extract('package_name');
			return {name, package_name};
		}

		/* Get file extension based on context */
		get ext()
		{
			var extension = null;

			switch (this.options.context)
			{
				case 'template':
					extension = Config.get('resources.templates.extension');
				break;
			}

			return extension;
		}

		/* Load source file into memory */
		get file()
		{
			var self = this;

			let file_name = `${this.info.name}.${this.ext}`;

			let directories = [];

			// Package directory
			if (this.path.origin() == 'package')
			{
				directories.push("packages", this.info.package_name);
			}
			
			switch (this.options.context)
			{
				case 'template':
					directories.push("templates", "src");
				break;
			}

			let cwd = directories.join('/');

			var file_path = `/${cwd}/${file_name}`;

			var load_resource = Promise.resolve( $.get(file_path) );
			load_resource.then( function(file_contents)
			{
				// Load file and run callback
				self.options.cb(file_contents);
			});
		}

		/* Output the file path to the current source asset */
		file_path()
		{
			let path = `packages/${this.name}/templates/src/partial.hbs`;
			return path;
		}
	};