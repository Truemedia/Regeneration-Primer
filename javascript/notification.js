// Notification module
define(["./jQuery", "./Crafty", "./windows"], function(jQuery, Crafty, windows) {
	return notification = {
		init: function(){
			/* TODO: consider using noty (jQuery plugin) for notifications enhancement */
			// Build notification
			jQuery('#cr-stage').append("<div id='notification_window'></div>");
			windows.init({"notification":''});
			// ..and then hide
			jQuery('#notification_window').hide();
		},
		highlight: function(shortText, longText){
			notification.cleanup();
			// Emphasize an import action, by notifying the user of it
			jQuery("#notification_short_text").html(shortText);
			jQuery("#notification_long_text").html(longText);
			jQuery("#notification_system").addClass("ui-state-highlight");
			jQuery("#notification_window").show(300, function(){
				jQuery("#notification_window").delay(1500).fadeOut('fast');
			});
		},
		error: function(shortText, longText){
			notification.cleanup();
			// Emphasize an import bad action (mistake) by notifying the user of it
			jQuery("#notification_short_text").html(shortText);
			jQuery("#notification_long_text").html(longText);
			jQuery("#notification_system").addClass("ui-state-error")
			jQuery("#notification_window").show(300, function(){
				jQuery("#notification_window").delay(1500).fadeOut('fast');
			});
		},
		cleanup: function(){
			// Remove classes
			if(jQuery("#notification_system").hasClass("ui-state-highlight")){
				jQuery("#notification_system").removeClass("ui-state-highlight");
			}
			if(jQuery("#notification_system").hasClass("ui-state-error")){
				jQuery("#notification_system").removeClass("ui-state-error");
			}
		}
	}
});