/* 
* @file Colour CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for manipulating colours
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
(function (root, factory)
{
	if (typeof exports === 'object') // CommonJS
	{
    	module.exports = factory();
	}
	else if (typeof define === 'function' && define.amd) // AMD
	{
    	define([], function () {
      		return (root.returnExportsGlobal = factory());
    	});
  	}
  	else // Global Variables
  	{
    	root.returnExportsGlobal = factory(root);
  	}
} (this, function()
	{
  	// Your actual module
	Colour = {

		// Current colour value (stored in all formats)
		value: {
			'hex': ["00", "00", "00"],
			'rgb': {
				r: 0,
				g: 0,
				b: 0
			},
			'hsv': {
				h: 0,
				s: 0,
				v: 0
			}
		},

		/* Convert HSV colour attributes to RGB colour attributes
			* h  Object = {h:x, s:y, v:z}
			* OR 
			* h, s, v
		*/
		HSVtoRGB: function(h, s, v)
		{
		    var r, g, b, i, f, p, q, t;
		    if (h && s === undefined && v === undefined) {

		    	// Single parameter as object
		    	h = h.h;
		    	s = h.s;
		    	v = h.v;
		    }
		    i = Math.floor(h * 6);
		    f = h * 6 - i;
		    p = v * (1 - s);
		    q = v * (1 - f * s);
		    t = v * (1 - (1 - f) * s);
		    switch (i % 6) {
		        case 0 :
		        	r = v;
		        	g = t;
		        	b = p;
		        break;
		        case 1 :
		        	r = q;
		        	g = v;
		        	b = p;
		        break;
		        case 2 :
		        	r = p;
		        	g = v;
		        	b = t;
		        break;
		        case 3 :
		        	r = p;
		        	g = q;
		        	b = v;
		        break;
		        case 4 :
		        	r = t;
		        	g = p;
		        	b = v;
		        break;
		        case 5 :
		        	r = v;
		        	g = p;
		        	b = q;
		        break;
		    }
		    return {
		        r: Math.floor(r * 255),
		        g: Math.floor(g * 255),
		        b: Math.floor(b * 255)
		    };
		}
	};

	return Colour;
}));