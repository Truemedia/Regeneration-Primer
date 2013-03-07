// Windows module
define(["./jQ.xml2json", "./Crafty", "./Gun.MOD"], function(jQuery, Crafty, Gun) {
	return windows = {
		init: function(windowObject){
			// Make chainable callback since XSLT plugin callback support is bugged
			jQuery.fn.windowLoadCallback = function(windowName)
			{
    			windows.callbacks(windowName);
			}
			
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
				var windowHTML = jQuery.xslt({xmlUrl: windowDirFilePrefix+'xml', xslUrl: windowDirFilePrefix+'xsl'});
				jQuery('#'+windowName+'_window').html(windowHTML)
					.windowLoadCallback(windowName);
			});
		},
		callbacks: function(windowName){
			/* Function list to call based on specific window, after window has loaded */
			console.log(windows.realName(windowName)+" window loaded");
			switch (windowName){
				case 'header':
					break;
				case 'footer':
					break;
  				case 'marquee':
  					break;
  				case 'inventory':
 			 		Gun.populateAmmo();
  					break;
			} 
		},
		realName: function(windowName){
			// Return window name shown to humans (capitalized first letter)
			// TODO: Consider in future implementing multiple languages function called with this (multilingual debugging)
    		return windowName.charAt(0).toUpperCase() + windowName.slice(1);
		},
		RearrangeForCanvas: function(){
			// Move it to the bottom of the page, when canvas has loaded 
			// TODO: assign canvas to it's own element on build to avoid need for this code
			jQuery('#inventory_window').after(jQuery('#cr-stage'));
		}
	}
});