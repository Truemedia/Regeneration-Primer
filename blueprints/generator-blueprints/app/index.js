'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var BlueprintsGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the generator, what blueprints do you wanna use?'));

    var prompts = [
      {
        type: 'confirm',
        name: 'someOption',
        message: 'Would you like to enable this option?',
        default: true
      },
      {
        type: 'list',
        name: 'assetType',
        message: 'Which blueprint would you like to use?',
        choices: [
          "Class",
          "Configuration file",
          "Module",
          "Package",
          "Theme"
        ]
      },
      {
        type: "input",
        name: "projectName",
        message: "What should be the name of this package?"
      },
      {
        type: "checkbox",
        message: "What would you like your package to be set up with?",
        name: "internalItems",
        choices: [
          {
            name: "Configuration files"
          },
          {
            name: "Natural language strings"
          },
          {
            name: "Modules",
            disabled: "This functionality is currently not available"
          },
          {
            name: "Stylesheet"
          },
          {
            name: "Templates",
            checked: true
          },
          {
            name: "Unit tests"
          },
          {
            name: "View Model"
          }
        ]
      }
    ];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = BlueprintsGenerator;
