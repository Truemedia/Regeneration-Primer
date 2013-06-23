/* 
* @file Theme SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for controlling, loading and manipulating themes (Snippets of CSS and HTML associated to an interchangeable folder)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!systems/theme/theme", "./Bootstrap", "jQ.Datatables"], function(window, jQuery) {
	return theme = {
	 
	 	// Themes JSON array
	 	themes: [],
	
		// Load the theme system
		init: function() {
		
			// TODO: Move this line to config
			cdn_api_url = "http://api.bootswatch.com";
			
			// Load list of BootSwatch themes via JSON API
			jQuery.getJSON(cdn_api_url, function(data){
			
				// Load initial theme (Cyborg)
				initial_theme_stylesheet = data.themes[3].cssMin;
				initial_theme_image = data.themes[3].thumbnail;
				theme.load(initial_theme_stylesheet, initial_theme_image);
			
				// Mustache
       			document.getElementById('theme_window').innerHTML = window(data);
       			
       			// jQuery events
       			theme.registerEvents();
       			
       			// Use themes as a datatable
       			theme.dataTable();
       			
       			// Save themes in accessible array
       			theme.themes = data.themes;
			});
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
		}
	}
});