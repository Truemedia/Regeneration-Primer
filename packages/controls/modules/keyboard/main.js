/* 
* @file Keyboard MODULE
* @author Wade Penistone (Truemedia)
* @overview Controls package module used for interacting with the keyboard (HID class)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(function(require, exports, module) {
	return keyboard = {
		
		/* Bind keyboard keys to game action hooks */
		bindControls: function() {
			
			// 1st row of keys
			me.input.bindKey(me.input.KEY.NUM1, "itemone", true);
			me.input.bindKey(me.input.KEY.NUM2, "itemtwo", true);
			me.input.bindKey(me.input.KEY.NUM3, "itemthree", true);
			me.input.bindKey(me.input.KEY.NUM4, "itemfour", true);
			me.input.bindKey(me.input.KEY.NUM5, "itemfive", true);
			me.input.bindKey(me.input.KEY.NUM6, "itemsix", true);
			me.input.bindKey(me.input.KEY.NUM7, "itemseven", true);
			me.input.bindKey(me.input.KEY.NUM8, "itemeight", true);
			me.input.bindKey(me.input.KEY.NUM9, "itemnine", true);
			me.input.bindKey(me.input.KEY.NUM0, "itemten", true)

			// 2nd row of keys
			me.input.bindKey(me.input.KEY.W, "moveup");
			me.input.bindKey(me.input.KEY.E, "entermag", true);
			me.input.bindKey(me.input.KEY.R, "reload", true);
			me.input.bindKey(me.input.KEY.T, "throwmag", true);
			me.input.bindKey(me.input.KEY.O, "operate", true);
			me.input.bindKey(me.input.KEY.P, "push", true);
			
			// 3rd row of keys
			me.input.bindKey(me.input.KEY.A, "moveleft");
			me.input.bindKey(me.input.KEY.S, "movedown");
			me.input.bindKey(me.input.KEY.D, "moveright");
			
			// 4th row of keys
			me.input.bindKey(me.input.KEY.Z, "coords", true);
			me.input.bindKey(me.input.KEY.X, "pickup", true);
			me.input.bindKey(me.input.KEY.C, "chamber", true);
			me.input.bindKey(me.input.KEY.SHIFT, "toggleleftsidebar", true);
			
			// 5th row of keys
			me.input.bindKey(me.input.KEY.SPACE, "togglerightsidebar", true);
		},
		
		/* Observe any keys being pressed and trigger their relative events */
		observeControls: function() {
			
			// Moving player
			if (me.input.isKeyPressed('moveup')) {
				require('player.PKG').move('up');
			}
			else if (me.input.isKeyPressed('moveleft')) {
				require('player.PKG').move('left');
			}
			else if (me.input.isKeyPressed('movedown')) {
				require('player.PKG').move('down');
			}
			else if (me.input.isKeyPressed('moveright')) {
				require('player.PKG').move('right');
			}
			
			// Handling gun
			else if (me.input.isKeyPressed('operate')) {
				require('audio.PKG').sampler.play("shoot");
			}
			else if (me.input.isKeyPressed('push')) {
				require('audio.PKG').sampler.play("fired_bullet_shelldrop");
			}
			else if (me.input.isKeyPressed('throwmag')) {
				require('audio.PKG').sampler.play("discard_mag");
				console.log("Removed a mag");
			}
			else if (me.input.isKeyPressed('entermag')) {
				require('audio.PKG').sampler.play("insert_mag");
				console.log("Loaded a mag");
			}
			else if (me.input.isKeyPressed('reload')) {
				require('audio.PKG').sampler.play("lock_inserted_mag");
				//audio.play.sample("insert_mag");
				//audio.play.sample("load_chamber");
				console.log("Connected a mag");
			}
			else if (me.input.isKeyPressed('chamber')) {
				require('audio.PKG').sampler.play("load_chamber");
				console.log("Loaded chamber");
			}
			
			// Hiding or showing left sidebar
			else if (me.input.isKeyPressed('toggleleftsidebar')) {
				require('Page').sidebar('left', 'toggle');
			}
			
			// Hiding or showing right sidebar
			else if (me.input.isKeyPressed('togglerightsidebar')) {
				require('Page').sidebar('right', 'toggle');
			}

			// Select/Unselect inventory items
			else if (me.input.isKeyPressed('itemone')) {
				require('inventory.PKG').switchItem(1);
			}
			else if (me.input.isKeyPressed('itemtwo')) {
				require('inventory.PKG').switchItem(2);
			}
			else if (me.input.isKeyPressed('itemthree')) {
				require('inventory.PKG').switchItem(3);
			}
			else if (me.input.isKeyPressed('itemfour')) {
				require('inventory.PKG').switchItem(4);
			}
			else if (me.input.isKeyPressed('itemfive')) {
				require('inventory.PKG').switchItem(5);
			}
			else if (me.input.isKeyPressed('itemsix')) {
				require('inventory.PKG').switchItem(6);
			}
			else if (me.input.isKeyPressed('itemseven')) {
				require('inventory.PKG').switchItem(7);
			}
			else if (me.input.isKeyPressed('itemeight')) {
				require('inventory.PKG').switchItem(8);
			}
			else if (me.input.isKeyPressed('itemnine')) {
				require('inventory.PKG').switchItem(9);
			}
			else if (me.input.isKeyPressed('itemten')) {
				require('inventory.PKG').switchItem(0);
			}
			
			// Debugging
			else if (me.input.isKeyPressed('coords')) {
				require('debug.PKG').saveCoords();
			}
		}
	}
});