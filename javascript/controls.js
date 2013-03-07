// Controls module
define(["./jQuery", "./Crafty", "./tooltip"], function(jQuery, Crafty, tooltip) {
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