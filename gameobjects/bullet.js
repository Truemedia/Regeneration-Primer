/* 
* @file Bullet GAME OBJECT DEFINITION
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled game definition object, used for handling Bullet objects in CANVAS
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['jQuery', 'KO'], function(jQuery, ko) {
	return me.ObjectEntity.extend({
		init: function(x, y, settings)
		{
			// Call the constructor
		    this.parent(x, y, settings);
		    this.direction = settings.direction;
		 
		    // Set the default horizontal & vertical speed (accel vector)
		    this.setVelocity(200, 200);
		},

		update: function()
		{
			// Check for collisions with other objects
			res = this.collide();
			if (res && this.collidable) { this.onCollision(res.obj); }
			
			// Accelerate bullet based on direction passed by gun
			switch (this.direction) {
				case 'left':
					this.vel.x -= this.accel.x * me.timer.tick;
				break;
				case 'right':
					this.vel.x += this.accel.x * me.timer.tick;
				break;
			}
			 
			// check & update bullet movement
			this.updateMovement();
			this.parent();
			return true;
		},
		
		onCollision: function(obj)
		{
			// Remove and register impact
			if (obj.alive) {
				var player_element = jQuery(".score_container:eq(" + (obj.pid - 1) + ")").get(0);
				var vm = ko.dataFor(player_element);
	    		vm.health.decreaseHealth();
			}
			me.game.remove(this);
			me.game.sort();
		},
	})
});