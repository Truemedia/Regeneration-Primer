/**
 * @file Theme PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for controlling, loading and manipulating themes (Snippets of CSS and HTML associated to an interchangeable folder)
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
			"stache!./templates/modal", "i18n!./nls/strings", "Bootstrap", "jQ.Datatables"
		], function (tpl, nls, jQuery) {
      		return (root.returnExportsGlobal = factory(tpl, nls, jQuery));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (tpl, nls, jQuery)
	{
	/** 
     * Theme package
     * @namespace theme
     */
	theme =
	{ 
	 	// Themes JSON array
	 	themes: [],
	 	
	 	// Data attribute binded element
	 	element_binding: null,
	
		settings: null, // Package options
		trans: {}, // Translations
			
		/* Load this package */
	 	init: function()
	 	{	
	 		// Register package
			Package.register('theme');
	 		
	 		// Load translations
			theme.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			theme.view();
		},
		
		/* Autoloading hook */
        load: function(element, options)
        {	
        	// Store the element binding
        	theme.element_binding = element;
        	    	
        	theme.init();
        },
		
		/* Append the HTML for this package to the DOM */
		view: function()
		{
			// Fetch and load themes
			theme.cdnAPI();
		},

		/* Transform table into datatable using UI config settings */
		dataTable: function()
		{
			jQuery.extend( jQuery.fn.dataTableExt.oStdClasses, {
    			"sWrapper": "dataTables_wrapper form-inline"
			});
			
			jQuery('#swatch-menu').dataTable(Config.instance('theme::datatable.all'));
		},

		/* jQuery event handlers */
		registerEvents: function()
		{
			// Trigger a change in theme
			jQuery("#swatch-menu").on("click", ".bootswatch-theme", function (event){
			
				var theme_stylesheet_url = jQuery(this).attr('href');
				var theme_image_url = jQuery(this).children().attr('src');
				theme.stylesheet(theme_stylesheet_url, theme_image_url);
			});
		},
		
		/* Load theme data, and initial theme based on game config or load random theme if not set */
		initialLoad: function(theme_data) 
		{	
			// Store theme data
			theme.themes = theme_data;
			
			// Load initial theme
			var theme_name = Config.get('game.theme', null);
			if (theme_name !== null) {
				
				// Use theme set in config
				console.log("Theme found in config");
				theme.activate(Config.get('game.theme'));
			} else {
				
				// Use random theme
				console.log("Theme not declared in config, using random theme");
				theme.randomizr();
			}
		},
		
		/* Activate theme based on theme data */
		activate: function(theme_name)
		{
			var initial_theme_stylesheet;
			var initial_theme_image;
			var themes = theme.themes;
			
			for (var single_theme in themes) {
				// Found passed theme
			    if (themes[single_theme].name === theme_name) {
			    	
			    	console.log("Loading the theme: "+theme_name);
			    	initial_theme_stylesheet = themes[single_theme].cssMin;
					initial_theme_image = themes[single_theme].thumbnail;
			    }
			}

			// Load theme
			theme.stylesheet(initial_theme_stylesheet, initial_theme_image);
		
			// Load view
   			jQuery(theme.element_binding).html( tpl(theme) );
   			
   			// jQuery events
   			theme.registerEvents();
   			
   			// Use themes as a datatable
   			theme.dataTable();

   			theme.sidebarFix(theme_name);
		},
		
		/* Pick a theme at random to load up */
		randomizr: function()
		{	
			var themes = theme.themes;
			var random_theme = themes[Math.floor(Math.random()*themes.length)];

			theme.activate(random_theme.name);
		},

		/* Load stylesheet for selected theme using URL and Theme thumbnail sources */
		stylesheet: function(theme_stylesheet_url, theme_image_url)
		{	
			// remove current theme stylesheet
			jQuery('#theme-stylesheet').remove();
			
			// add new theme stylesheet
			jQuery('head').append('<link href="'+theme_stylesheet_url+'" rel="stylesheet" id="theme-stylesheet" />');
			
			// show as current theme
			jQuery('#current-theme').attr('src', theme_image_url);
		},
		
		/* Fix sidebar correctly in relation to theme */
		sidebarFix: function(theme_name)
		{
			var offset;
			
			switch(theme_name) {
				case 'Readable':
					offset = '60';
					break;
				case 'Simplex':
					offset = '40';
					break;
				case 'United':
					offset = '40';
					break;
				case 'Slate':
					offset = '40';
					break;
				case 'Spacelab':
					offset = '40';
					break;
				case 'Superhero':
					offset = '70';
					break;
			}
			
			offset += "px";
			
			// Reposition fixed sidebars
			jQuery('#points_partial').css('top', offset);
			jQuery('.partial-column').css('top', offset);
		},
		
		/* Function use to communicate with a CDN API, and download data for linking to resources */
		cdnAPI: function(cdn_url)
		{
			var cdn_api_url = Config.get('services.bootswatch.url') + "/" + Config.get('services.bootswatch.version') + "/";
			
			// Load list of BootSwatch themes via JSON API
			jQuery.getJSON(cdn_api_url, function(data) {

	   			// Load initial theme
				theme.initialLoad(data.themes);
			})
			// Fallback to function to only use statically set CDN and disable theme selector
			.fail(function() { 

				console.log("CDN is down, falling back to cached resources");

	   			// Load initial theme
	   			theme.initialLoad(Config.get('theme::cached.all'));
			});
		}
	};

	return theme;
}));