/* 
* @file Controls PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/controls/partial", "i18n!packages/controls/nls/strings", "./Config", "./Lang", "./Page", "./Bootstrap", "./Crafty", "inventory.PKG", "player.PKG", "audio.PKG", "debug.PKG"], function(view, nls, Config, Lang, Page, jQuery, Crafty, inventory, player, audio, debug) {
	return controls = {
		
		// Partial loading location	
		partial_block_element: 'controls_partial',
		
		// Translations
		trans: {},
				
		/* Load this package */
		init: function() {
	 		
	 		// Load translations
			controls.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			controls.loadDOM();
		},
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {
		 		
		 	// Build data
		 	data = Config.instance('controls::default');
		 	
		 	// Append language strings to JSON data source
			data.trans = controls.trans;
				
			// Load view
	       	document.getElementById(controls.partial_block_element).innerHTML = view(data);
	       		
			console.log("Controls PACKAGE loaded");
		},
		
		/* Bind all Human interface Devices (physical controllers) to the game */
		bindHumanInterfaceDevices: function() {
			
			// Traditional controllers
			controls.bindKeyboard();
			controls.bindMouse();
		},
		
		/* Bind mouse buttons and scroll wheel to game action hooks */
		bindMouse: function() {
			
			// Primary mouse buttons
			me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.O);
			me.input.bindMouse(me.input.mouse.RIGHT, me.input.KEY.P);
		},
		
		/* Bind keyboard keys to game action hooks */
		bindKeyboard: function() {
			
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
		observeKeyboard: function() {
			
			// Moving player
			if (me.input.isKeyPressed('moveup')) {
				player.move('up');
			}
			else if (me.input.isKeyPressed('moveleft')) {
				player.move('left');
			}
			else if (me.input.isKeyPressed('movedown')) {
				player.move('down');
			}
			else if (me.input.isKeyPressed('moveright')) {
				player.move('right');
			}
			
			// Handling gun
			else if (me.input.isKeyPressed('operate')) {
				audio.sampler.play("shoot");
			}
			else if (me.input.isKeyPressed('push')) {
				audio.sampler.play("fired_bullet_shelldrop");
			}
			else if (me.input.isKeyPressed('throwmag')) {
				audio.sampler.play("discard_mag");
				console.log("Removed a mag");
			}
			else if (me.input.isKeyPressed('entermag')) {
				audio.sampler.play("insert_mag");
				console.log("Loaded a mag");
			}
			else if (me.input.isKeyPressed('reload')) {
				audio.sampler.play("lock_inserted_mag");
				//audio.play.sample("insert_mag");
				//audio.play.sample("load_chamber");
				console.log("Connected a mag");
			}
			else if (me.input.isKeyPressed('chamber')) {
				audio.sampler.play("load_chamber");
				console.log("Loaded chamber");
			}
			
			// Hiding or showing left sidebar
			else if (me.input.isKeyPressed('toggleleftsidebar')) {
				Page.sidebar('left', 'toggle');
			}
			
			// Hiding or showing right sidebar
			else if (me.input.isKeyPressed('togglerightsidebar')) {
				Page.sidebar('right', 'toggle');
			}

			// Select/Unselect inventory items
			else if (me.input.isKeyPressed('itemone')) {
				inventory.switchItem(1);
			}
			else if (me.input.isKeyPressed('itemtwo')) {
				inventory.switchItem(2);
			}
			else if (me.input.isKeyPressed('itemthree')) {
				inventory.switchItem(3);
			}
			else if (me.input.isKeyPressed('itemfour')) {
				inventory.switchItem(4);
			}
			else if (me.input.isKeyPressed('itemfive')) {
				inventory.switchItem(5);
			}
			else if (me.input.isKeyPressed('itemsix')) {
				inventory.switchItem(6);
			}
			else if (me.input.isKeyPressed('itemseven')) {
				inventory.switchItem(7);
			}
			else if (me.input.isKeyPressed('itemeight')) {
				inventory.switchItem(8);
			}
			else if (me.input.isKeyPressed('itemnine')) {
				inventory.switchItem(9);
			}
			else if (me.input.isKeyPressed('itemten')) {
				inventory.switchItem(0);
			}
			
			// Debugging
			else if (me.input.isKeyPressed('coords')) {
				debug.saveCoords();
			}
		}
	}
});