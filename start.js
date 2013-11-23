/* 
* @file Starting file/script
* @author Wade Penistone (Truemedia)
* @overview Base script included in the HTML of any game page, for none compiled games
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
// RequireJS config
require.config({
	baseUrl: "",
	paths: {
		// Require JS plugins
		/* Hogan/Mustache */
		hgn : [
			'dependencies/hgn', // No CDN copy available, this needs to stay in main repo for ZERO setup config ..for now
			'dependencies/requirejs-hogan/hgn' 
		],
        text : [
            'dependencies/text',
            'dependencies/requirejs-hogan/text',
        	'http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text'
        ],
        hogan : [
        	'dependencies/hogan', // No CDN copy available, this needs to stay in main repo for ZERO setup config ..for now
        	'dependencies/requirejs-hogan/hogan'
        ],
        /* Internalization */
        i18n: "http://cdnjs.cloudflare.com/ajax/libs/require-i18n/2.0.1/i18n",
        
        /* Autoloader */
        conditioner: 'dependencies/conditioner',
	
		// All JavaScript files used in the game (paths arranged alphabetically)
		/* Core dependencies */
		'Crafty': [
			"http://cdn.craftycomponents.com/crafty-release", // cdn
			"dependencies/craftyjs/crafty-local" // local
		], // Crafty core
        'jQuery': [
       		"https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", // cdn 
        	"dependencies/jqueryUI/jquery-1.9.1" // local
        ], // jQuery core
        'KO': [
        	"http://ajax.aspnetcdn.com/ajax/knockout/knockout-2.2.1", // cdn
        	"dependencies/knockout/build/output/knockout-latest" // local
        ], // KnockoutJS core 
        'Modernizr': [
       		"http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.0.6/modernizr.min", // cdn 
        	"dependencies/modernizr/src/Modernizr" // local
        ], // Modernizr core
        'Bootstrap': [
        	"http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/js/bootstrap.min"
        ], // Bootstrap
        'JSONpatch': [
            "dependencies/jsonpatch.min" // local
        ], // JSON patch
        'Buzz': [
            "http://cdn.jsdelivr.net/buzz/1.0.6/buzz.min"
        ], // Buzz
        'Toastr': [
            "http://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.0/js/toastr.min"
        ], // Toastr
        
        /* Main files */
        'app': "app", // Application instance and low level application instance control methods
        'game': "game", // Game instance and low level game instance control methods
        
        /* Core classes (CLS files) */
        'Config': "regeneration/config", // Config class
        'Lang': "regeneration/lang", // Lang class
        'Package': "regeneration/package", // Package helper class
        'Page': "regeneration/page", // Page class
        'Session': "regeneration/session", // Session class
      
        /* Packages (PKG files) */
        'about.PKG': "packages/about/main", // About package
        'audio.PKG': "packages/audio/main", // Audio package
        'characterselection.PKG': "packages/characterselection/main", // Controls package
        'contentpack.PKG': "packages/contentpack/main", // Content Pack package
        'controls.PKG': "packages/controls/main", // Controls package
        'debug.PKG': "packages/debug/main", // Debugging package
        'diydie.PKG': "packages/maps/main", // Map package (Currently inline coded MAP only)
        'footer.PKG': "packages/footer/main", // Footer package
        'gamedirector.PKG': "packages/gamedirector/main", // Game Director package   
        'gameinfo.PKG': "packages/gameinfo/main", // Game Info package
        'gameobjects.PKG': "packages/gameobjects/main", // Game Objects package
        'header.PKG': "packages/header/main", // Header package
        'highscores.PKG': "packages/highscores/main", // Highscores package
        'init.PKG': "packages/init/main", // Initialization package
        'inventory.PKG': "packages/inventory/main", // Inventory package
        'mainmenu.PKG': "packages/mainmenu/main", // Main Menu package
        'marquee.PKG': "packages/marquee/main", // Marquee package
        'player.PKG': "packages/player/main", // Player package
        'points.PKG': "packages/points/main", // Points package
        'profile.PKG': "packages/profile/main", // Profile package
        'social.PKG': "packages/social/main", // Social package
        'spawner.PKG': "packages/spawner/main", // Spawner package
        'sprites.PKG': "packages/sprites/main", // Sprites package
        'theme.PKG': "packages/theme/main", // Theme package
        
        /* Modules (MOD files) */
        'Gun.MOD': "modules/gun/gun.module", // Gun module
        'Feed.MOD': "packages/gameinfo/modules/feed/main", // Feed module
        'Keyboard.MOD': "packages/controls/modules/keyboard/main", // Keyboard module
        'Health.MOD': "modules/health/health.module", // Health module
        'Mouse.MOD': "packages/controls/modules/mouse/main", // Mouse module
        'Options.MOD': "modules/options/options.module", // Options module
        'Score.MOD': "modules/score/score.module", // Score module
        
        /* Game object definitions (GOD files) */
        'Gun.GOD': "gameobjects/gun",
        'Human.GOD': "gameobjects/human",
        'Hud.GOD': "gameobjects/hud",
        
        /* jQuery plugins */
        'jQ.flyoff': "libs/jquery.flyoffpage.full", // Fly off animation
        'jQ.Datatables': "http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min", // Datatables
        
        /* Bootstrap helpers */
        'FuelUX': "http://cdn.jsdelivr.net/fuelux/2.4.0", // FuelUX (Bootstrap extended UI library)
        'Bootstrap.formhelpers.selectbox': "http://cdn.jsdelivr.net/bootstrap.formhelpers/1.8.2/js/bootstrap-formhelpers-selectbox", // Bootstrap form helper (for select boxes)
        'Bootstrap.formhelpers.countries.en_US': "http://cdn.jsdelivr.net/bootstrap.formhelpers/1.8.2/js/bootstrap-formhelpers-countries.en_US", // Bootstrap form helper (for country selection)
        'Bootstrap.formhelpers.languages.codes': "http://cdn.jsdelivr.net/bootstrap.formhelpers/1.8.2/js/bootstrap-formhelpers-languages.codes", // Bootstrap form helper (for language codes)
        'Bootstrap.formhelpers.languages': "http://cdn.jsdelivr.net/bootstrap.formhelpers/1.8.2/js/bootstrap-formhelpers-languages", // Bootstrap form helper (for languages)
        
        /* jQuery UI files */
        'jQ.ui': "https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min", // Core file
        
        /* Formatting libraries */
        'moment': "http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min", // MomentJS (Date and time formatting)
        
        /* General Libraries (For UI, FX, and API's) */
        'bindings.ko': "libs/bindings.ko" // Custom library for binding KO with JavaScript UI libraries
    },
    shim: {

    	// Dependencies
    	'jQuery': {
            exports: 'jQuery'
        },
        'Crafty': {
            exports: 'Crafty'
        },
        'KO': {
            exports: 'KO'
        },
        'Buzz': {
            exports: 'buzz'
        },
        'Modernizr': {
            exports: 'Modernizr'
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
        
        // Toastr
        'Toastr': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        
        // Bootstrap
        'FuelUX': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },

        // Knockout custom bindings
        'bindings.ko': {
            deps: ['jQ.ui', 'KO'],
            exports: 'KO'
        }
    },

    // configure hgn! plugin
    hgn : {
        templateExtension : '.mustache'
    },
    // configure i18n! plugin
    config: {
        i18n: {
            locale: localStorage['language'] || 'en'
        }
    }
});

// Run the autoloader
requirejs(['conditioner'],function(conditioner) {
	conditioner.init();
});

// Start the application (Run the main method)
require(['app'], function(app){
	app.start();
});