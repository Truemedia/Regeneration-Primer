/* 
* @file Profile SYSTEM
* @author Wade Penistone (Truemedia)
* @overview FIRST TEST SYSTEM IMPLEMENTING Hogan + JSON + Mustache templating
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["hgn!windows/profile/profile", "jQuery", "KO"], function(window, jQuery, ko) {
	return profile = {
		init: function(){
			/* Lightweight template loader */
			// TODO: Make window system use config to load this in single call
			jQuery.getJSON("windows/profile/profile.json", function(data){
			
				// Mustache
       			document.getElementById('profile_window').innerHTML = window(data);
       			
       			// Knockout
       			profile.registerBindings();
			});
		},
		ViewModel: function() {
			this.loggedin = ko.observable(false);
			this.username = ko.observable("");
			this.loginAsUser = function(){
				// Login
				this.loggedin(true);
				// TODO: Make this the authentication entry point and cut-off
				this.username(profile.loginAsUser(this.username()));
			};
			this.loginAsGuest = function(){
				// Login
				this.loggedin(true);
				// Create a guest username, and use
				this.username(profile.loginAsGuest());
			};
		},
		registerBindings: function(){
			ko.applyBindings(new profile.ViewModel(), document.getElementById('profile_window'));
		},
		loginAsGuest: function(){

			// Return username as Guest with random 8 digit number appended
			var guestname = "Guest";
			var digits = 8;
			for(var i=0; i<=digits; i++){
				guestname += Math.floor((Math.random()*10)+1);
			}
			return(guestname);
		},
		loginAsUser: function(username){

			// Return username from input (this will validate user in future)
			return(username);
		}
	}
});