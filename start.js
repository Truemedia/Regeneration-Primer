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
        	'dependencies/text', // No CDN copy available, this needs to stay in main repo for ZERO setup config ..for now
        	'dependencies/requirejs-hogan/text'
        ],
        hogan : [
        	'dependencies/hogan', // No CDN copy available, this needs to stay in main repo for ZERO setup config ..for now
        	'dependencies/requirejs-hogan/hogan'
        ],
	
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
        'jQ.xslt': "libs/jquery.xslt", // jQuery XSLT plugin (JXON)
        'jQ.xml2json': "libs/jquery.xml2json", // jQuery XML2JSON plugin (JXON)
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
        
        /* Main game (shabang code) */
        'game': "game", // Entire game instance and low level game instance control methods
      
        /* Systems (Core game mechanics) */
        'about.SYS': "systems/about/about", // About system
        'audio.SYS': "systems/audio/audio", // Audio system
        'characterselection.SYS': "systems/characterselection/characterselection", // Controls system
        'config.SYS': "systems/config/config", // Game Config system
        'controls.SYS': "systems/controls/controls", // Controls system
        'debug.SYS': "systems/debug/debug", // Debugging system
        'diydie.SYS': "systems/maps/maps", // Map System (Currently inline coded MAP only)
        'gamedirector.SYS': "systems/gamedirector/gamedirector", // Game Director system
        'gameinfo.SYS': "systems/gameinfo/gameinfo", // Game Info system
        'gameobjects.SYS': "systems/gameobjects/gameobjects", // Game Objects system
        'init.SYS': "systems/init/init", // Initialization system
        'mainmenu.SYS': "systems/mainmenu/mainmenu", // Main Menu system
        'marquee.SYS': "systems/marquee/marquee", // Marquee system
        'notification.SYS': "systems/notification/notification", // Notification system
        'player.SYS': "systems/player/player", // Player system
        'points.SYS': "systems/points/points", // Points system
        'profile.SYS': "systems/profile/profile", // Profile system
        'social.SYS': "systems/social/social", // Social system
        'spawner.SYS': "systems/spawner/spawner", // Spawner system
        'sprites.SYS': "systems/sprites/sprites", // Sprites system
        'theme.SYS': "systems/theme/theme", // Theme system
        'tooltip.SYS': "systems/tooltip/tooltip", // Tooltips system
        /* TODO: Get this system setup as a requirejs text library, rather than a system */
        'windows.SYS': "systems/windows", // AJAX-XSLT templates system
        
        /* Game modules */
        'Gun.MOD': "modules/gun/gun.module", // Gun module
        'Health.MOD': "modules/health/health.module", // Health module
        'Score.MOD': "modules/score/score.module", // Score module
        
        /* jQuery plugins */
        'jQ.flyoff': "libs/jquery.flyoffpage.full", // Fly off animation
        'jQ.Datatables': "http://ajax.aspnetcdn.com/ajax/jquery.dataTables/1.9.4/jquery.dataTables.min", // Datatables
        
        /* jQuery UI files */
        'jQ.ui': "https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min", // Core file
        
        /* Libraries (For UI, FX, and API's) */
        //'forkit': "libs/forkitJs/js/forkit", // ForkIt fancy link
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
        'Modernizr': {
            exports: 'Modernizr'
        },

        // jQuery plugins
        'jQ.xslt': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        'jQ.xml2json': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
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
        // jQuery UI 
        'Bootstrap': {
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
    }
});
// Run the game launcher (Game system - method)
require(['game'], function(game){
	game.launch();
});