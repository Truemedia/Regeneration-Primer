// Controls module
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
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
		}
	}
});