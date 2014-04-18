/* 
* @file Audio CLASS
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer class used for sequencing and triggering audio
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['Buzz', 'jQuery'], function(buzz, jQuery) {
	return Audio = {

		// Package options
		settings: null,

		directory: "",	
		format: "",	
		mixer: {
			tracks: {}
		},
		sampler: {
			samples: {},
			/* Play a sample */
			play: function(sample) {
				jQuery.each(Audio.sampler.samples, function(index, sound) {
					if (index === sample) {
						sound.play();
					}
				});
			}
		},
			
		/**
		 * Initial load-up procedure if first time package is loaded
		 * @param {object} options - JSON string of options passed from load function.
		 */
		init: function(options)
		{

			// Save options
			this.settings = (Object.keys(options).length === 0) ? Config.get('audio::defaults') : options;

			// Setup file type and directory TODO: Make filetype choice based on browser
			this.format = "wav";
			this.directory = Config.get('resources.directories.multimedia.audio');

			// Load sound resources for mixer
			this.loadChannels();
			
			// Load sound resources for sampler
			this.loadSamples();
		},
		
		/**
		 * Load audio tracks for mixer
		 */
		loadChannels: function() 
		{	
			// Load background music onto single track
			this.registerBackgroundMusic();
		},
		
		/**
		 * Load audio sample files for sampler
		 */
		loadSamples: function()
		{
			// Load sound effects
			this.registerSFX();
		},
		
		/**
		 * Make background music audio files accessible
		 */
		registerBackgroundMusic: function()
		{
			var audio_dir = this.directory;
			var audio_manager_defaults = Config.instance('audio::default.all');
			
			audio.mixer.tracks.background_music = new buzz.sound(audio_dir+audio_manager_defaults.background_music+"/"+audio_manager_defaults.background_music, {formats: [this.format]});
			
			// Play sound through mixer API (only play when toggled, annoying for development)
			//audio.mixer.background_music.play();
		},
		
		/**
		 * Make sound effects audio files accessible
		 */
		registerSFX: function()
		{	
			var audio_dir = this.directory + "ar-15/";

			this.sampler.samples.shoot = new buzz.sound(audio_dir+"shoot", {formats: [this.format]});
			this.sampler.samples.discard_mag = new buzz.sound(audio_dir+"discarding_mag", {formats: [this.format]});
			this.sampler.samples.insert_mag = new buzz.sound(audio_dir+"loading_mag", {formats: [this.format]});
			this.sampler.samples.lock_inserted_mag = new buzz.sound(audio_dir+"locking_mag", {formats: [this.format]});
			this.sampler.samples.load_chamber = new buzz.sound(audio_dir+"load_chamber", {formats: [this.format]});
			this.sampler.samples.fired_bullet_shelldrop = new buzz.sound(audio_dir+"fired_bullet_shelldrop", {formats: [this.format]});
			this.sampler.samples.out_of_ammo = new buzz.sound(audio_dir+"out_of_ammo", {formats: [this.format]});
		}
    }
});