/* 
* @file Package CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for package management and package instances
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./bootbox", "./Bootstrap", "jQ.Datatables"], function(bootbox, jQuery) {
	return Package = {
			
		packages: [],
		
		/* Register a package with the package manager */
		register: function(package_name) {

			// Get package data
			jQuery.getJSON("packages/" + package_name + "/package.json", function(data) {
				
				// Add package icon as package info
				data.icon = '<img src="packages/' + package_name + '/icon.png" alt="' + data.name + ' package" />';
				
				// Append to package manager
				Package.packages.push(data);

				// Debug to console
				console.log(data.name + " PACKAGE loaded");
			});
		},
	
		/* Procedurally generated list of packages */
		list: function() {

			bootbox.dialog({
				message: "<table></table>",
				title: "Packages"
			});
			jQuery('.bootbox-body > table').dataTable({
					"bPaginate": true,
					"bLengthChange": false,
					"iDisplayLength": 2, 
					"sDom": "<'row-fluid'<'span6'T><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
					"bFilter": false,
					"bSort": false,
					"bInfo": true,
					"bAutoWidth": false,
			        "aaData": Package.packages,
			        "aoColumns": [
			                    { 
			                    	"sTitle": "Icon",
			                    	"mData": "icon"
			                    },
			                    {
			                    	"sTitle": "Package name",
			                    	"mData": "name"
			                    },
			                    {
			                    	"sTitle": "Author",
			                    	"mData": "author"
			                    },
			                    {
			                    	"sTitle": "Description",
			                    	"mData": "description"
			                    },
			                    {
			                    	"sTitle": "License",
			                    	"mData": "license"
			                    }
			        ]
			});
		}
	}
});