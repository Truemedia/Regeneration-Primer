/* 
* @file Theme PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for controlling, loading and manipulating themes (Snippets of CSS and HTML associated to an interchangeable folder)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/theme/partial", "./Bootstrap", "jQ.Datatables"], function(view, jQuery) {
	return theme = {
	 
	 	// Themes JSON array
	 	themes: [],
	 	
	 	// Partial loading location	
		partial_block_element: 'theme_partial',
	
		// Load the theme system
		init: function() {
		
			// Fetch and load themes
			theme.cdnAPI();
		},

		dataTable: function(){
			jQuery.extend( jQuery.fn.dataTableExt.oStdClasses, {
    			"sWrapper": "dataTables_wrapper form-inline"
			});
			
			jQuery('#swatch-menu').dataTable({
				// Pagination
        		"bPaginate": true,
        		//"sPaginationType": "bootstrap",
        		"bLengthChange": false,
        		
        		// Limits
        		"iDisplayLength": 5, 
        		
        		// Default overrides
        		"sDom": "<'row-fluid'<'span6'T><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
        		"bFilter": false,
        		"bSort": false,
        		"bInfo": true,
        		"bAutoWidth": false
    		});
		},

		registerEvents: function() { /* jQuery event handlers (for Theme) */
			// Trigger a change in theme
			jQuery("#swatch-menu").on("click", ".bootswatch-theme", function (event){
			
				var theme_stylesheet_url = jQuery(this).attr('href');
				var theme_image_url = jQuery(this).children().attr('src');
				theme.load(theme_stylesheet_url, theme_image_url);
			});

		/* jQuery event handlers (for Theme) */ },

		load: function(theme_stylesheet_url, theme_image_url) {
			
			// remove current theme stylesheet
			jQuery('#theme-stylesheet').remove();
			
			// add new theme stylesheet
			jQuery('head').append('<link href="'+theme_stylesheet_url+'" rel="stylesheet" id="theme-stylesheet" />');
			
			// show as current theme
			jQuery('#current-theme').attr('src', theme_image_url);
		},
		
		cdnAPI: function(){
		
			// function use to communicate with a CDN API, and download data for linking to resources
			// TODO: Move this line to config
			cdn_api_url = "http://api.bootswatch.com";
			
			// Load list of BootSwatch themes via JSON API
			jQuery.getJSON(cdn_api_url, function(data){
			
				// Load initial theme (Cyborg)
				initial_theme_stylesheet = data.themes[3].cssMin;
				initial_theme_image = data.themes[3].thumbnail;
				theme.load(initial_theme_stylesheet, initial_theme_image);
			
				// Mustache
       			document.getElementById(theme.partial_block_element).innerHTML = view(data);
       			
       			// jQuery events
       			theme.registerEvents();
       			
       			// Use themes as a datatable
       			theme.dataTable();
       			
       			// Save themes in accessible array
       			theme.themes = data.themes;
       			
       			console.log("Theme PACKAGE loaded");
			})
			// Fallback to function to only use statically set CDN and disable theme selector
			.fail(function() { 
				
				// TODO: Make this temporary variable usable in a config
				var bootstrap_version = '2';
				console.log("CDN is down, diverting resources and disabling theme selector");
				theme.load("http://bootswatch.com/"+bootstrap_version+"/cyborg/bootstrap.css", "http://bootswatch.com/cyborg/thumbnail.png");
			})
		}
	}
});