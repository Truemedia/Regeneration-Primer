import CharacterCustomization from './packages/charactercustomization/main';
import $ from 'jquery';

$(document).ready( function() {
	new CharacterCustomization($('#test').get(0));
});