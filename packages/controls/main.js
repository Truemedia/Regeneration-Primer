/* 
* @file Controls PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/controls/partial", "i18n!packages/controls/nls/strings", "Config", "Lang", "Package", "./Bootstrap", "Keyboard.MOD", "Mouse.MOD"], function(view, nls, Config, Lang, Package, jQuery, keyboard, mouse) {
	return controls = {
		
		// Data attribute binded element
		element_binding: null,
		
		// Translations
		trans: {},
				
		/* Load this package */
		init: function() {
			
			// Register package
			Package.register('controls');
	 		
	 		// Load translations
			controls.trans = Lang.getTrans(nls);
			
			// Load the package onto current web-page
			controls.loadDOM();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	// Store the element binding
        	controls.element_binding = element;
        	    	
        	controls.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Append the HTML for this package to the DOM */
		loadDOM: function() {
		 		
		 	// Build data
		 	data = Config.instance('controls::default');
		 	
		 	// Append language strings to JSON data source
			data.trans = controls.trans;
				
			// Load view
	       	jQuery(controls.element_binding).html( view(data) );
		},
		
		/* Bind all Human interface Devices (physical controllers) to the game */
		bindHumanInterfaceDevices: function() {
			
			// PC gaming hardware
			keyboard.bindControls();
			mouse.bindControls();
		}
	}
});