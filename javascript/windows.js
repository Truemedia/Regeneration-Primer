// Windows module
define(["./jQ.xml2json", "./Crafty"], function(jQuery, Crafty) {
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
			
			/* Populate ammo */
			jQuery.get('windows/inventory/inventory.xml', function(xml){
				var json = jQuery.xml2json(xml);
				
				jQuery.each(json.inventory.item, function(itemIteration, item) {
  					// Get amount of bullets and use to populate DOM relevant to item
  					var bulletList = '';
  					for(i=0; i <= item.subitem.amount; i++){
  						bulletList += '<li><img src="images/items/Guns/Bullet.png" /></li>';
  					}
  					jQuery('.inventory_item:eq('+itemIteration+') .actual_bullet_list').append(bulletList);
				});
			});
			/* /Populate ammo */
		}
	}
});