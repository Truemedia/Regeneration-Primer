'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
  init: function () {

  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Now preparing to create a module, please answer some questions to continue'));

    var prompts = [
      {
        type: "input",
        name: "short_description",
        message: "What is this module used for?"
      }
    ];

    this.prompt(prompts, function (props) {

      // Grab and store information provided by user
      this.short_description = props.short_description;

      done();
    }.bind(this));
  },

  files: function () {
  	var name = this.name;
  	var module_name = this.name.toLowerCase();
  	var module_dir = 'modules/' + module_name;

  	// ucfirst
  	this.name = name.charAt(0).toUpperCase() + name.slice(1);

  	this.mkdir(module_dir);
    this.copy('_main.js', module_dir + '/main.js');
  }
});

module.exports = ModuleGenerator;