var unique = require('uniq');
var Colour = require('./regeneration/colour');

console.log(Colour.HSVtoRGB(1, 1, 1));

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));