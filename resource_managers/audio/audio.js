define(["./jQuery", "./Crafty"], function(jQuery, Crafty) {
	return {
		// Audio with only one format (using default audio file)
		initGameAudio: function(){
			this.register_SFX();
			jQuery.getJSON("resource_managers/audio/default_settings.json", function(audio_manager_defaults) {
				// Load sound as resource
				Crafty.audio.add(audio_manager_defaults['background_music'], audio_dir+audio_manager_defaults['background_music']+"/"+audio_manager_defaults['background_music']+".wav");
		
				// Play sound through mixer API (only play when toggled, annoying for development)
				//Crafty.audio.play(audio_manager_defaults['background_music'],audio_manager_defaults['loop_count'],audio_manager_defaults['volume_percent']);
			});
		},
		toggleAudio: function(mute_option){ 
			jQuery.getJSON("resource_managers/audio/default_settings.json", function(audio_manager_defaults) {
				// Mute or unmute all audio
				if(mute_option == 1){
					/* Mute audio */
					// Play sound through mixer API
					Crafty.audio.play(audio_manager_defaults['background_music'],audio_manager_defaults['loop_count'],"0.0");
					jQuery("#audio_toggle").val(0);
				}
				else{
					/* Unmute audio */
					// Play sound through mixer API
					Crafty.audio.play(audio_manager_defaults['background_music'],audio_manager_defaults['loop_count'],audio_manager_defaults['volume_percent']);
					jQuery("#audio_toggle").val(1);
				}
			});
		},
		// Make sound effects audio files accessable
		register_SFX: function(){
			Crafty.audio.add("shoot", audio_dir+"ar-15/shot1.wav");
			Crafty.audio.add("discard_mag", audio_dir+"ar-15/discarding_mag.wav");
			Crafty.audio.add("insert_mag", audio_dir+"ar-15/loading_mag.wav");
			Crafty.audio.add("lock_inserted_mag", audio_dir+"ar-15/locking_mag.wav");
			Crafty.audio.add("load_chamber", audio_dir+"ar-15/load_chamber.wav");
		}
	}
});