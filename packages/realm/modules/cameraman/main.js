/* 
* @file Cameraman MODULE
* @author Wade Penistone (Truemedia)
* @overview Realm package module used for controlling camera in 3D Environment
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['three', 'keyboard'], function(THREE, KeyboardJS)
{
	cameraman =
	{
		cameras: [new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)],

		/* Make cameraman do his job */
		work: function(scene)
		{
			this.align_cameras(scene.position);
			this.register_controls();
		},

		/* Move cameras into position */
		align_cameras: function(focus)
		{
			this.cameras[0].position.set( -15, 10, 15 );
	    	this.cameras[0].lookAt(focus);
		},

		/* Controls to manipulate camera */
		register_controls: function()
		{
			KeyboardJS.on('w', function()
			{
			    cameraman.cameras[0].position.z--;
			});
			KeyboardJS.on('a', function()
			{
			    cameraman.cameras[0].position.x--;
			});
			KeyboardJS.on('s', function()
			{
			    cameraman.cameras[0].position.z++;
			});
			KeyboardJS.on('d', function()
			{
			    cameraman.cameras[0].position.x++;
			});
		}
	};

	return cameraman;
});