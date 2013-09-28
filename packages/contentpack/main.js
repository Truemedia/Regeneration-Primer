/* 
* @file Content Pack PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for managing/customizing content (audio, images, videos) in the game
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/contentpack/partial", "./Bootstrap"], function(view, jQuery) {
	return contentpack = {
		
		// Partial loading location	
		partial_block_element: 'contentpack_partial',
				
		init: function(){
		 		
		 	// Build data
		 	data = {
		 		"characters": Config.get('content_pack.characters')
		 	};
				
			// Load view
	       	document.getElementById(contentpack.partial_block_element).innerHTML = view(data);
	       		
			console.log("Content Pack PACKAGE loaded");
		}
	}
});