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

      // Grab and store information provided by user
      this.someOption = props.someOption;
      this.assetType = props.assetType;
      this.projectName = props.projectName;
      this.internalItems = props.internalItems;

      done();
    }.bind(this));
  },

  app: function () {

    var parent_directory = '';
    var file_list = [];
    var DS = '/';

    switch (this.assetType)
    {
      case "Configuration file":
        parent_directory = 'config' + DS;
        file_list = file_list.concat([
          'file.json'
        ]);
      break;
      case "Module":
        parent_directory = 'modules' + DS;
        file_list = file_list.concat([
          'main.js'
        ]);
      break;
      case "Package":
        parent_directory = 'packages' + DS;
        file_list = file_list.concat([
          'main.js'
        ]);
      break;
      case "Theme":
        parent_directory = 'themes' + DS;
        file_list = file_list.concat([
          'license.txt'
        ]);
      break;
    }
    
    // Create directories
    if (parent_directory !== '')
    {
      this.mkdir(parent_directory);
      this.mkdir(parent_directory + this.projectName);
    }

    // Copy across files
    if (file_list.length > 0)
    {
      for (var i = 0; i < file_list.length; i++)
      {
        var file = file_list[i];
        this.copy(parent_directory + '_' + file, parent_directory + this.projectName + DS + file);
      }
    }
  }
});

module.exports = BlueprintsGenerator;
