/* 
* @file Gun GAME OBJECT DEFINITION
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled game definition object, used for handling Gun objects in CANVAS
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery"], function(jQuery) {
	return me.ObjectEntity.extend({
		init: function(x, y, settings) {
			
			settings.image = "gun_sprite";
			settings.spritewidth = 128;
			settings.spriteheight = 128;

			this.parent(50, 50, settings);
		},
		
		update: function() {
			return false;
		}
	});
});