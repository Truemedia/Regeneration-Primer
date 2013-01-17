// Audio with only one format (using default audio file)
function initGameAudio(){
	jQuery.getJSON("resource_managers/audio/default_settings.json", function(audio_manager_defaults) {
		// Load sound as resource
		Crafty.audio.add(audio_manager_defaults['background_music'], "multimedia/audio/"+audio_manager_defaults['background_music']+"/"+audio_manager_defaults['background_music']+".wav");
		
		// Play sound through mixer API
		Crafty.audio.play(audio_manager_defaults['background_music'],audio_manager_defaults['loop_count'],audio_manager_defaults['volume_percent']);
	});
}
function toggleAudio(mute_option){ 
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
}