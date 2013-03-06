// Windows module
define(["./jQ.xml2json", "./Crafty", "./Gun.MOD"], function(jQuery, Crafty, Gun) {
	return windows = {
		init: function(windowObject){
			/* Load the XHTML for a window */
			// If a string, transform into single item array
			if(jQuery.isArray(windowObject) == false){
				singleWindowObject = windowObject;
				windowObject = [];
				windowObject.push(singleWindowObject);
			}
			jQuery.each(windowObject, function(windowItertion, windowName){
				var windowDirFilePrefix = 'windows/'+windowName+'/'+windowName+'.';
				// Load each window
				jQuery('#'+windowName+'_window')
					.xslt({xmlUrl: windowDirFilePrefix+'xml', xslUrl: windowDirFilePrefix+'xsl', callback: windows.callbacks(windowName)});
			});
		},
		callbacks: function(windowName){
			/* Function list to call based on specific window, after window has loaded */
			console.log("The "+windowName+" window, has been loaded");
			switch (windowName){
				case 'inventory':
 			 		Gun.populateAmmo();
  					break;
			} 
		},
		RearrangeForCanvas: function(){
			// Move it to the bottom of the page, when canvas has loaded 
			// TODO: assign canvas to it's own element on build to avoid need for this code
			jQuery('#inventory_window').after(jQuery('#cr-stage'));
		}
	}
});