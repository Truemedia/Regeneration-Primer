import $ from 'jquery';
import BackBone from 'backbone';
import {Config} from './config';

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

        	console.log(this.settings);
        	$(element).html('adding HTML from package');
        }

		set element(element)
		{
			this.name = $(element).attr('data-package');
			return element;
		}
	}

	export var Lang = {
		getTrans(nls = {})
		{
			return nls;
		}
	};