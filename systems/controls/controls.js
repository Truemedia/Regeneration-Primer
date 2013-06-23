/* 
* @file Controls SYSTEM
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for making complex interactions with DOM or Canvas using most common HID's (Human interface devices) 
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./tooltip.SYS"], function(jQuery, Crafty, tooltip) {
	return controls = {
		mapper: function(){
			Crafty.c("LeftControls", {
    			init: function() {
       				this.requires('Multiway');
    			},
    
    			leftControls: function(speed) {
        			this.multiway(speed, {W: -90, S: 90, D: 0, A: 180})
        			return this;
   				}  
			});
		},
		hints: function(button, event){
			// Stuff to show a first time player (control hints)
			tooltip.init(button, event);
		}
	}
});