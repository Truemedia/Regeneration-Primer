/**
 * @file View Model for Highscores PACKAGE
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
    	module.exports = factory(require('knockout'));
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
 		var rounds = ko.observable(4),
        	points = ko.observable(26700),
        	kills = ko.observable(40),
        	deaths = ko.observable(2),
        	kd_ratio = ko.computed( function() {
          		return (kills() / deaths());
        	});

	    // Return public methods
	    return {
	      rounds: rounds,
          points: points,
          kills: kills,
          deaths: deaths,
          kd_ratio: kd_ratio
	    };
	};
}));