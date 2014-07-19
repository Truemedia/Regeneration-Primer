/* 
* @file Graphics MODULE
* @author Wade Penistone (Truemedia)
* @overview Realm package module used for controlling graphical output to browser
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['three'], function(THREE)
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
			function animate(){
			  graphics.renderer.render(scene, cameras);
			  requestAnimationFrame(animate);
			};
			animate();
		}
	};

	return graphics;
});