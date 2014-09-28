/* 
* @file Mouse MODULE
* @author Wade Penistone (Truemedia)
* @overview Controls package module used for interacting with the mouse (HID class)
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define([], function()
{
	mouse = {
		
		/* Bind mouse buttons and scroll wheel to game action hooks */
		bindControls: function()
		{		
			// Primary mouse buttons
			// me.input.bindMouse(me.input.mouse.LEFT, me.input.KEY.O);
			// me.input.bindMouse(me.input.mouse.RIGHT, me.input.KEY.P);
		}
	};

	return mouse;
});