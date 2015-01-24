import {Package} from 'src/core/package';
import {nls} from './nls/strings';

	/** 
     * Character Customization package
     * @class
     */
	export default class CharacterCustomization extends Package
	{			
		/**
		 * Autoloading hook
		 * @constructs CharacterCustomization
		 * @param {object} element - HTML element the package is tied to in the DOM.
		 * @param {object} options - JSON string of options passed from the data-options attribute.
		 */
        constructor(element, options = {})
        {
        	let resources = {nls};
        	super(element, options, resources);
        }
	}