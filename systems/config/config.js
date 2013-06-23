/* 
* @file Configurarion SYSTEM 
* @author Wade Penistone (Truemedia)
* @overview Core Regeneration Primer system used for setting and getting bare bones game configuration variables
* @copyright Wade Penistone 2013
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
// Directories
// TODO: Extract in-use content pack from config
var contentpack = "default";

var audio_dir = "multimedia/"+contentpack+"-contentpack/audio/";
var characters_image_directory = "multimedia/"+contentpack+"-contentpack/images/characters/";

// Defaults
var default_character = "coward";

var default_sprite_filename_prefix = "(";
var default_sprite_filename_suffix = ")_DefaultPose.png";

// Settings
/* 720P */
var resolution_width = 1280; // In Pixels
var resolution_height = 720; // In Pixels