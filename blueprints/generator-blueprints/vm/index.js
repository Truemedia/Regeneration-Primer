'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var VmGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('You called the vm subgenerator with the argument ' + this.name + '.');
  },

  files: function () {
    this.copy('_vm.js', 'vm.js');
  }
});

module.exports = VmGenerator;