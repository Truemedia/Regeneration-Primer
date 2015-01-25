import CharacterCustomization from './packages/charactercustomization/main';
import $ from 'jquery';

$(document).ready( function() {
	new CharacterCustomization($('[data-package="charactercustomization"]').get(0));
});