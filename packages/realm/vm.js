/**
 * @file View Model for Realm PACKAGE
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
 		var observable_string = ko.observable('lorem ipsum'),
        	observable_integer = ko.observable(1),
	        computed_string = ko.computed( function() {
	          return observable_string() + observable_integer();
	        });

	    // Return public methods
	    return {
	    	observable_string: observable_string,
	    	observable_integer: observable_integer,
	    	computed_string: computed_string
	    };
	};
}));