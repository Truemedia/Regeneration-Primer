/* 
* @file Health SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for tracking health of any object of any nature
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQ.ui.progressbar", "./Crafty"], function(jQuery, Crafty) {
	return health = {
		default_health_unit: 94,
		lifeSetup: function(){
			jQuery('.score').after("<div class='player_health'></div>"+
			"<div class='player_health_stats'>HP: (<span class='player_health_unit'>"+health.default_health_unit+"</span>/100)</div>");
			jQuery(".player_health").progressbar({
				value: health.default_health_unit
			});
		}
	}
});