/* 
* @file Spawner Class
* @author Wade Penistone (Truemedia)
* @overview Class used for spawning game objects
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
// Logic for the most important game events
define([], function() {
	return Spawner = {

		/* Entities waiting to be spawned */
		purgatory: {
			'characters': undefined
		},

		/* Populate unique game object data */
		populate_entity_entries: function() {

			this.purgatory.characters = Config.get('characterselection::characters_advanced.characters');
		},

		/* Get data for next spawnable entity */
		load_entity_entry: function() {

			// Load player data if not set
			if (this.purgatory.characters == undefined) {

				this.populate_entity_entries();
			}

			// Remove a characters data from list and return
			var character = this.purgatory.characters.pop();
			var character_name = character.identifierReference; 
			return character_name;
		}
	}
});