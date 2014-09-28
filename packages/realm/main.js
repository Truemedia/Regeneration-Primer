/**
 * @file Realm PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for displaying/loading 3D worlds
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null, require('jquery'), null, null, null, null);
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"Modernizr", "jQuery", "three",
			"./modules/environment/main", "./modules/cameraman/main", "./modules/graphics/main"
		], function (Modernizr, jQuery, THREE, environment, cameraman, graphics) {
      		return (root.returnExportsGlobal = factory(Modernizr, jQuery, THREE, environment, cameraman, graphics));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (Modernizr, jQuery, THREE, environment, cameraman, graphics)
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
			graphics.init(element);
			environment.build();
			cameraman.work(environment.scene, environment.coords);

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
}));