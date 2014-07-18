/* 
* @file Environment MODULE
* @author Wade Penistone (Truemedia)
* @overview Realm package module used for creating 3D environment inside of THREEjs instance
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['three'], function(THREE)
{
	environment =
	{
		scene: new THREE.Scene(),

		/* Build environment */
		build: function()
		{
			this.grid(15, '#00FF00');
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
	    }
	};

	return environment;
});