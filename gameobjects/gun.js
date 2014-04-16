/* 
* @file Gun GAME OBJECT DEFINITION
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled game definition object, used for handling Gun objects in CANVAS
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["Toastr"], function(toastr) {
	return me.CollectableEntity.extend({
		init: function(x, y, settings)
		{
			// Setup constructors
			this.parent(x, y, settings);
			this.setVelocity(10, 10);
			this.collidable = true;
			
			// Store data in object instance
			this.itemname = settings.itemname;
			settings.image = 'gun_sprite';
		},
		
		update: function()
		{	
			// Check for collisions with other objects
			res = this.collide();
			if (res && this.collidable) { this.onCollision(res.obj); }

			if (this.collidable !== true) {

				// Move player based on keyboard keys
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

				// Handling gun
				if (me.input.isKeyPressed('operate')) {
					Audio.sampler.play('shoot');
				}
				else if (me.input.isKeyPressed('operate')) {
					Audio.sampler.play("shoot");
				}
				else if (me.input.isKeyPressed('push')) {
					Audio.sampler.play("fired_bullet_shelldrop");
				}
				else if (me.input.isKeyPressed('throwmag')) {
					Audio.sampler.play("discard_mag");
					console.log("Removed a mag");
				}
				else if (me.input.isKeyPressed('entermag')) {
					Audio.sampler.play("insert_mag");
					console.log("Loaded a mag");
				}
				else if (me.input.isKeyPressed('reload')) {
					Audio.sampler.play("lock_inserted_mag");
					//audio.play.sample("insert_mag");
					//audio.play.sample("load_chamber");
					console.log("Connected a mag");
				}
				else if (me.input.isKeyPressed('chamber')) {
					Audio.sampler.play("load_chamber");
					console.log("Loaded chamber");
				}
			} else {
				// Do nothing
			}
			 
			// Check & update player movement
			this.updateMovement();
			 
			// Update animation if necessary
			if (this.vel.x != 0 || this.vel.y != 0) {
				// Update object animation
			    this.parent();
			    return true;
			}
			return false;
		},
		
		onCollision: function(obj)
		{
			// Remove and notify as equipped
			toastr.options = Config.get('gamedirector::toastr');
			toastr.warning("Item equipped", this.itemname);

			this.collidable = false;
			this.pos.x = obj.pos.x;
			this.pos.y = obj.pos.y;
			//inventory.equip(this.itemname);
		}
	});
});