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
				
		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			
		},
			
		/* Autoloading hook */
	    load: function(element, options)
	    {

	    	// ThreeJS settings
			var __WIDTH__  = window.screen.availWidth,
			    __HEIGHT__ = window.screen.availHeight,
			    __HUE__   = 0;

			var scene  = new THREE.Scene(), 
			    camera = Camera.init(__WIDTH__, __HEIGHT__),
			    renderer = new THREE.WebGLRenderer();

			// Check for browser pointer lock capabilities
			if (Modernizr.pointerlock) { alert("Still ok"); } else { console.log(Modernizr.pointerlock); }

			/**
			 * Let's preapare the scene
			 */
			scene.add(camera);
			camera.position.z = 300;
			renderer.setSize(__WIDTH__, __HEIGHT__);
			jQuery(element).append(renderer.domElement);

			/**
			 * Now we are ready, we can start building our planet
			 * To do this, we need a mech define with :
			 * A geometry (a sphere) 
			 * A material
			 */
			var geometry, material, mesh;

			// Flooring
			geometry = new THREE.PlaneGeometry( 300, 300 );
			material = new THREE.MeshBasicMaterial( { color: 0xABABAB } );
			mesh = new THREE.Mesh( geometry, material );
			scene.add( mesh );

			// First let's build our geometry
			// There is other parameters, but you basically just need to define the radius of the Sphere and the number of vertical and horizontal division.
			// From the 2 last parameters depend the number of vertex that will be produce : the biger the smoother the form will be but also the slower it will be to render. Make a wise choice to balance the 2.
			geometry = new THREE.SphereGeometry( 100, 20, 20 );

			// Then, prepare our material
			var myMaterial = {
			    wireframe : true,
			    wireframeLinewidth : 2
			};

			// We just have to build the material now
			material = new THREE.MeshPhongMaterial( myMaterial );

			var starting_colour = Colour.HSVtoRGB(__HUE__, 1, 1);

			// Add some color to the material
			material.color.setRGB(starting_colour.r, starting_colour.g, starting_colour.b);

			// And  we can build our the mesh
			mesh = new THREE.Mesh( geometry, material );

			// Let's add the mesh to the scene
			scene.add( mesh );

			/**
			 * To be sure that we will see something, we need to add some light to the scene
			 */

			// Let's create a point light
			var pointLight = new THREE.PointLight(0xFFFFFF);

			// and set its position
			pointLight.position.x = -100;
			pointLight.position.y = 100;
			pointLight.position.z = 400;

			// Now, we can add it to the scene
			scene.add( pointLight );


			// And finally it's time to see the result
			renderer.setClearColor( 0x9afdff, 1);
			renderer.render( scene, camera );


			/**
			 * Let's make the sphere spin
			 */

			// Simple requestAnimationFrame shim
			if (!window.requestAnimationFrame) {
			    window.requestAnimationFrame = (function(){
			        return  window.webkitRequestAnimationFrame || 
			                window.mozRequestAnimationFrame    || 
			                window.oRequestAnimationFrame      || 
			                window.msRequestAnimationFrame     || 
			                function( callback ){
			                    window.setTimeout( callback, 1000 / 60 );
			                };
			    })();
			}

			// The frame computation function
			function animate() {
			    requestAnimationFrame( animate );
			    
			    __HUE__ = __HUE__ < 1 ? __HUE__ += 0.0005 : 0;
			    var new_colour = Colour.HSVtoRGB( __HUE__, 1, 1);
			    material.color.setRGB(new_colour.r, new_colour.g, new_colour.b); 
			    
			    mesh.rotation.y -= 0.003;
			    
			    renderer.render( scene, camera );
			}

			// And go!
			animate();

	    },

	    /* Lock pointer to realm package */
	    pointer_lock: function()
		{
			var element = document.body;

			var pointerlockchange = function (event) {

				if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
					controls.enabled = true;
					blocker.style.display = 'none';
				} else {
					controls.enabled = false;
					blocker.style.display = '-webkit-box';
					blocker.style.display = '-moz-box';
					blocker.style.display = 'box';
					instructions.style.display = '';
				}

			};

			var pointerlockerror = function (event) { instructions.style.display = ''; };

			// Hook pointer lock state change events
			document.addEventListener('pointerlockchange', pointerlockchange, false);
			document.addEventListener('mozpointerlockchange', pointerlockchange, false);
			document.addEventListener('webkitpointerlockchange', pointerlockchange, false);
			document.addEventListener('pointerlockerror', pointerlockerror, false);
			document.addEventListener('mozpointerlockerror', pointerlockerror, false);
			document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

			instructions.addEventListener('click', function (event) {
			instructions.style.display = 'none';

			// Ask the browser to lock the pointer
			element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

			if (/Firefox/i.test(navigator.userAgent)) {

				var fullscreenchange = function (event) {
					if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {
						document.removeEventListener('fullscreenchange', fullscreenchange);
						document.removeEventListener('mozfullscreenchange', fullscreenchange);
						element.requestPointerLock();
					}

				};

				document.addEventListener('fullscreenchange', fullscreenchange, false);
				document.addEventListener('mozfullscreenchange', fullscreenchange, false);
				element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
				element.requestFullscreen();
			} else {
				element.requestPointerLock();
			}

			}, false );
		}   
	};

	return realm;
});