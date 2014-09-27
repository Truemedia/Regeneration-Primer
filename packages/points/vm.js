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
    	module.exports = factory(null, require('backbone'), require('knockout'), null, null, null, null, null, null, null, null, null);
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([
			"accounting", "Backbone", "KO",
			'./modules/attack/main', './modules/currency/main', './modules/defense/main', './modules/experience/main',
			'./modules/health/main', './modules/life/main', './modules/reputation/main', './modules/score/main', './modules/universal/main'
		], function (accounting, Backbone, ko, Attack, Currency, Defense, Experience, Health, Life, Reputation, Score, Universal) {
      		return (root.returnExportsGlobal = factory(accounting, Backbone, ko, Attack, Currency, Defense, Experience, Health, Life, Reputation, Score, Universal));
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function (accounting, Backbone, ko, Attack, Currency, Defense, Experience, Health, Life, Reputation, Score, Universal)
	{
	/** 
    * ViewModel
    * @namespace package_name
    */
  	"use strict";
	return function (player_id)
	{
		// Custom variables
		var universal_points = (parseInt( Config.get('points::universal.default_value') ) - parseInt(player_id)) * parseInt( Config.get('points::universal.default_step') ),
 			total_points = ko.observable(universal_points),
 			total_points_formatted = ko.computed( function()
 			{
 				return accounting.formatMoney(total_points(), Config.get('points::universal.symbol'), 0);
 			});

		var exchange_rates = {
			attack: parseInt( Config.get('points::attack.exchange_rate') ),
			currency: parseInt( Config.get('points::currency.exchange_rate') ),
			defense: parseInt( Config.get('points::defense.exchange_rate') ),
			experience: parseInt( Config.get('points::experience.exchange_rate') ),
			life: parseInt( Config.get('points::life.exchange_rate') ),
			reputation: parseInt( Config.get('points::reputation.exchange_rate') ),
			score: parseInt( Config.get('points::score.exchange_rate') )
		};

		// Use route to determine game and apply appropriate settings
		switch (Backbone.history.fragment)
		{
			// 1 VS 1000 (ordered by most expensive points)
			case '3D':
				universal_points -= Life.allocate_points(universal_points);
				universal_points -= Health.allocate_points(universal_points);
				universal_points -= Attack.allocate_points(universal_points);
				universal_points -= Defense.allocate_points(universal_points);
				universal_points -= Currency.allocate_points(universal_points);
				universal_points -= Experience.allocate_points( parseInt(Config.get('points::experience.min_value')) * exchange_rates.experience );
				universal_points -= Reputation.allocate_points( parseInt(Config.get('points::reputation.min_value')) * exchange_rates.reputation );
				universal_points -= Score.allocate_points( parseInt(Config.get('points::score.min_value')) * exchange_rates.score );
			break;

			// DIY DIE (fixed amount same for all players)
			default:
				Attack.allocate_points( parseInt(Config.get('points::attack.default_value')) * exchange_rates.attack );
				Currency.allocate_points( parseInt(Config.get('points::currency.default_value')) * exchange_rates.currency );
				Defense.allocate_points( parseInt(Config.get('points::defense.default_value')) * exchange_rates.defense );
				Experience.allocate_points( parseInt(Config.get('points::experience.default_value')) * exchange_rates.experience );
				Life.allocate_points( parseInt(Config.get('points::life.default_value')) * exchange_rates.life );
				Reputation.allocate_points( parseInt(Config.get('points::reputation.default_value')) * exchange_rates.reputation );
				Score.allocate_points( parseInt(Config.get('points::score.default_value')) * exchange_rates.score );
				universal_points = Config.get('points::universal.default_value');
			break;
		}

 		// Modules with ViewModels for this package
		var attack = new Attack.ViewModel(),
			currency = new Currency.ViewModel(),
			defense = new Defense.ViewModel(),
			experience = new Experience.ViewModel(),
			health = new Health.ViewModel(player_id),
			life = new Life.ViewModel(),
			reputation = new Reputation.ViewModel(),
			score = new Score.ViewModel(),
			universal = new Universal.ViewModel(universal_points);

	    // Return public methods
	    return {
	    	total_points_formatted: total_points_formatted,
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