/* 
* @file Bootstrap file/script
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
		// All JavaScript files used in the game (paths arranged alphabetically)
		/* Core dependencies */
		'Crafty': [
			/* TODO: Find bug that makes characters HUGE! when using CDN "http://cdn.craftycomponents.com/crafty-release", // cdn */
			"dependencies/craftyjs/crafty-local" // local
		], // Crafty core
        'jQuery': [
       		"https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", // cdn 
        	"dependencies/jqueryUI/jquery-1.9.1" // local
        ], // jQuery core
        'jQ.xslt': "libs/jquery.xslt", // jQuery XSLT plugin (JXON)
        'jQ.xml2json': "libs/jquery.xml2json", // jQuery XML2JSON plugin (JXON)
        'KO': "dependencies/knockout/build/output/knockout-latest", // KnockoutJS core
        
        /* Main game (shabang code) */
        'game': "game", // Entire game instance and low level game instance control methods
                
        /* Systems (Core game mechanics) */
        'audio': "systems/audio", // Audio system
        'characterselection': "systems/characterselection", // Controls system
        'config': "systems/config", // Game Config system
        'controls': "systems/controls", // Controls system
        'debug': "systems/debug", // Debugging system
        'diydie': "systems/maps", // Map System (Currently inline coded MAP only)
        'gamedirector': "systems/gamedirector", // Game Director system
        'gameobjects': "systems/gameobjects", // Game Objects system
        'health': "systems/health", // Health system
        'init': "systems/init", // Initialization system
        'marquee': "systems/marquee", // Marquee system
        'notification': "systems/notification", // Notification system
        'scores': "systems/scores", // Scoring system
        'social': "systems/social", // Social system
        'spawner': "systems/spawner", // Spawner system
        'sprites': "systems/sprites", // Sprites system
        'tooltip': "systems/tooltip", // Tooltips system
        'windows': "systems/windows", // AJAX-XSLT templates system
        
        /* Game modules */
        'Gun.MOD': "modules/gun/gun.module", // Gun module
        
        /* jQuery plugins */
        'jQ.flyoff': "libs/jquery.flyoffpage.full", // Fly off animation
        
        /* jQuery UI files */
        'jQ.ui.accordion': "dependencies/jqueryUI/ui/jquery.ui.accordion", // Accordion
        'jQ.ui.autocomplete': "dependencies/jqueryUI/ui/jquery.ui.autocomplete", // Auto Complete
        'jQ.ui.button': "dependencies/jqueryUI/ui/jquery.ui.button", // Button
        'jQ.ui.core': "dependencies/jqueryUI/ui/jquery.ui.core", // Core file
        'jQ.ui.datepicker': "dependencies/jqueryUI/ui/jquery.ui.datepicker", // Date Picker
        'jQ.ui.dialog': "dependencies/jqueryUI/ui/jquery.ui.dialog", // Dialog
        'jQ.ui.draggable': "dependencies/jqueryUI/ui/jquery.ui.draggable", // Draggable
        'jQ.ui.droppable': "dependencies/jqueryUI/ui/jquery.ui.droppable", // Droppable
        'jQ.ui.effect': "dependencies/jqueryUI/ui/jquery.ui.effect", // Effect
        'jQ.ui.menu': "dependencies/jqueryUI/ui/jquery.ui.menu", // Menu
        'jQ.ui.mouse': "dependencies/jqueryUI/ui/jquery.ui.mouse", // Mouse
        'jQ.ui.position': "dependencies/jqueryUI/ui/jquery.ui.position", // Position
       	'jQ.ui.progressbar': "dependencies/jqueryUI/ui/jquery.ui.progressbar", // Progress bar
       	'jQ.ui.resizable': "dependencies/jqueryUI/ui/jquery.ui.resizable", // Resizable
       	'jQ.ui.selectable': "dependencies/jqueryUI/ui/jquery.ui.selectable", // Selectable
       	'jQ.ui.slider': "dependencies/jqueryUI/ui/jquery.ui.slider", // Slider
       	'jQ.ui.sortable': "dependencies/jqueryUI/ui/jquery.ui.sortable", // Sortable
       	'jQ.ui.spinner': "dependencies/jqueryUI/ui/jquery.ui.spinner", // Spinner
       	'jQ.ui.tabs': "dependencies/jqueryUI/ui/jquery.ui.tabs", // Tabs
       	'jQ.ui.tooltip': "dependencies/jqueryUI/ui/jquery.ui.tooltip", // Tooltip
        'jQ.ui.widget': "dependencies/jqueryUI/ui/jquery.ui.widget", // Core widget file
        
        /* Libraries (For UI, FX, and API's) */
        'forkit': "libs/forkitJs/js/forkit" // ForkIt fancy link
    },
    shim: {
    	// Dependencies
    	'jQuery': {
            exports: 'jQuery'
        },
        'Crafty': {
            exports: 'Crafty'
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
        'jQ.ui.widget': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        'jQ.ui.accordion': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.autocomplete': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.button': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.core': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.datepicker': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.dialog': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.draggable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.droppable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.effect': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.menu': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.mouse': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.position': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.progressbar': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        }, 
       	'jQ.ui.resizable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.selectable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.slider': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.sortable': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.spinner': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
       	'jQ.ui.tabs':  {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        'jQ.ui.tooltip': {
            deps: ['jQuery', 'jQ.ui.widget'],
            exports: 'jQuery'
        },
        
        // Systems
        'config': ['jQuery', 'Crafty'],
        'game': ['jQuery', 'Crafty'],
        'characterselection': ['jQuery', 'Crafty'],
        'scores': ['jQuery', 'Crafty'],
        'audio': ['jQuery', 'Crafty'],
        'health': ['jQuery', 'Crafty'],
        'debug': ['jQuery', 'Crafty'],
        'init': ['jQuery', 'Crafty'],
        'sprites': ['jQuery', 'Crafty'],
        'controls': ['jQuery', 'Crafty'],
        'diydie': ['jQuery', 'Crafty'],
        'spawner': ['jQuery', 'Crafty'],
        'gameobjects': ['jQuery', 'Crafty'],
        'gamedirector': ['jQuery', 'Crafty', 'spawner'],
        'windows': ['jQuery', 'Crafty']
    }
});
// Run the game launcher (Game system - method)
require(['game'], function(game) {
	game.launch();
});