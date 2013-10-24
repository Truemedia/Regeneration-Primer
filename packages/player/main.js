/* 
* @file Player PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used to perform actions directly on a player
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./KO", "./spawner.PKG", "./profile.PKG", "./Gun.MOD", "./Human.GOD"], function(jQuery, Crafty, ko, spawner, profile, Gun, human_object) {
	return player = {
			
		/* Create a new player object instance */
		spawn: function() {

			// Get game object definition and add entity in the entity pool
			var current_player = me.entityPool.add("spawnPoint", human_object, true);
			//var bot_player = me.entityPool.newInstanceOf("mainPlayer", 200, 200, 90);
		},
			
		/* Kill player using player_id as reference */
		killPlayer: function(player_id) {

			var real_id = player_id + 1;
			console.log("Player "+real_id+" died");
			
			/* Kill the player on the Canvas */
			// Pick a random death falling direction
			var flat_player = "96"; // Degrees (minus or plus) that dicatate a dead player
			var falling_direction  = Math.round(Math.random());
			
			// Backwards (Forwards default)
			if (falling_direction == 0) {
				flat_player = "-" + flat_player;
			}
			
			// Access player and do something to indicate they are dead
			spawner.characters[player_id]
				.tween({rotation: flat_player}, 60)
				.textColor("#FFFFFF", '0.9')
				.text("DEAD");
			
			/* Kill the player on the DOM */
			jQuery('.score_container:eq('+player_id+') > dl > dt > span').addClass("deceased");
			if(real_id == 1){
				var bg = 'Crimson';
				jQuery('.score_container:eq('+player_id+') > dl > dt > span').css({ 'color': "DarkRed", 'backgroundColor': "Crimson", 'fontSize': "1em" });
			}
			else{
				var bg = 'DarkRed';
				jQuery('.score_container:eq('+player_id+') > dl > dt > span').css({ 'fontSize': "1em" });
			}
			jQuery('.score_container:eq('+player_id+') > dl').css({ 'backgroundColor': bg });
		},
		
		/* Move your own character */
		move: function(direction) {
			
			// Move screen based on direction
			switch (direction) {
			
				case 'up':
					me.game.viewport.move(0,-(me.game.currentLevel.tileheight/2));
				break;
				case 'right':
					me.game.viewport.move(me.game.currentLevel.tilewidth/2,0);
				break;
				case 'down':
					me.game.viewport.move(0,me.game.currentLevel.tileheight/2);
				break;
				case 'left':
					me.game.viewport.move(-(me.game.currentLevel.tilewidth/2),0);
				break;
			}
			
			// Force redraw
			me.game.repaint();
		}
	}
});