// Library for apply custom UI bindings using knockout
// TODO: Setup as submodule and develop or find a complete jQueryUI to KnockOut library
define(["./jQ.ui", "./KO"], function(jQuery, ko) {
	ko.bindingHandlers.progress = {
    	init: function(element, valueAccessor) {
        	jQuery(element).progressbar({
            	value: 94 // TODO: Make the binding pass a value
        	});
    	},
    	update: function(element, valueAccessor) {
			var val = ko.utils.unwrapObservable(valueAccessor());
			if(val == 0){
				jQuery(element).progressbar("value", false);
			}
			else{
				jQuery(element).progressbar("value", parseFloat(val));
			}
   		}
	};
	ko.bindingHandlers.singleton = {
    	update: function(element, valueAccessor) {
    		// If player is human, update there score
    		var containing_element = jQuery(element).parent().parent().parent().parent().parent().get(0);
    		if(jQuery(containing_element).is(':first-child')){
    			var val = ko.utils.unwrapObservable(valueAccessor());
    			jQuery("#my_score").html(val);
    		}
   		}
	}
	return ko;
});