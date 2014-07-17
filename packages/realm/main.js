/**
 * @file Realm PACKAGE
 * @author Wade Penistone (Truemedia)
 * @overview Core Regeneration Primer package used for displaying/loading 3D worlds
 * @copyright Wade Penistone 2014
 * @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
 * Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
 * Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
 */
define([
	"Modernizr", "jQuery", "three"
], function(Modernizr, jQuery, THREE)
{
	/** 
     * Realm package
     * @namespace realm
     */
	realm = {
		
		// Package options
		settings: null,

		scene: new THREE.Scene(),
		camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000),
		renderer: new THREE.WebGLRenderer(),
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			this.cameraman();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		},
			
		/* Autoloading hook */
	    load: function(element, options)
	    {
	    	this.init(options);
	    	this.view(element);
	    },

	    view: function(element)
	    {
	    	jQuery(element).append(this.renderer.domElement);
	    	this.grid(15, '#00FF00');
	    	this.renderer.render(this.scene, this.camera);
	    },

	    /* Set starting view */
	    cameraman: function()
	    {
	    	this.camera.position.set(20, 40, 50);
	    	this.camera.lookAt(this.scene.position)
	    },

	    /* Draw land */
	    grid: function(size, color)
	    {
	    	var step = 1;
	    	var geometry = new THREE.Geometry();
	    	var material = new THREE.LineBasicMaterial({ color: color });

	    	for (var i = - size; i <= size; i += step)
	    	{
	    		geometry.vertices.push(new THREE.Vector3(- size, - 0.04, i));
	    		geometry.vertices.push(new THREE.Vector3(size, - 0.04, i));

	    		geometry.vertices.push(new THREE.Vector3(i, - 0.04, - size));
	    		geometry.vertices.push(new THREE.Vector3(i, - 0.04, size));

	    		var grid = new THREE.Line(geometry, material, THREE.LinePieces);
	    		this.scene.add(grid);
	    	}
	    }
	};

	return realm;
});