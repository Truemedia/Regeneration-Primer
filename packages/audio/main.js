/* 
* @file Audio PACKAGE
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer package used for controlling audio sources and playback
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(["./jQuery", "./Crafty", "./Buzz", "Package"], function(jQuery, Crafty, buzz, Package) {
	return audio = {
			
		directory: "",	
		format: "",	
		mixer: {
			tracks: {}
		},
		sampler: {
			samples: {},
			/* Play a sample */
			play: function(sample) {

				jQuery.each(audio.sampler.samples, function(index, sound) {

					if (index === sample) {
						sound.play();
					}
				});
			}
		},
			
		init: function() {
			
			// Register package
			Package.register('audio');

			// Setup file type and directory TODO: Make filetype choice based on browser
			audio.format = "wav";
			audio.directory = Config.get('resources.directories.multimedia.audio');

			// Load sound resources for mixer
			audio.loadChannels();
			
			// Load sound resources for sampler
			audio.loadSamples();
		},
		
		/* Autoloading hook */
        load: function(element, options) {
        	
        	audio.init();
        },

        /* Autoloader terminate method */
        unload: function() {

        },
		
		/* Load audio tracks for mixer */
		loadChannels: function() {
			
			// Load background music onto single track
			audio.registerBackgroundMusic();
		},
		
		/* Load audio sample files for sampler */
		loadSamples: function() {
		
			// Load sound effects
			audio.registerSFX();
		},

		/* Mute or unmute all audio */
		toggleAudio: function(event) {

			var audio_manager_defaults = Config.instance('audio::default.all');

			// Mute audio
			if (jQuery("#audio_toggle > span").hasClass("ui-icon-volume-on")) {

				console.log("Muting all audio");
				
				// Stop sound through mixer API
				audio.mixer.tracks.background_music.stop();
				
				jQuery("#audio_toggle > span").removeClass("ui-icon-volume-on")
					.addClass("ui-icon-volume-off");
			}
			// Unmute audio
			else {
				
				console.log("Unmuting all audio");
				
				// Play sound through mixer API
				audio.mixer.tracks.background_music.play()
				 							.fadeIn()
				 							.loop();

				jQuery("#audio_toggle > span").removeClass("ui-icon-volume-off")
					.addClass("ui-icon-volume-on");
			}
		},
		
		/* Make background music audio files accessible */
		registerBackgroundMusic: function() {
			
			var audio_dir = audio.directory;
			var audio_manager_defaults = Config.instance('audio::default.all');
			
			audio.mixer.tracks.background_music = new buzz.sound(audio_dir+audio_manager_defaults.background_music+"/"+audio_manager_defaults.background_music, {formats: [audio.format]});
			
			// Play sound through mixer API (only play when toggled, annoying for development)
			//audio.mixer.background_music.play();
		},
		
		/* Make sound effects audio files accessible */
		registerSFX: function() {
			
			var audio_dir = audio.directory + "ar-15/";

			audio.sampler.samples.shoot = new buzz.sound(audio_dir+"shoot", {formats: [audio.format]});
			audio.sampler.samples.discard_mag = new buzz.sound(audio_dir+"discarding_mag", {formats: [audio.format]});
			audio.sampler.samples.insert_mag = new buzz.sound(audio_dir+"loading_mag", {formats: [audio.format]});
			audio.sampler.samples.lock_inserted_mag = new buzz.sound(audio_dir+"locking_mag", {formats: [audio.format]});
			audio.sampler.samples.load_chamber = new buzz.sound(audio_dir+"load_chamber", {formats: [audio.format]});
			audio.sampler.samples.fired_bullet_shelldrop = new buzz.sound(audio_dir+"fired_bullet_shelldrop", {formats: [audio.format]});
			audio.sampler.samples.out_of_ammo = new buzz.sound(audio_dir+"out_of_ammo", {formats: [audio.format]});
		}
	}
});