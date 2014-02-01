/* 
* @file Score MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling and tracking scores of players
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["Config", "Bootstrap", "KO"], function(Config, jQuery, ko) {
	return Score = {
		
		init: function() {
			// Setup my score
			var my_score = Config.get('points::score.default_value');
			jQuery("#my_score").html(my_score);
		},

		ViewModel: function() {

            // Defaults
			this.sp = ko.observable( parseInt(Config.get('points::score.default_value')) );
			this.step = ko.observable( parseInt(Config.get('points::score.default_step')) );

            // Increase/Decrease methods
    		this.increaseScore = function() {
    			if (this.sp() <= ( parseInt(Config.get('points::score.max_value')) - this.step() )) {
        			this.sp(this.sp() + this.step()); // Normal increment event
        		}
        		else {
        			this.sp( Config.get('points::score.max_value') ); // Reached increment limit
        		}
    		};
    		this.decreaseScore = function() {
    			if (this.sp() >= ( parseInt(Config.get('points::score.min_value')) + this.step() )) {
        			this.sp(this.sp() - this.step()); // Normal decrement event
        		}
        		else {
        			this.sp( parseInt(Config.get('points::score.min_value')) ); // Reached decrement limit
        		}
    		};
		},

		logger: function() {
			console.log("Score MODULE loaded");
		}
	}
});