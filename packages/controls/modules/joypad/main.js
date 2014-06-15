/* 
* @file Joypad MODULE
* @author Wade Penistone (Truemedia)
* @overview Controls package module used for interacting with most gamepads/joypads (HID class)
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['jQuery'], function(jQuery)
{
	joypad = {

		/* Create a gamepad object based on a connected controller */
		connect: function(hid)
		{

			console.log("Joypad " + hid.index + " connected");
		},
		
		/* Iterate through all connected joypads and connect to internal gamehooks */
		registerControllers: function()
		{	
			var controllers = [1, 2];

			controllers_connected = false;
			if (controllers_connected) {
				jQuery.each(controllers, function(index, data) {
					joypad.connect({
						"index" :dex
					});
				});
			}
		}
	};

	return joypad;
});