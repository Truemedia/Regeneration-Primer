/* 
* @file Keyboard MODULE
* @author Wade Penistone (Truemedia)
* @overview Controls package module used for interacting with the keyboard (HID class)
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([], function() {
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
			
			// 5th row of keys
			me.input.bindKey(me.input.KEY.LEFT, "toggleleftsidebar", true);
			me.input.bindKey(me.input.KEY.RIGHT, "togglerightsidebar", true);
			me.input.bindKey(me.input.KEY.UP, "toggleheader", true);
			me.input.bindKey(me.input.KEY.DOWN, "togglefooter", true);
		},
		
		/* Observe any keys being pressed and trigger their relative events */
		observeControls: function() {
			
			// Moving player
			if (me.input.isKeyPressed('moveup')) {
				//require('player').move('up');
			}
			else if (me.input.isKeyPressed('moveleft')) {
				//require('player').move('left');
			}
			else if (me.input.isKeyPressed('movedown')) {
				//require('player').move('down');
			}
			else if (me.input.isKeyPressed('moveright')) {
				//require('player').move('right');
			}
			
			// Hiding or showing left sidebar
			else if (me.input.isKeyPressed('toggleleftsidebar')) {
				//require('Page').sidebar('left', 'toggle');
			}
			
			// Hiding or showing right sidebar
			else if (me.input.isKeyPressed('togglerightsidebar')) {
				//require('Page').sidebar('right', 'toggle');
			}
			
			// Hiding or showing header
			else if (me.input.isKeyPressed('toggleheader')) {

				/*if (require('header').active == false) {
					require('header').activate();
				} else {
					require('header').deactivate();
				}*/
			}
			
			// Hiding or showing footer
			else if (me.input.isKeyPressed('togglefooter')) {

				/*if (require('footer').active == false) {
					require('footer').activate();
					require('social').init();
				} else {
					require('footer').deactivate();
					document.getElementById('social_partial').innerHTML = "";
				}*/
			}

			// Select/Unselect inventory items
			else if (me.input.isKeyPressed('itemone')) {
				//require('inventory').switchItem(1);
			}
			else if (me.input.isKeyPressed('itemtwo')) {
				//require('inventory').switchItem(2);
			}
			else if (me.input.isKeyPressed('itemthree')) {
				//require('inventory').switchItem(3);
			}
			else if (me.input.isKeyPressed('itemfour')) {
				//require('inventory').switchItem(4);
			}
			else if (me.input.isKeyPressed('itemfive')) {
				//require('inventory').switchItem(5);
			}
			else if (me.input.isKeyPressed('itemsix')) {
				//require('inventory').switchItem(6);
			}
			else if (me.input.isKeyPressed('itemseven')) {
				//require('inventory').switchItem(7);
			}
			else if (me.input.isKeyPressed('itemeight')) {
				//require('inventory').switchItem(8);
			}
			else if (me.input.isKeyPressed('itemnine')) {
				//require('inventory').switchItem(9);
			}
			else if (me.input.isKeyPressed('itemten')) {
				//require('inventory').switchItem(0);
			}
			
			// Handling items
			else if (me.input.isKeyPressed('pickup')) {
				//require('inventory').equip("Gun");
			}
			
			// Debugging
			else if (me.input.isKeyPressed('coords')) {
				//require('debug').saveCoords();
			}
		}
	}
});