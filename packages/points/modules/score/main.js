/* 
* @file Score MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling and tracking scores of players
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["jQuery", "KO"], function(jQuery, ko) {
	return Score = {

		// Module variables (can be overwritten dynamically)
		default_value: 500,
		default_step: 10,
		max_value: 10000,
		min_value: 0,
		
		init: function(){
			// Setup my score
			var my_score = Score.default_value;
			jQuery("#my_score").html(my_score);
		},

		ViewModel: function() { 
			this.sp = ko.observable(Score.default_value);
			this.step = ko.observable(Score.default_step);
    		this.incrementScore = function() {
    			if(this.sp() <= (Score.max_value - this.step())){
        			this.sp(this.sp() + this.step()); // Normal increment event
        		}
        		else{
        			this.sp(Score.max_value); // Reached increment limit
        		}
    		};
    		this.decrementScore = function() {
    			if(this.sp() >= (Score.min_value + this.step())){
        			this.sp(this.sp() - this.step()); // Normal decrement event
        		}
        		else{
        			this.sp(Score.min_value); // Reached decrement limit
        		}
    		};
		},

		logger: function() {
			console.log("Score MODULE loaded");
		}
	}
});