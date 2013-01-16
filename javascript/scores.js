// defaults
var scores_db = "scores";
var players_score_prefix = "player_"
var players_score_suffix = "_score";
var players_score_increment_prefix = "player_";
var players_score_increment_suffix = "_score_increment";
var players_starting_score = 500;
var score_increment = 10;

function initialGameScoreValues(){
	Crafty.storage.open(scores_db);
	// Static until coded better 
	// one
	Crafty.storage.save(players_score_prefix + "one" + players_score_suffix, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment_prefix + "one" + players_score_increment_suffix, 'save', score_increment);
	// two
	Crafty.storage.save(players_score_prefix + "two" + players_score_suffix, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment_prefix + "two" + players_score_increment_suffix, 'save', score_increment);
	// three
	Crafty.storage.save(players_score_prefix + "three" + players_score_suffix, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment_prefix + "three" + players_score_increment_suffix, 'save', score_increment);
	// four
	Crafty.storage.save(players_score_prefix + "four" + players_score_suffix, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment_prefix + "four" + players_score_increment_suffix, 'save', score_increment);
	// five
	Crafty.storage.save(players_score_prefix + "five" + players_score_suffix, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment_prefix + "five" + players_score_increment_suffix, 'save', score_increment);
	// six
	Crafty.storage.save(players_score_prefix + "six" + players_score_suffix, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment_prefix + "six" + players_score_increment_suffix, 'save', score_increment);
	// seven
	Crafty.storage.save(players_score_prefix + "seven" + players_score_suffix, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment_prefix + "seven" + players_score_increment_suffix, 'save', score_increment);
	// eight
	Crafty.storage.save(players_score_prefix + "eight" + players_score_suffix, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment_prefix + "eight" + players_score_increment_suffix, 'save', score_increment);
}
function setScore(old_score, score_incrementer, player_number_as_word){
	new_score = parseInt(old_score) + parseInt(score_increment);
	Crafty.storage.open(scores_db);
	// Set dynamic key
	var players_score = players_score_prefix + player_number_as_word + players_score_suffix;
	Crafty.storage.save(players_score, 'save', new_score);
	
	// Feedback information to DOM
	getJSONkeyFromJSONvalue("constants/numbers_as_words.json", player_number_as_word, new_score)
}
function setScoreDOM(score, player_id){
	jQuery('button[value="'+parseInt(player_id)+'"].score_submit').prev().html(score);
	if(player_id == 1){
		// This is us
		jQuery('#my_score').html(score);
	}	
}
function getScore(player_number_as_word){
	Crafty.storage.open(scores_db);
	// Set dynamic key
	var players_score = players_score_prefix + player_number_as_word + players_score_suffix;
	Crafty.storage.load(players_score, 'save', function(data){
		// Once score retrieved get increment while passing info
		getScoreIncrement(data, player_number_as_word);	
	});
}
function getScoreIncrement(old_score, player_number_as_word){
	Crafty.storage.open(scores_db);
	// Set dynamic key
	var players_score_increment = players_score_increment_prefix + player_number_as_word + players_score_increment_suffix;
	Crafty.storage.load(players_score_increment, 'save', function(data){
		// Once incrementer retrived, proceed to update score
		setScore(old_score, data, player_number_as_word);	
	});
	return(score_increment);
}
function incrementScore(player_number_as_word){
	getScore(player_number_as_word);
}
function getJSONkeyFromJSONvalue(json_file, player_number_as_word, score){
	jQuery.getJSON(json_file, function(json) {
		jQuery.each(json, function(key, value) {
  			if(value == player_number_as_word){
  				// Got player id so use it to set score on DOM
  				setScoreDOM(score, key);
  			}
		});
	});
}