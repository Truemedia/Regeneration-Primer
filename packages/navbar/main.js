/**
 * @file Navbar PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package which provides a website navigation bar for prioritized pages/actions
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, require('jquery'), require('backbone'));
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"stache!./templates/partial", "i18n!./nls/strings", "Bootstrap", "./modules/options/main"
		], function (tpl, nls, jQuery, options) {
      		return (root.returnExportsGlobal = factory(tpl, nls, jQuery, options));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (tpl, nls, jQuery, options)
	{
	/** 
     * Navbar package
     * @namespace navbar
     */
	navbar =
	{
		// Partial loading location	
		element_binding: null,
		
		// Activation indication
		active: false,
		
		settings: null, // Package options
		trans: {}, // Translations
			
		// Variable containing all html from modules
		nested_view: "",
	
		/* Load this package */
		init: function()
		{	
			// Register package
			Package.register('navbar');

			// Load translations
			navbar.trans = Lang.getTrans(nls);
			
			// Activate the package on current web-page
			navbar.activate();
		},
		
		/* Autoloading hook */
        load: function(element, options)
        {	
        	// Store the element binding
        	navbar.element_binding = element;
        	
        	navbar.init();
        },
		
		/* Activate this package and associated modules */
		activate: function()
		{	
			// Show as active
			navbar.active = true;
			
			// Load modules relevant to this package
			navbar.loadModules();
		},
		
		/* Deactivate this package and associated modules */
		deactivate: function()
		{	
			// Show as inactive
			navbar.active = false;
			
			// Clear DOM
			jQuery(navbar.element_binding).html("");
		},
		
		/* Load modules relevant to this package */
		loadModules: function()
		{
			// Run options view (expect callback to trigger rendering itself)
			Options.view();
		},
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function()
		{
			// Load navbar data
			jQuery.getJSON("packages/navbar/data.json", function(data){
				
				// Append language strings to JSON data source
				data.trans = navbar.trans;
			
				// Append modules to view data
				data.options = navbar.nested_view;
			
				// Load view
       			jQuery(navbar.element_binding).html( tpl(data) );
			});
		}
	};

	return navbar;
}));