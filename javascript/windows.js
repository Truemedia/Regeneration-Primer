// Windows module
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return windows = {
		initHeader: function(){
			// Load header
			jQuery('#header_window').xslt({xmlUrl: 'windows/header/header.xml', xslUrl: 'windows/header/header.xsl'});
		},
		initFooter: function(){
			// Load footer
			jQuery('#footer_window').xslt({xmlUrl: 'windows/footer/footer.xml', xslUrl: 'windows/footer/footer.xsl'});
		},
		initHT: function(){
			// Load header and footer
			windows.initHeader();
			windows.initFooter();
		},
		initInventory: function(){
			// Load inventory window
			jQuery('#inventory_window').xslt({xmlUrl: 'windows/inventory/inventory.xml', xslUrl: 'windows/inventory/inventory.xsl'});
		},
		RearrangeForCanvas: function(){
			// Move it to the bottom of the page, when canvas has loaded 
			// TODO: assign canvas to it's own element on build to avoid need for this code
			jQuery('#inventory_window').after(jQuery('#cr-stage'));
		}
	}
});