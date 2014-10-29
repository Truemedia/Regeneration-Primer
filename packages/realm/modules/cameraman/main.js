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

		/* Put cameraman to work */
		work: function(scene, coords)
		{
			this.align_cameras(scene.position, coords);
			this.register_controls(0);
		},

		/* Move cameras into position */
		align_cameras: function(focus, coords)
		{
			this.cameras[0].position.set(coords.x, coords.y, coords.z);
	    	this.cameras[0].lookAt(focus);
	    	this.cameras[0].rotation.set(0, 80, 80);
		},

		/* Controls to manipulate camera */
		register_controls: function(current_camera)
		{
			var controls = Config.get('realm::controls.keyboard');

			// Walking/Running
			KeyboardJS.on(controls.step_forward.key, function()
			{
			    cameraman.cameras[current_camera].translateZ( -parseFloat(controls.step_forward.sensitivity) );
			});
			KeyboardJS.on(controls.sidestep_left.key, function()
			{
			    cameraman.cameras[current_camera].translateX( -parseFloat(controls.sidestep_left.sensitivity) );
			});
			KeyboardJS.on(controls.step_backward.key, function()
			{
			    cameraman.cameras[current_camera].translateZ( parseFloat(controls.step_backward.sensitivity) );
			});
			KeyboardJS.on(controls.sidestep_right.key, function()
			{
			    cameraman.cameras[current_camera].translateX( parseFloat(controls.sidestep_right.sensitivity) );
			});

			// Looking/Finding
			KeyboardJS.on(controls.look_up.key, function()
			{
			    cameraman.cameras[current_camera].rotation.y -= parseFloat(controls.look_up.sensitivity);
			});
			KeyboardJS.on(controls.look_left.key, function()
			{
			    cameraman.cameras[current_camera].rotation.x -= parseFloat(controls.look_left.sensitivity);
			});
			KeyboardJS.on(controls.look_down.key, function()
			{
			    cameraman.cameras[current_camera].rotation.y += parseFloat(controls.look_down.sensitivity);
			});
			KeyboardJS.on(controls.look_right.key, function()
			{
			    cameraman.cameras[current_camera].rotation.x += parseFloat(controls.look_right.sensitivity);
			});
		}
	};

	return cameraman;
});