var unique = require('uniq');
var regen_class = require('./me');

regen_class.process();

var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

console.log(unique(data));