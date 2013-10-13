/* 
* @file Controls PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/controls/partial", "./Config", "./Page", "./Bootstrap", "./Crafty", "inventory.PKG", "player.PKG"], function(view, Config, Page, jQuery, Crafty, inventory, player) {
	return controls = {
		
		// Partial loading location	
		partial_block_element: 'controls_partial',
				
		init: function(){
		 		
		 	// Build data
		 	data = Config.instance('controls::default.all');
				
			// Load view
	       	document.getElementById(controls.partial_block_element).innerHTML = view(data);
	       		
			console.log("Controls PACKAGE loaded");
		},
		
		/* Bind keyboard keys to array keys */
		bindKeyboard: function() {

			me.input.bindKey(me.input.KEY.W, "w");
			me.input.bindKey(me.input.KEY.A, "a");
			me.input.bindKey(me.input.KEY.S, "s");
			me.input.bindKey(me.input.KEY.D, "d");
			me.input.bindKey(me.input.KEY.SPACE, "space", true);
			me.input.bindKey(me.input.KEY.SHIFT, "shift", true);
			me.input.bindKey(me.input.KEY.NUM0, "0", true);
			me.input.bindKey(me.input.KEY.NUM1, "1", true);
			me.input.bindKey(me.input.KEY.NUM2, "2", true);
			me.input.bindKey(me.input.KEY.NUM3, "3", true);
			me.input.bindKey(me.input.KEY.NUM4, "4", true);
			me.input.bindKey(me.input.KEY.NUM5, "5", true);
			me.input.bindKey(me.input.KEY.NUM6, "6", true);
			me.input.bindKey(me.input.KEY.NUM7, "7", true);
			me.input.bindKey(me.input.KEY.NUM8, "8", true);
			me.input.bindKey(me.input.KEY.NUM9, "9", true);
		},
		
		/* Observe any keys being pressed and trigger their relative events */
		observeKeyboard: function() {
			
			// Moving player
			if (me.input.isKeyPressed('w')) {
				player.move('up');
			}
			else if (me.input.isKeyPressed('a')) {
				player.move('left');
			}
			else if (me.input.isKeyPressed('s')) {
				player.move('down');
			}
			else if (me.input.isKeyPressed('d')) {
				player.move('right');
			}
			
			// Hiding or showing left sidebar
			else if (me.input.isKeyPressed('shift')) {
				Page.sidebar('left', 'toggle');
			}
			
			// Hiding or showing right sidebar
			else if (me.input.isKeyPressed('space')) {
				Page.sidebar('right', 'toggle');
			}

			// Select/Unselect inventory items
			else if (me.input.isKeyPressed('1')) {
				inventory.switchItem(1);
			}
			else if (me.input.isKeyPressed('2')) {
				inventory.switchItem(2);
			}
			else if (me.input.isKeyPressed('3')) {
				inventory.switchItem(3);
			}
			else if (me.input.isKeyPressed('4')) {
				inventory.switchItem(4);
			}
			else if (me.input.isKeyPressed('5')) {
				inventory.switchItem(5);
			}
			else if (me.input.isKeyPressed('6')) {
				inventory.switchItem(6);
			}
			else if (me.input.isKeyPressed('7')) {
				inventory.switchItem(7);
			}
			else if (me.input.isKeyPressed('8')) {
				inventory.switchItem(8);
			}
			else if (me.input.isKeyPressed('9')) {
				inventory.switchItem(9);
			}
			else if (me.input.isKeyPressed('0')) {
				inventory.switchItem(0);
			}
		}
	}
});