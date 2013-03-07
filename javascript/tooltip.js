// Tooltip module
define(["./jQ.ui.tooltip", "./Crafty"], function(jQuery, Crafty) {
	return tooltip = {
		init: function(button, event){
			/* Button special cases */
			switch(button){
				// Tooltips
				case 'controls':
					var buttonType = "tooltip";
					var tooltipParent = button+"_"+buttonType;
					var mouseover_icon = "notice";
					var mouseout_icon = "help";
					break;
				// Toggles
				case 'audio':
					var buttonType = "toggle";
					var tooltipParent = button+"_"+buttonType;
					break;
				case 'debug':
					var buttonType = "toggle";
					var tooltipParent = button+"_"+buttonType;
					break;
			}
			/* /Button special cases */

			if(event.type == "mouseenter"){
				console.log("Showing "+button+" tooltip");
				// jQueryUI tooltip is awkward, need this code to standardize positioning or goes to bottom of page
				if(button == 'controls'){
    				jQuery('#'+tooltipParent).tooltip({ 
    					tooltipClass: 'tooltip',
    					content: function() {
    						var tooltip_content = "<span class='control_instruction'><span class='key_expression_hold'>Hold </span><span class='key_hint'>'SHIFT'</span> to view scores</span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'SPACE'</span> to toggle inventory</span>"
    						+"<span class='control_instruction'><span class='key_hint'>'LEFT CLICK'</span> mouse to shoot<br /></span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'T'</span> to throw away mag</span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'E'</span> to enter new mag</span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'R'</span> to reconnect new mag</span>"
    						+"<span class='control_instruction'><span class='key_expression_press'>Press </span><span class='key_hint'>'C'</span> to chamber</span>";
    						return tooltip_content;
    					}
    				});
    			}
    			else{
    				jQuery('#'+tooltipParent).tooltip({tooltipClass: 'tooltip'});
    			}
   				jQuery('#'+tooltipParent).mousemove(function(e){
    				var position = jQuery(this).position();
    				var offset = jQuery(this).offset();
    				var x = e.pageX - (offset.left);
    				var y = e.pageY - (offset.top);
    				jQuery('.tooltip').css({'left': e.pageX+18, 'top': e.pageY+18});
  				});
    			
    			if(buttonType == "tooltip"){
					jQuery("#"+tooltipParent+" > span").removeClass("ui-icon-"+mouseout_icon)
						.addClass("ui-icon-"+mouseover_icon);
				}
				jQuery("label[for="+tooltipParent+"]").addClass("current");
			}
			else{
				console.log("Hiding "+button+" tooltip");
				jQuery('#tooltip').remove();
				if(buttonType == "tooltip"){
					jQuery("#"+tooltipParent+" > span").removeClass("ui-icon-"+mouseover_icon)
						.addClass("ui-icon-"+mouseout_icon);
				}
				jQuery("label[for="+tooltipParent+"]").removeClass("current");
			}
		}
	}
});