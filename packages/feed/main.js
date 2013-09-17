/* 
* @file Feed PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used to display data from an external RSS feed source
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!packages/feed/partial", "moment", "./Bootstrap"], function(view, moment, jQuery) {
	return feed = {
		
		/* Based on modified UI design posted on Bootsnipp (http://bootsnipp.com/snipps/blog-posts-with-picture) */	
	 	init: function(){
			
	 		// Display posts
			feed.displayPosts('regeneration-news', '.co.uk');
		},
		
		/* Get RSS feed from specified URL (blogger support only) */
		displayPosts : function(blog_subdomain, tld){

	        var feedURL = "http://"+blog_subdomain+".blogspot"+tld+"/feeds/posts/default";

	        var params = {
	            alt : 'json-in-script'
	        };

	        $.ajax({
	            url: feedURL,
	            type: 'get',
	            dataType: "jsonp",
	            success: function(data) {

	            	// Load data
	            	var blog_feed = data.feed;
	    	        
	    	    	// Load view
	       			document.getElementById('feed_partial').innerHTML = view(feed.formatPosts(blog_feed));
					console.log("Feed PACKAGE loaded");
	            },
	            data: params
	        });
	    },
	    
	    /* Format posts from a feed object */
	    formatPosts: function(feed) {
	    	
	    	entries = [];
	    	
	    	// Rebuild posts in cleaner format
	    	jQuery.each(feed.entry, function(index, data) {
	    		
	    		var published_date = data.published.$t;
	    		
	    		console.log(feed.entry);
	    		
	    		entry = {
	    			title: data.title.$t,
	    			content: data.content.$t,
	    			link: data.link[4].href,
	    			author: data.author[0].name.$t,
	    			published: moment(published_date).format("MMM Do, YYYY")
	    		};
	    		
	    		// Add and increment
	    		entries[index] = entry;
	    	});
	    	
	    	var feed = {
	    		"entries": entries
	    	};
	    	return feed;
	    }
	}
});