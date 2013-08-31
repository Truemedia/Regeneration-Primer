/* 
* @file Audio PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for controlling audio sources and playback
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		initGameAudio: function(){
			// Audio with only one format (using default audio file) TODO: Make filetype choice based on browser
			var f = ".wav";
			
			this.register_SFX(f);
			jQuery.getJSON("packages/default_settings.json", function(audio_manager_defaults) {
				// Load sound as resource
				Crafty.audio.add(audio_manager_defaults['background_music'], audio_dir+audio_manager_defaults['background_music']+"/"+audio_manager_defaults['background_music']+f);
		
				// Play sound through mixer API (only play when toggled, annoying for development)
				//Crafty.audio.play(audio_manager_defaults['background_music'],audio_manager_defaults['loop_count'],audio_manager_defaults['volume_percent']);
			});
		},
		toggleAudio: function(event){ 
			jQuery.getJSON("packages/default_settings.json", function(audio_manager_defaults) {
				// Mute or unmute all audio
				if(jQuery("#audio_toggle > span").hasClass("ui-icon-volume-on")){
					/* Mute audio */
					// Play sound through mixer API
					Crafty.audio.play(audio_manager_defaults['background_music'],audio_manager_defaults['loop_count'],"0.0");
					jQuery("#audio_toggle > span").removeClass("ui-icon-volume-on")
						.addClass("ui-icon-volume-off");
				}
				else{
					/* Unmute audio */
					// Play sound through mixer API
					Crafty.audio.play(audio_manager_defaults['background_music'],audio_manager_defaults['loop_count'],audio_manager_defaults['volume_percent']);
					jQuery("#audio_toggle > span").removeClass("ui-icon-volume-off")
						.addClass("ui-icon-volume-on");
				}
			});
		},
		// Make sound effects audio files accessable
		register_SFX: function(f){
			Crafty.audio.add("shoot", audio_dir+"ar-15/shot1"+f);
			Crafty.audio.add("discard_mag", audio_dir+"ar-15/discarding_mag"+f);
			Crafty.audio.add("insert_mag", audio_dir+"ar-15/loading_mag"+f);
			Crafty.audio.add("lock_inserted_mag", audio_dir+"ar-15/locking_mag"+f);
			Crafty.audio.add("load_chamber", audio_dir+"ar-15/load_chamber"+f);
			Crafty.audio.add("fired_bullet_shelldrop", audio_dir+"ar-15/fired_bullet_shelldrop"+f);
			Crafty.audio.add("out_of_ammo", audio_dir+"ar-15/out_of_ammo"+f);
		},
	}
});