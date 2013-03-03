// Windows module
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		initInventory: function(){
			// The magic
			jQuery('#inventory_window').xslt({xmlUrl: 'windows/inventory/inventory.xml', xslUrl: 'windows/inventory/inventory.xsl'});
		}
	}
});