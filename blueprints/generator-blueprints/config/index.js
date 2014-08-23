'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ConfigGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the config subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
  	var name = this.name;
  	var config_name = this.name.toLowerCase();
  	var config_dir = 'config/';

    this.copy('config.json', config_dir + config_name + '.json');
  }
});

module.exports = ConfigGenerator;