/**
 * @file Game director PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for balancing the difficultly of the game where implemented to a reasonable level where the difficulty can gradually progress
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define(["Toastr"], function(toastr)
{
	/** 
     * Game Director package
     * @namespace gamedirector
     */
	gamedirector = {

		// Translations
		trans: {},

		// Package options
		settings: null,

		// Round/Wave number
		round_number: 0,
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			// Register package
			Package.register('gamedirector');
		},
			
		/* Autoloading hook */
	    load: function(element, options)
	    {    	
	        // Load the package onto current web-page
	    	this.init(options);
			this.roundCall();
	    },
			
		/* Warn player that next round is commencing */
		roundCall: function()
		{	
			// Increment round number
			gamedirector.round_number++;
			
			// Display notification
			toastr.options = Config.get('gamedirector::toastr');
			toastr.error("Prepare to fight", "Round "+gamedirector.round_number);
		}
	};

	return gamedirector;
});