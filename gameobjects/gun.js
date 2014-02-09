/* 
* @file Gun GAME OBJECT DEFINITION
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled game definition object, used for handling Gun objects in CANVAS
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([], function() {
	return me.ObjectEntity.extend({
		init: function(x, y, settings) {

			// Setup constructors
			this.parent(x, y, settings);
			this.collidable = true;
			
			// Store data in object instance
			this.itemname = settings.itemname;
			setting.image = 'criminal';
		},
		
		update: function() {
			
			// check for collision with other objects
			res = this.collide();
			
			if (res) {
				this.onCollision();
			}
			
			return false;
		},
		
		onCollision: function(res, obj){

			// Remove and notify as equipped
			me.game.remove(this);
			//inventory.equip(this.itemname);
		},
	});
});