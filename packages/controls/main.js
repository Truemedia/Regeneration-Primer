/* 
* @file Controls PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/controls/partial", "./Config", "./Bootstrap", "./Crafty", "inventory.PKG"], function(view, Config, jQuery, Crafty, inventory) {
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
			
			// Keyboard input
			if (me.input.isKeyPressed('a'))
			{
				me.game.viewport.move(-(me.game.currentLevel.tilewidth/2),0);

				// Force redraw
				me.game.repaint();
				
			}
			else if (me.input.isKeyPressed('d'))
			{
				me.game.viewport.move(me.game.currentLevel.tilewidth/2,0);

				// Force redraw
				me.game.repaint();
			}
					
			if (me.input.isKeyPressed('w'))
			{
				me.game.viewport.move(0,-(me.game.currentLevel.tileheight/2));
				
				// Force redraw
				me.game.repaint();
			}
			else if (me.input.isKeyPressed('s'))
			{
				me.game.viewport.move(0,me.game.currentLevel.tileheight/2);
				
				// Force redraw
				me.game.repaint();
			}
			
			// Hiding or showing points panel
			else if (me.input.isKeyPressed('shift')) {

				jQuery('#points_partial').toggle();
				console.log("Hiding or showing points panel");
			}
			
			// Hiding or showing profile & inventory panels
			else if (me.input.isKeyPressed('space')) {

				jQuery('.partial-column').toggle();
				console.log("Hiding or showing profile & inventory panels");
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
		},
			
		/* Crafty WASD movement mapping */
		mapper: function(){
			Crafty.c("LeftControls", {
    			init: function() {
       				this.requires('Multiway');
    			},
    
    			leftControls: function(speed) {
        			this.multiway(speed, {W: -90, S: 90, D: 0, A: 180})
        			return this;
   				}  
			});
		}
	}
});