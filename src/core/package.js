import $ from 'jquery';
import Backbone from 'backbone';
import ko from 'knockout';
import {Config} from './config';

	class PackageView extends Backbone.View
	{
		render ()
		{
			alert('OMG templatez');
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

        	this.element = element;
        	this.settings = (Object.keys(options).length === 0) ? Config.get(`${this.name}::defaults`) : options; // Package options
        	this.trans = Lang.getTrans(nls); // Load translations

        	this.load();
        }

		set element(element)
		{
			this.name = $(element).attr('data-package');
			return element;
		}

		/**
		 * Autoloading hook
		 * @param {object} element - HTML element the package is tied to in the DOM.
		 * @param {object} options - JSON string of options passed from the data-options attribute.
		 */
        load()
        {
        	// View pre-rendering
			// if ($(this.element).html().length === 0)
			// {
				// let view = new PackageView();
			// }
			// View post-rendering
			// else
			// {
			// 	this.view.post_render(this.element);
			// }
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
	        
	// class PackageView extends Backbone.View
	// {
	// 	initialize()
	// 	{    	
	// 	    this.collection = new PackageCollection({model: Backbone.Model });
	// 	    this.render();
	// 	}
	// 	render()
	// 	{
	// 		// Load package stored data
	// 		var self = this;
	// 		this.collection.fetch().done( function()
	// 		{		
	// 	         	// Compose data for view
	// 	         	var data = {
	// 	          		items: self.collection.toJSON()
	// 	          	}
		         			    				
	// 	         	// Render content
	// 	         	self.$el.html( tpl(data) )
	// 	          		.promise()
	// 	          		.done( self.post_render(self.$el) );
	// 	    });
	// 	}   	
	// 	post_render(element)
	// 	{
	// 	    ko.applyBindings(new vm(), $(element).get(0));
	// 	}
	// }

	export var Lang = {
		getTrans(nls = {})
		{
			return nls;
		}
	};