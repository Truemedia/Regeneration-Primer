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
 		var total_points = (parseInt( Config.get('points::universal.default_value') ) - parseInt(player_id)) * parseInt( Config.get('points::universal.default_step') );

		var attack = new Attack.ViewModel( Config.get('points::attack.default_value') ),
			currency = new Currency.ViewModel( Config.get('points::currency.default_value') ),
			defense = new Defense.ViewModel( Config.get('points::defense.default_value') ),
			experience = new Experience.ViewModel( Config.get('points::experience.default_value') ),
			health = new Health.ViewModel(player_id),
			life = new Life.ViewModel( Config.get('points::life.default_value') ),
			reputation = new Reputation.ViewModel( Config.get('points::reputation.default_value') ),
			score = new Score.ViewModel( Config.get('points::score.default_value') ),
			universal = new Universal.ViewModel( Config.get('points::universal.default_value') );

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