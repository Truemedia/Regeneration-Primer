/* 
* @file Starting file/script
* @author Wade Penistone (Truemedia)
* @overview Base script included in the HTML of any game page, for none compiled games
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
// RequireJS config
require.config({
	baseUrl: "",
	paths: {
		/* Require JS plugins */
        text : "http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text",
        hbars: "http://cdnjs.cloudflare.com/ajax/libs/requirejs-handlebars/0.0.2/hbars.min",
        stache : "http://cdnjs.cloudflare.com/ajax/libs/requirejs-mustache/0.0.2/stache",
        i18n: "http://cdnjs.cloudflare.com/ajax/libs/require-i18n/2.0.1/i18n",
        conditioner: 'dependencies/conditioner',
	
		/* Third party libraries */
        'Backbone': "http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min",
        'Bootstrap': "http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min",
        'Buzz': "http://cdn.jsdelivr.net/buzz/1.0.6/buzz.min",
        'Cookie': "http://cdnjs.cloudflare.com/ajax/libs/Cookies.js/0.3.1/cookies.min",
		'Crafty': "http://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.3/crafty-min",
        'Handlebars': "http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.2/handlebars.amd.min",
		'JSONpatch': "dependencies/jsonpatch.min",
        'jQuery': "https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
        'Leaflet': "http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.1/leaflet",
        'KO': "http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1",
        'Marionette': "http://cdnjs.cloudflare.com/ajax/libs/backbone.marionette/1.1.0-bundled/backbone.marionette.min",
        'Modernizr': "http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.0.6/modernizr.min",
        'Mustache': "http://cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min",
        'three': "http://cdnjs.cloudflare.com/ajax/libs/three.js/r67/three.min",
        'Toastr': "http://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.0/js/toastr.min",
        'Underscore': "http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
        
        /* Core classes */
        'App': "regeneration/app", // Application instance class
        'Audio': "regeneration/audio", // Audio class
        'Camera': "regeneration/camera", // Camera class
        'Colour': "regeneration/colour", // Colour class
        'Config': "regeneration/config", // Config class
        'Controls': "regeneration/controls", // Controls class
        'Game': "regeneration/game", // Game instance class
        'Lang': "regeneration/lang", // Lang class
        'Package': "regeneration/package", // Package helper class
        'Page': "regeneration/page", // Page class
        'Resource': "regeneration/resource", // Resource class
        'Router': "regeneration/router", // Router class
        'Session': "regeneration/session", // Session class
        'Spawner': "regeneration/spawner", // Spawner class
        
        /* Modules (Will soon be deprecated) */
        'Gun.MOD': "modules/gun/gun.module", // Gun module
        
        /* Game object definitions */
        'Bullet.GOD': "gameobjects/bullet",
        'Enemy.GOD': "gameobjects/enemy",
        'Gun.GOD': "gameobjects/gun",
        'Hud.GOD': "gameobjects/hud",
        'Human.GOD': "gameobjects/human",
        'MetalContainer.GOD': "gameobjects/metalcontainer",
        'VendingMachine.GOD': "gameobjects/vendingmachine",
        
        /* jQuery plugins */
        'jQ.flyoff': "libs/jquery.flyoffpage.full", // Fly off animation
        'jQ.Datatables': "http://cdnjs.cloudflare.com/ajax/libs/datatables/1.9.4/jquery.dataTables.min", // Datatables
        
        /* Bootstrap helpers */
        'bootbox': "http://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.0.0/bootbox.min", // Bootbox (simpler bootstrap modals)
        'fuelux': "http://cdn.jsdelivr.net/fuelux/2.4.0/wizard", // FuelUX (Bootstrap extended UI library)
        'Bootstrap.formhelpers.selectbox': "http://cdn.jsdelivr.net/bootstrap.formhelpers/1.8.2/js/bootstrap-formhelpers-selectbox", // Bootstrap form helper (for select boxes)
        'Bootstrap.formhelpers.countries.en_US': "http://cdn.jsdelivr.net/bootstrap.formhelpers/1.8.2/js/bootstrap-formhelpers-countries.en_US", // Bootstrap form helper (for country selection)
        'Bootstrap.formhelpers.languages.codes': "http://cdn.jsdelivr.net/bootstrap.formhelpers/1.8.2/js/bootstrap-formhelpers-languages.codes", // Bootstrap form helper (for language codes)
        'Bootstrap.formhelpers.languages': "http://cdn.jsdelivr.net/bootstrap.formhelpers/1.8.2/js/bootstrap-formhelpers-languages", // Bootstrap form helper (for languages)
        
        /* jQuery UI files */
        'jQ.ui': "https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min", // Core file
        
        /* Formatting libraries */
        'moment': "http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min", // MomentJS (Date and time formatting)
    },
    shim: {

    	// Dependencies
        'Buzz': {
            exports: 'buzz'
        },
        'Crafty': {
            exports: 'Crafty'
        },
        'Handlebars': {
            exports: 'Handlebars'
        },
        'jQuery': {
            exports: 'jQuery'
        },
        'Modernizr': {
            exports: 'Modernizr'
        },
        'three': {
            exports: 'THREE'
        },
        
        // Backbone
        'Backbone': {
            deps: ['Underscore', 'jQuery'],
            exports: 'Backbone'
        },
        
        // Underscore
        'Underscore': {
            exports: '_'
        },
        
        'Marionette' : {
            deps : ['jQuery', 'Underscore', 'Backbone'],
            exports : 'Marionette'
        },

        // jQuery plugins
        'jQ.flyoff': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },

        // jQuery UI 
        'jQ.ui': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        
        // Bootstrap
        'Bootstrap': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        
        // bootbox
        'bootbox': {
            deps: ['jQuery', 'Bootstrap'],
            exports: 'bootbox'
        },
        
        // Toastr
        'Toastr': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        
        // FuelUX
        'fuelux': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        
        // Inject regeneration classes into autoloader
        'conditioner': {
            deps: [
                'App', 'Audio', 'Camera', 'Colour', 'Config', 'Game', 'Lang', 'Package', 'Page', 'Resource', 'Router', 'Session', 'Spawner'
            ],
            exports: 'conditioner'
        }
    },
    
    /* Packages (/packages directory) */
    packages: [
        'about',
        'audio',
        'characterselection',
        'contentpack',
        'controls',
        'debug',
        'gamedirector',
        'gameinfo',
        'gameobjects',
        'highscores',
        'inventory',
        'mainmenu',
        'maps',
        'marquee',
        'navbar',
        'player',
        'points',
        'profile',
        'realm',
        'rules',
        'sitemap',
        'social',
        'spawner',
        'sprites',
        'stage',
        'theme'
	],

    // configure stache! plugin
    stache: { extension: '.mustache' },

    // configure hbs! plugin
    hbars: { extension: '.hbs' },

    // configure i18n! plugin
    config: {
        i18n: {
            locale: localStorage['language'] || 'en'
        }
    }
});

// Start the application (Run the main method)
requirejs(['conditioner'], function(conditioner) {
    App.start();
});