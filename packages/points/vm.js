/**
 * @file View Model for points
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
	return function (player_id)
	{
 		// Modules with ViewModels for this package
		var attack = new Attack.ViewModel(),
			currency = new Currency.ViewModel(),
			defense = new Defense.ViewModel(),
			experience = new Experience.ViewModel(),
			health = new Health.ViewModel(player_id),
			life = new Life.ViewModel(),
			reputation = new Reputation.ViewModel(),
			score = new Score.ViewModel(),
			universal = new Universal.ViewModel();

	    // Return public methods
	    return {
	    	ap: attack,
			cp: currency,
			dp: defense,
			ep: experience,
			hp: health,
			lp: life,
			rp: reputation,
			sp: score,
			up: universal
	    };
	};
}));