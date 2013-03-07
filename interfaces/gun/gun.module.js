// Gun module
define(["./jQuery", "./KO"], function(jQuery, ko) {
	return Gun = {
		init: function(){
			// TODO: Ammo count viewmodel (in progress)
			/*jQuery('.inventory_item').each(function(itemIteration, item) {
					ko.applyBindings(new Gun.ViewModel(), jQuery('.inventory_item:eq('+itemIteration+')'));
			});*/
			// Setup test view model
			ko.applyBindings(new Gun.TestViewModel("Player", "Name")); // This makes Knockout get to work
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
			jQuery.get('windows/inventory/inventory.xml', function(xml){
				var json = jQuery.xml2json(xml);
				
				jQuery.each(json.inventory.item, function(itemIteration, item) {
  					// Get amount of bullets and use to populate DOM relevant to item
  					var bulletList = '';
  					for(i=0; i <= item.subitem.amount; i++){
  						bulletList += '<li><img src="images/items/Guns/Bullet.png" /></li>';
  					}
  					jQuery('.inventory_item:eq('+itemIteration+') .actual_bullet_list').append(bulletList);
  					// Log the items we aqquired
  					console.log("Loaded "+item.subitem.amount+" bullets for "+item.name+" (item "+itemIteration+")");
				});
			});
		}
	}
});