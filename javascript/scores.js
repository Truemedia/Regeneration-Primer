// defaults
var scores_db = "scores";
var players_score = "player_one_score";
var players_score_increment = "player_one_score_increment";
var players_starting_score = 500;
var score_increment = 10;

function initialGameScoreValues(){
	Crafty.storage.open(scores_db);
	Crafty.storage.save(players_score, 'save', players_starting_score);
	Crafty.storage.save(players_score_increment, 'save', score_increment);
	setScoreDOM(players_starting_score);
}
function setScore(old_score, score_incrementer){
	new_score = parseInt(old_score) + parseInt(score_increment);
	Crafty.storage.open(scores_db);
	Crafty.storage.save(players_score, 'save', new_score);
	setScoreDOM(new_score);
}
function setScoreDOM(score){
	jQuery('#players_points').html(score);	
}
function getScore(){
	Crafty.storage.open(scores_db);
	Crafty.storage.load(players_score, 'save', function(data){
		// Once score retrieved get increment while passing info
		getScoreIncrement(data);	
	});
}
function getScoreIncrement(old_score){
	Crafty.storage.open(scores_db);
	Crafty.storage.load(players_score_increment, 'save', function(data){
		// Once incrementer retrived, proceed to update score
		setScore(old_score, data);	
	});
	return(score_increment);
}
function incrementScore(){
	getScore();
}