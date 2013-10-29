/* 
* @file Controls PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/controls/partial", "i18n!packages/controls/nls/strings", "./Config", "./Lang", "./Bootstrap", "Keyboard.MOD", "Mouse.MOD"], function(view, nls, Config, Lang, jQuery, keyboard, mouse) {
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
			
			// PC gaming hardware
			keyboard.bindControls();
			mouse.bindControls();
		}
	}
});