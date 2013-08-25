/* 
* @file Points SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used as CRUDL API of various point mechanisms relevant to players
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!systems/points/points", "./jQ.ui", "./Crafty", "./KO", "./Health.MOD", "./Score.MOD"], function(view, jQuery, Crafty, ko, health, score) {
	return points = {
			
		// Partial loading location	
		partial_block_element: 'points_partial',
			
		// defaults
		binding_element_class: "score_container",
		
		init: function(){
			
			jQuery.getJSON("systems/characterselection/info/characters_advanced.json", function(data){

				// Mustache
       			document.getElementById(points.partial_block_element).innerHTML = view(data);
 				
 				jQuery(document).ready(function() {
 
 					points.registerBindings(); // Apply all KO bindings
 					/* Start up modules */
 					health.init();
 					console.log("Points PACKAGE loaded");
 					
 					// Hide points debugging (TODO: Make hidden via KO)
 					jQuery('.debug_controls').toggle();
 					jQuery('.debug_controls:first').toggle();
				}); 
			});
		},
		registerBindings: function(){
			/* Iterate multiple binding instances with jQuery */
			jQuery("."+points.binding_element_class).each(function(index) {
				ko.applyBindings(new points.ViewModel(index), this);
			});
		},
		ViewModel: function(player_id) { 
			// Modules with ViewModels for this System
			this.score = new score.ViewModel();
    		this.health = new health.ViewModel(player_id);
		},
		highlightMainPlayer: function(character){
			// Move current character to top of list (shown as highlighted)
			jQuery("#points_partial .score_container:first").before(
				jQuery('#points_partial > .score_container > input.player_object[value='+character+']').parent()
			);
			
			// Label main player as (You) and rest of players as (Bot)
			jQuery("#points_partial .score_container").each(function(charIteration){
				var charName = jQuery(this).children("input.player_object").val();
				var charNumDOM = jQuery(this).children("dl.player_info").children("dt.player_overview").children("span.player_number");

				if(charName == character){ // Populate the player
					jQuery(charNumDOM).append(" (You)");
				}
				else{ // Populate a bot
					jQuery(charNumDOM).append(" (Bot)");
				}
			});
		},
		incrementScore: function(player_id){ // KnockOut function call via Crafty
			/* Execute ViewModel function for this element */
			var firstPlayerScore = jQuery("."+points.binding_element_class+":eq("+player_id+")").get(0);
			var vm = ko.dataFor(firstPlayerScore);
    		vm.score.incrementScore();
		},
		incrementMyScore: function(){ // Execute main score function
			points.incrementScore(0);
		},
		incrementAllScores: function(){ // Execute main score function// KnockOut function call via Crafty
			/* Execute ViewModel function for all elements */
			jQuery("#points_partial .score_container").each(function(charIteration){
				points.incrementScore(charIteration);
			});
		}
	}
});