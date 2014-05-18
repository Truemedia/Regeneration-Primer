/* 
* @file Router CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for allowing allocation of controller actions through URL rules
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['Marionette', 'jQuery'], function(Marionette, jQuery) {
	return Router = Backbone.Marionette.AppRouter.extend({

        appRoutes: {
        	'play': 'game',
        	'3D': 'three',
            '*defaults': 'index'
        }
    });
});