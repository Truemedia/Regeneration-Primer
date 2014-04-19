/* 
* @file Vending Machine GAME OBJECT DEFINITION
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled game definition object, used for handling Vending Machine objects in CANVAS
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([], function() {
	return me.ObjectEntity.extend({
		init: function(x, y, settings)
		{
			// Setup constructors
			this.parent(x, y, settings);
			this.setVelocity(10, 10);
			
			// Store data in object instance
			this.itemname = settings.itemname;
			this.alive = false;
			this.collidable = true;
			settings.image = 'vendingmachine_sprite';
		},
		
		update: function()
		{	
			this.updateMovement();
			return false;
		}
	});
});