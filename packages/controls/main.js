/* 
* @file Controls PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/controls/partial", "./Bootstrap", "./Crafty"], function(view, jQuery, Crafty) {
	return controls = {
		
		// Partial loading location	
		partial_block_element: 'controls_partial',
				
		init: function(){
		 		
		 	// Build data
		 	data = {
		 		screens: {
			 		"view_scores": "SHIFT",
			 		"toggle_inventory": "SPACE"
		 		},
		 		player: {
		 			"move_up": "W",
		 			"move_left": "A",
		 			"move_down": "S",
		 			"move_right": "D"
		 		},
		 		weapons: {
			 		"shoot": "LEFT CLICK",
			 		"throw_away_mag": "T",
			 		"enter_new_mag": "E",
			 		"reconnect_new_mag": "R",
			 		"chamber": "C"
		 		}
		 	};
				
			// Load view
	       	document.getElementById(controls.partial_block_element).innerHTML = view(data);
	       		
			console.log("Controls PACKAGE loaded");
		},
			
		mapper: function(){
			Crafty.c("LeftControls", {
    			init: function() {
       				this.requires('Multiway');
    			},
    
    			leftControls: function(speed) {
        			this.multiway(speed, {W: -90, S: 90, D: 0, A: 180})
        			return this;
   				}  
			});
		}
	}
});