/* 
* @file Score MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling and tracking scores of players
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./KO"], function(jQuery, Crafty, ko) {
	return score = {
		// Module variables (can be overwritten dynamically)
		default_value: 500,
		default_step: 10,
		max_value: 10000,
		min_value: 0,
		
		init: function(){
			// Setup my score
			var my_score = score.default_value;
			jQuery("#my_score").html(my_score);
		},
		ViewModel: function() { 
			this.sp = ko.observable(score.default_value);
			this.step = ko.observable(score.default_step);
    		this.incrementScore = function() {
    			if(this.sp() <= (score.max_value - this.step())){
        			this.sp(this.sp() + this.step()); // Normal increment event
        		}
        		else{
        			this.sp(score.max_value); // Reached increment limit
        		}
    		};
    		this.decrementScore = function() {
    			if(this.sp() >= (score.min_value + this.step())){
        			this.sp(this.sp() - this.step()); // Normal decrement event
        		}
        		else{
        			this.sp(score.min_value); // Reached decrement limit
        		}
    		};
		}
	}
});