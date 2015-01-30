	export default class Path
	{
		constructor(path, context = "path", package_seperator = "::")
		{
			this.options = {path, context, package_seperator};
		}

		/* Extract information contained inside a this.options.path */
		extract(property)
		{
			var extracted = null;
			var dot_location = this.options.path.indexOf(".");

			switch (property)
			{
				case 'package_name':
					if (this.origin(this.options.path) == 'package')
					{
						extracted = this.options.path.substr(0, this.options.path.indexOf(this.options.package_seperator));
					}
				break;

				case 'file_name':
					// Package config file
					if (this.origin(this.options.path) == 'package')
					{
						var file_name_position = this.options.path.indexOf(this.options.package_seperator) + this.options.package_seperator.length;
						
						// Points to key inside JSON file
						if (dot_location >= 0)
						{	
							extracted = this.options.path.substr(file_name_position, dot_location - file_name_position);
						}
						// Points to a JSON file
						else
						{
							extracted = this.options.path.substr(file_name_position, this.options.path.length - file_name_position);
						}
					}
					// Application config file
					else
					{
						// Points to key inside JSON file
						if (dot_location >= 0)
						{	
							extracted = this.options.path.substr(0, dot_location);
						}
						// Points to a JSON file
						else
						{
							extracted = this.options.path;
						}	
					}
				break;

				case 'json_pointer':
					// Points to key inside JSON file
					if (dot_location >= 0)
					{	
						var string = this.options.path.substr(dot_location);
						extracted = string.replace(/\./g, "/");
					}
					// Points to a JSON file
					else
					{
						extracted = "/";
					}	
				break;

				default:
					extracted = this.options.path;
				break;
			}
			
			// Return extracted information
			return extracted;
		}

		/* Determines this.options.path directory context (application, package) */
		origin()
		{	
			var origin = null;
			
			// Package config file
			if (new RegExp(this.options.package_seperator).test(this.options.path))
			{
				origin = 'package';
			}
			// Application config file
			else
			{
				origin = 'application';
			}

			return origin;
		}
	}