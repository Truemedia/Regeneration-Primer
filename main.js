import Contact from './packages/contact/main';
import $ from 'jquery';

$(document).ready( function()
{
	new Contact($('[data-package="contact"]').get(0));
});