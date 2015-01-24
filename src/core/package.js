import $ from 'jquery';

	export class Package
	{				
		/**
		 * Autoloading hook
		 * @param {object} element - HTML element the package is tied to in the DOM.
		 * @param {object} options - JSON string of options passed from the data-options attribute.
		 */
        constructor(element, options = {}, resources = {})
        {
        	let nls = resources.nls;

        	this.element = element;
        	this.settings = (Object.keys(options).length === 0) ? Config.get(`${this.name}::defaults`) : options; // Package options
        	this.trans = Lang.getTrans(nls); // Load translations
        }

		set element(element)
		{
			this.name = $(element).attr('data-package');
			return element;
		}
	}

	export var Config = {
		get(jsonpath)
		{
			console.log(jsonpath);
			var sample_config_json = {
        		"hello": "world"
        	};
			return sample_config_json;
		}
	};

	export var Lang = {
		getTrans(nls = {})
		{
			return nls;
		}
	};