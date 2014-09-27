/* 
* @file Graphics MODULE
* @author Wade Penistone (Truemedia)
* @overview Realm package module used for controlling graphical output to browser
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['three', 'jQuery'], function(THREE, $)
{
	graphics =
	{
		renderer: new THREE.WebGLRenderer(),

		/* Initialize graphical container */
		init: function(element)
		{
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			jQuery(element).append(this.renderer.domElement);
		},

		/* Display graphics */
		display: function(scene, cameras)
		{
			// Create animation loop
			function animate()
			{
			  graphics.renderer.render(scene, cameras);

			  var timer = Date.now() * 0.0005;
			  cameras.position.x = Math.cos(timer) * 10;
			  cameras.position.y = Math.sin(timer) * 10;
			  cameras.lookAt(scene.position);
			  graphics.debug(cameras.position);

			  requestAnimationFrame(animate);
			};
			animate();
		},

		/* Show details of environment in debugging window */
		debug: function(position)
		{
			var x = parseInt(position.x),
				y = parseInt(position.y),
				z = parseInt(position.z);

			$('#x_pos').html(x);
			$('#y_pos').html(y);
			$('#z_pos').html(z);
		}
	};

	return graphics;
});