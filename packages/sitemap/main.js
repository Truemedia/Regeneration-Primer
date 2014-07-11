/**
 * @file Sitemap PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package which provides an area for complete site navigation and general site actions
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, null, null, null, null, null, require('backbone'));
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"stache!./templates/partial", "i18n!./nls/strings", "Config", "Lang", "Package", "Bootstrap", "bootbox"
		], function (template, nls, Config, Lang, Package, jQuery, bootbox) {
      		return (root.returnExportsGlobal = factory(template, nls, Config, Lang, Package, jQuery, bootbox));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (template, nls, Config, Lang, Package, jQuery, bootbox)
	{
	/** 
     * Sitemap package
     * @namespace sitemap
     */
	sitemap = {
			
		// Data attribute binded element
		element_binding: null,
		
		// Activation indication
		active: false,
		
		// Translations
		trans: {},

		// Package options
		settings: null,
	
		/* Load this package */
		init: function()
		{	
			// Register package
			Package.register('sitemap');

			// Load translations
			sitemap.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			sitemap.view();
		},
		
		/* Autoloading hook */
        load: function(element, options)
        {	
        	// Store the element binding
        	sitemap.element_binding = element;
        	
            sitemap.init();
        },
		
		/* Activate this package and associated modules */
		activate: function()
		{	
			// Show as active
			sitemap.active = true;
			
			// Reload DOM
			sitemap.view();
		},
		
		/* Deactivate this package and associated modules */
		deactivate: function()
		{	
			// Show as inactive
			sitemap.active = false;
			
			// Clear DOM
			jQuery(sitemap.element_binding).html("");
		},

		/* Append the HTML for this package to the DOM */
		view: function()
		{
			// Load package data
			jQuery.getJSON("sample_package.json", function(data){
				
				// Append language strings to JSON data source
				data.trans = sitemap.trans;

				// Get language selection dropdown options
				data.languages = Config.get('languages');
				jQuery.each(data.languages, function(index, language) {
					
					// Select option is current language
					if (language.lang_code === localStorage.language) {
						data.languages[index].lang_selected = "selected ";
					}
				});
			
				// Load view
       			jQuery(sitemap.element_binding).html( template(data) );
       			
       			// Register events
       			sitemap.registerEvents();
			});
		},
		
		/* Register jQuery events handlers */
		registerEvents: function()
		{
			// Language selector
			jQuery(sitemap.element_binding).on("change", "#language", function(event) {
				
				var lang_code = jQuery(this).val();
				bootbox.dialog({
					message: sitemap.trans.change_language,
					title: "Change Current Language",
					buttons: {
						cancel: {
							label: "Cancel",
							className: "btn-default",
							callback: function() {
								// TODO: Reset select option to original language choice
							}
						},
						proceed: {
							label: "Ok",
							className: "btn-primary",
							callback: function() {
								Lang.setLocale(lang_code);
							}
						}
					}
				});
			});
		}
	};

	return sitemap;
}));