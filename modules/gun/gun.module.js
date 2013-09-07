/* 
* @file Gun MODULE
* @author Wade Penistone (Truemedia)
* @overview Regeneration Primer bundled module used for handling Gun objects in DOM
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./KO", "./Config"], function(jQuery, ko, Config) {
	return Gun = {
		binding_element_id: "inventory_partial",
		init: function(){
			// TODO: Ammo count viewmodel (in progress)
			/*jQuery('.inventory_item').each(function(itemIteration, item) {
					ko.applyBindings(new Gun.ViewModel(), jQuery('.inventory_item:eq('+itemIteration+')'));
			});*/
			// Setup test view model
			ko.applyBindings(new Gun.TestViewModel("Player", "Name"), document.getElementById(Gun.binding_element_id)); // This makes Knockout get to work
		},
		// Here's my data model
		TestViewModel: function(first, last){
			this.firstName = ko.observable(first);
    		this.lastName = ko.observable(last);
 
    		this.fullName = ko.computed(function() {
        	// Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
        		return this.firstName() + " " + this.lastName();
    		}, this);
    	},
		/*ViewModel: function() { 
			this.ammo = ko.observableArray();
		
    		this.ammoCount = ko.computed(function() {
        		// It knows to change when this event returns a result different from the previous result
        		return ViewModel.ammo().length;
    		}, this);
		},*/
		populateAmmo: function(){
			var contentpack = Config.get('game.content_pack', 'default');
			jQuery.get('packages/inventory/inventory.xml', function(xml){
				var json = jQuery.xml2json(xml);
				
				jQuery.each(json.inventory.item, function(itemIteration, item) {
  					// Get amount of bullets and use to populate DOM relevant to item
  					var ammoCount = jQuery(".subitem_value:eq("+itemIteration+")").html(item.subitem.amount);
  					// Number of current bullets
					var current_bullets = jQuery(".actual_bullet_list:eq("+itemIteration+") > li").length;
					var bullets_needed = item.subitem.amount - current_bullets;
  					var bulletList = '';
  					for(i=1; i <= bullets_needed; i++){
  						bulletList += '<li><img src="multimedia/'+contentpack+'-contentpack/images/items/Guns/Bullet.png" /></li>';
  					}
  					jQuery('.inventory_item:eq('+itemIteration+') .actual_bullet_list').append(bulletList);
  					// Log the items we aqquired
  					console.log("Loaded "+item.subitem.amount+" bullets for "+item.name+" (item "+itemIteration+")");
				});
			});
		},
		// TODO: Find the memory leak bug in this function, and use to spawn guns when fixed
		wield: function(gun_sprite, single_or_dual, dimensions){
			if(single_or_dual == "dual"){
				var gun_count = 2;
			}
			else{
				var gun_count = 1;
			}
			// Default dimension offsets
			var weapon_layer = 6;
			
			for(var gun_counter = 1; gun_counter <= gun_count; gun_counter++){
				if(gun_counter == 2){
					var gun_x = (dimensions[0]*2)+10;
				}
				else{
					var gun_x = dimensions[0];
				}
				Crafty.e("2D, DOM, wall_left, solid, "+gun_sprite+", LeftControls")
				// Draw the sprite
				.attr({x: gun_x, y: 98, z: weapon_layer})
				// Add controls to this object
				.leftControls(3);
			}
		}
	}
});