/* 
* @file Enemy GAME OBJECT DEFINITION
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled game definition object, used for handling Enemy objects in CANVAS
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([], function() {
	return me.ObjectEntity.extend({

		ai: false,

		init: function(x, y, settings)
		{
			// call the constructor
		    this.parent(x, y, settings);
		 
		    // set the default horizontal & vertical speed (accel vector)
		    this.setVelocity(10, 10);
		},

		update: function()
		{
			// Move player based on keyboard keys
			if (this.ai) {
				
				if (me.input.isKeyPressed('moveleft')) {
					this.doWalk(true);
				} else if (me.input.isKeyPressed('moveright')) {
					this.doWalk(false);
				} else if (me.input.isKeyPressed('moveup')) {
				    this.vel.y -= this.accel.y * me.timer.tick;
				} else if (me.input.isKeyPressed('movedown')) {
				  this.vel.y += this.accel.y * me.timer.tick;
				} else {
				  this.vel.x = 0;
				  this.vel.y = 0;
				}
			} else {
				// Do nothing
			}
			 
			// check & update player movement
			this.updateMovement();
			 
			// update animation if necessary
			if (this.vel.x !== 0 || this.vel.y !== 0) {
				// update object animation
			    this.parent();
			    return true;
			}
		         
		    // else inform the engine we did not perform any update (e.g. position, animation)
		    return false;
		}
	});
});