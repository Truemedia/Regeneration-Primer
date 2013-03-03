// Scores module
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return scores = {
		// defaults
		scores_db: "scores",
		players_score_prefix: "player_",
		players_score_suffix: "_score",
		players_score_increment_prefix: "player_",
		players_score_increment_suffix: "_score_increment",
		players_starting_score: 500,
		score_increment: 10,

		initialGameScoreValues: function (){
			Crafty.storage.open(scores.scores_db);
			// Static until coded better 
			// one
			Crafty.storage.save(scores.players_score_prefix + "one" + scores.players_score_suffix, 'save', scores.players_starting_score);
			Crafty.storage.save(scores.players_score_increment_prefix + "one" + scores.players_score_increment_suffix, 'save', scores.score_increment);
			// two
			Crafty.storage.save(scores.players_score_prefix + "two" + scores.players_score_suffix, 'save', scores.players_starting_score);
			Crafty.storage.save(scores.players_score_increment_prefix + "two" + scores.players_score_increment_suffix, 'save', scores.score_increment);
			// three
			Crafty.storage.save(scores.players_score_prefix + "three" + scores.players_score_suffix, 'save', scores.players_starting_score);
			Crafty.storage.save(scores.players_score_increment_prefix + "three" + scores.players_score_increment_suffix, 'save', scores.score_increment);
			// four
			Crafty.storage.save(scores.players_score_prefix + "four" + scores.players_score_suffix, 'save', scores.players_starting_score);
			Crafty.storage.save(scores.players_score_increment_prefix + "four" + scores.players_score_increment_suffix, 'save', scores.score_increment);
			// five
			Crafty.storage.save(scores.players_score_prefix + "five" + scores.players_score_suffix, 'save', scores.players_starting_score);
			Crafty.storage.save(scores.players_score_increment_prefix + "five" + scores.players_score_increment_suffix, 'save', scores.score_increment);
			// six
			Crafty.storage.save(scores.players_score_prefix + "six" + scores.players_score_suffix, 'save', scores.players_starting_score);
			Crafty.storage.save(scores.players_score_increment_prefix + "six" + scores.players_score_increment_suffix, 'save', scores.score_increment);
			// seven
			Crafty.storage.save(scores.players_score_prefix + "seven" + scores.players_score_suffix, 'save', scores.players_starting_score);
			Crafty.storage.save(scores.players_score_increment_prefix + "seven" + scores.players_score_increment_suffix, 'save', scores.score_increment);
			// eight
			Crafty.storage.save(scores.players_score_prefix + "eight" + scores.players_score_suffix, 'save', scores.players_starting_score);
			Crafty.storage.save(scores.players_score_increment_prefix + "eight" + scores.players_score_increment_suffix, 'save', scores.score_increment);
		},
		setScore: function(old_score, score_incrementer, player_number_as_word){
			new_score = parseInt(old_score) + parseInt(scores.score_increment);
			Crafty.storage.open(scores.scores_db);
			// Set dynamic key
			var players_score = scores.players_score_prefix + player_number_as_word + scores.players_score_suffix;
			Crafty.storage.save(players_score, 'save', new_score);
	
			// Feedback information to DOM
			scores.getJSONkeyFromJSONvalue("constants/numbers_as_words.json", player_number_as_word, new_score)
		},
		setScoreDOM: function(score, player_id){
			jQuery('button[value="'+parseInt(player_id)+'"].score_submit').prev().html(score);
			if(player_id == 1){
				// This is us
				jQuery('#my_score').html(score);
			}	
		},
		getScoreIncrement: function(old_score, player_number_as_word){
			Crafty.storage.open(scores.scores_db);
			// Set dynamic key
			var players_score_increment = scores.players_score_increment_prefix + player_number_as_word + scores.players_score_increment_suffix;
			Crafty.storage.load(players_score_increment, 'save', function(data, po){
				// Once incrementer retrived, proceed to update score
				scores.setScore(old_score, data, player_number_as_word);	
			});
			return(scores.score_increment);
		},
		getScore: function(player_number_as_word){
			Crafty.storage.open(scores.scores_db);
			// Set dynamic key
			var players_score = scores.players_score_prefix + player_number_as_word + scores.players_score_suffix;
			Crafty.storage.load(players_score, 'save', function(data, po){
				// Once score retrieved get increment while passing info
				scores.getScoreIncrement(data, player_number_as_word);	
			});
		},
		incrementScore: function(player_number_as_word){
			scores.getScore(player_number_as_word);
		},
		getJSONkeyFromJSONvalue: function(json_file, player_number_as_word, score){
			jQuery.getJSON(json_file, function(json) {
				jQuery.each(json, function(key, value) {
  					if(value == player_number_as_word){
  						// Got player id so use it to set score on DOM
  						scores.setScoreDOM(score, key);
  					}
				});
			});
		}
	}
});