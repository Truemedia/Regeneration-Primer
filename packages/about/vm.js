/**
 * @file View Model for PACKAGE_NAME PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview KnockoutJS implementation of package view model
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
(function (root, factory)
{
	if (typeof exports === 'object') // NodeJS
	{
    	module.exports = factory(null);
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"KO"
		], function (ko) {
      		return (root.returnExportsGlobal = factory(ko));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (ko)
	{
	/** 
    * ViewModel
    * @namespace package_name
    */
  "use strict";
	return function ()
	{
 		var current_player_count = ko.observable(1),
        max_player_count = ko.observable(8),
        remaining_player_count = ko.computed( function() {
          return max_player_count() - current_player_count();
        });

    // Return public methods
    return {
      current_player_count: current_player_count,
      max_player_count: max_player_count,
      remaining_player_count: remaining_player_count
    };
	};
}));