import Handlebars from 'handlebars';
import Resource from './resource';

	export default class Parser
	{
		constructor(source_jsonpath, cb)
		{
			this.options = {source_jsonpath, cb}
			var self = this;
			this.source = new Resource(this.options.source_jsonpath, function(file_contents)
			{
				// Compile external template to function
				let tpl = new Compiler(file_contents).to_function();
				self.options.cb(tpl);
			}).file;
		}
	};

	export class Compiler
	{
		constructor(source, template_engine = 'handlebars')
		{
			this.options = {source, template_engine};
		}

		/* Compile template to javascript templating function */
		to_function()
		{
			switch (this.options.template_engine)
			{
				case 'handlebars':
					var tpl = Handlebars.compile(this.options.source);
				break;
			}
			// $.get(this.source, function(template)
				// {
				// 	var tpl = Handlebars.compile(template);
				// 	// this.collection = new PackageCollection({model: Backbone.Model });
				// 	var data = {
				// 		test: "yo bitch"
				// 	};
						
				// 	self.$el.html( tpl(data) );
				// });

			return tpl;
		}
	};