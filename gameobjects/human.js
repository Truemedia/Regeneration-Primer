/* 
* @file Human GAME OBJECT DEFINITION
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled game definition object, used for handling Human objects in CANVAS
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Session", "./spawner.PKG"], function(jQuery, Session, spawner) {
	return me.ObjectEntity.extend({
		
		bot: null,

		init: function(x, y, settings) {
			
			// Setup bot reference
			this.bot = settings.bot;
			
			// Set image based on character name in session
			var main_character = Session.get('character');
			
			// Use selected character sprite
			if (this.bot == false) {
				settings.image = main_character;
			}
			// Use random character sprite
			else {
				
				supporting_character = spawner.spawnPlayer();
				
				// Avoid respawning main player
				if (supporting_character === main_character) {
					
					supporting_character = spawner.spawnPlayer();
				}
				
				settings.image = supporting_character;
			}
			
			// call the constructor
		    this.parent(x, y, settings);
		 
		    // set the default horizontal & vertical speed (accel vector)
		    this.setVelocity(10, 10);
		 
		    // set the display to follow our position on both axis
		    if (this.bot !== true) {

		    	me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
		    }
		},

		update: function() {

			// move player based on keyboard keys
			if (this.bot !== true) {
				
				if (me.input.isKeyPressed('a')) {
	
					this.flipX(true);
				    this.vel.x -= this.accel.x * me.timer.tick;
				} else if (me.input.isKeyPressed('d')) {
	
				    this.flipX(false);
				    this.vel.x += this.accel.x * me.timer.tick;
				} else if (me.input.isKeyPressed('w')) {
	
				    this.vel.y -= this.accel.y * me.timer.tick;
				} else if (me.input.isKeyPressed('s')) {
	
				  this.vel.y += this.accel.y * me.timer.tick;
				} else {
	
				  this.vel.x = 0;
				  this.vel.y = 0;
				}
			} else {
				
				// move bot
			}
			 
			// check & update player movement
			this.updateMovement();
			 
			// update animation if necessary
			if (this.vel.x!=0 || this.vel.y!=0) {
				
				// update object animation
			    this.parent();
			    return true;
			}
		         
		    // else inform the engine we did not perform
		    // any update (e.g. position, animation)
		    return false;
		}
	})
});