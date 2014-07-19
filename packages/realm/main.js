/**
 * @file Realm PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for displaying/loading 3D worlds
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"Modernizr", "jQuery", "three",
	"./environment/main", "./cameraman/main", "./graphics/main"
], function(Modernizr, jQuery, THREE, environment, cameraman, graphics)
{
	/** 
     * Realm package
     * @namespace realm
     */
	realm = {
		
		// Package options
		settings: null,
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(element, options)
		{		
			cameraman.work(environment.scene);
			graphics.init(element);
			environment.build();
			jQuery(document).ready( function()
			{
				console.log("Render stuff");
				graphics.display(environment.scene, cameraman.cameras[0]);
			});
		},
			
		/* Autoloading hook */
	    load: function(element, options)
	    {
	    	this.init(element, options);
	    }
	};

	return realm;
});