/* 
* @file Camera CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for positioning and viewing an environment (2D or 3D)
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['three'], function(THREE) {
	return Camera = {

		// Default internal values
		pos: {
			width: 400,
			height: 400,
			angle: 45,
			near: 1,
			far: 1000
		},

		context: "3D", // 2D or 3D

		/* Turn on camera */
		init: function(width, height)
		{
			if (this.context === "3D") {

				if (width !== undefined) {
					this.pos.width = width;
				}
				if (height !== undefined) {
					this.pos.height = height;
				}

				return new THREE.PerspectiveCamera(this.pos.angle, (this.pos.width / this.pos.height), this.pos.near, this.pos.far);
			}
		}
	}
});