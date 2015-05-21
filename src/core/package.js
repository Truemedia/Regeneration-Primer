import $ from 'jquery';
import Backbone from 'backbone';
import ko from 'knockout';
import {Config} from './config';
import Parser from './parser';

// Shimming
Backbone.$ = $;

	class PackageView extends Backbone.View
	{
		constructor(args)
		{
			super(args);
			this.package_name = args.package_name;

			// View pre-rendering
			if (this.$el.html().length === 0)
			{
				this.render();
			}
			// View post-rendering
			else
			{
				// self.post_render();
			}
		}
		render()
		{
			var self = this;
			
			new Parser(`${this.package_name}::partial`, function(tpl)
			{
				let html = tpl({ "test": "This works!" });
				self.$el.html(html);
			});
		}
	}

	export class Package
	{				
		/**
		 * Autoloading hook
		 * @param {object} element - HTML element the package is tied to in the DOM.
		 * @param {object} options - JSON string of options passed from the data-options attribute.
		 */
        constructor(element, options = {}, resources = {})
        {
        	let nls = resources.nls;

        	this.name = $(element).attr('data-package');
        	this.settings = (Object.keys(options).length === 0) ? Config.get(`${this.name}::defaults`) : options; // Package options
        	this.trans = Lang.getTrans(nls); // Load translations

        	new PackageView({ el: element, package_name: this.name });
		}
	}

	// class PackageCollection extends Backbone.Collection
	// {
	//     url()
	//     {
	//         return Config.get(`${this.name}::routes.${this.settings.source}`);
	//     }
	//     parse(data)
	//     {
	//     	return data.items;
	//     }
	// }
	        
	// class PackageView extends View
	// {
	// 	// initialize()
	// 	// {    	
	// 	//     this.collection = new PackageCollection({model: Backbone.Model });
	// 	//     this.render();
	// 	// }
	// 	// render()
	// 	// {
	// 	// 	// Load package stored data
	// 	// 	var self = this;
	// 	// 	this.collection.fetch().done( function()
	// 	// 	{		
	// 	//          	// Compose data for view
	// 	//          	var data = {
	// 	//           		items: self.collection.toJSON()
	// 	//           	}
		         			    				
	// 	//          	// Render content
	// 	//          	self.$el.html( tpl(data) )
	// 	//           		.promise()
	// 	//           		.done( self.post_render(self.$el) );
	// 	//     });
	// 	// }   	
	// 	// post_render(element)
	// 	// {
	// 	//     ko.applyBindings(new vm(), $(element).get(0));
	// 	// }
	// }

	export var Lang = {
		getTrans(nls = {})
		{
			return nls;
		}
	};