/* 
* @file Environment MODULE
* @author Wade Penistone (Truemedia)
* @overview Realm package module used for creating 3D environment inside of THREEjs instance
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['three', './geo'], function(THREE, geo)
{
	environment =
	{
		scene: new THREE.Scene(),
		coords:
		{
			x: null,
			y: null,
			z: null
		},

		/* Build environment */
		build: function()
		{
			this.lighting();
			var world = geo.drawThreeGeo(Config.get('realm::geo'), 1000, 'plane', {
				color: '#ffff00'
			});
			for (var i=0; i<world.length; i++)
			{
				this.scene.add( world[i] );
			}
			this.grid(15, '#FFFF00');
			this.load_players();
			this.house();
		},

		// Number of player instances
		instances: 0,

		/* Lighting rig */
		lighting: function()
		{
			// add subtle ambient lighting
	     	var ambientLight = new THREE.AmbientLight(0xcdcdcd);
	    	this.scene.add(ambientLight);
      
	    	// directional lighting
	    	var directionalLight = new THREE.DirectionalLight(0xffffff);
	    	directionalLight.position.set(1, 1, 1).normalize();
	    	this.scene.add(directionalLight);
		},

		/* Build house using external JSON model (of IFC file origins) */
		house: function()
		{
			var loader = new THREE.JSONLoader(); // init the loader util

			// init loading
			loader.load('assets/model/building.json', function (geometry) {
			  
			  // create a mesh with models geometry and material
			  var mesh = new THREE.Mesh(
			    geometry,
			    new THREE.MeshNormalMaterial()
			  );
			  
				this.scene.add(mesh);
			});
		},

	    /* Draw grid */
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
	    },

	    /* Spawn all players */
	    load_players: function()
	    {
			jQuery.ajaxSetup({ async: false });
			jQuery.getJSON("packages/characterselection/info/characters_advanced.json", function(data){
				characters = data.characters;
			});
			jQuery.ajaxSetup({ async: true });

			jQuery.each(characters, function(index, obj)
			{
				environment.load_player(obj.identifierReference);
			});
	    },

	    /* Spawn single player (as cube for now) */
	    load_player: function(player_identifier)
	    {
	    	
	    	var texture = THREE.ImageUtils.loadTexture('themes/debug/assets/images/characters/(' + player_identifier + ')_mini.png', {}, function()
	    	{
	    		// Do texture additions here
	    	});
	    	texture.needsUpdate = true;

	    	// Properties
	    	var geometry = new THREE.BoxGeometry(1, 1, 1);
	    		material = new THREE.MeshLambertMaterial( { map: texture } );
	    		spacing = 1;

	    	var mesh = new THREE.Mesh(geometry, material);
	    		mesh.position.x = (-14 + this.instances + (spacing * this.instances));
	    		mesh.position.y = 5;
	    		mesh.position.z = 10;

	    	if (this.instances === 1)
	    	{
	    		environment.coords = mesh.position;
	    	}

	    	this.scene.add(mesh);

	    	this.instances += 1;
	    }
	};

	return environment;
});