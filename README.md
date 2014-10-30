# Regeneration Primer
## A moddable game software for client and/or server based HTML5 games

### Install instructions

#### If your want a quick try of the software without installing anything head to: http://truemedia.github.com/Regeneration-Primer
NOTE: This is a clone of our latest master branch code whenever we update it.
It may be broken, be patient while we are in the main development phase of pre 0.1

#### If your using this for making embedded/app based games:
* Git clone it somewhere `git clone https://github.com/Truemedia/Regeneration-Primer.git`
* Set browser to `file://LocationOfThisSoftwareFolder/index.html`

#### If your using this for making server based games/game servers:
Take a look at the [Regeneration Platform](https://github.com/Truemedia/Regeneration-Platform) repo which contains the frontend code of this repository on a Laravel based backend


### Development tools
I use my own tool chest (literally) to accompany my coding, see my [Treasure Chest](https://github.com/Truemedia/Treasure-Chest) repo for for setting up the development tools you may or may not need (already comes included in this repo). Based on [bower](http://bower.io/), [browsersync](http://www.browsersync.io/), [chest](http://chestjs.com/), [gulp](http://gulpjs.com/), and [yeoman](http://yeoman.io/).

## Overview

This software serves as a boilerplate  for the purpose of providing a general software that can be modified to create any game imaginable within the scope of HTML5, CSS3, and JavaScript technologies.

Using the latest technologies and design patterns, this frontend repo currently incorporates this massive stack to build your application upon:

#### Libraries
- For DOM manipulation - **jQuery**
- For general styling and CSS simplification - **Bootstrap**
- For modularity and integrating libraries - **RequireJS** + **Conditioner** + **JSONpatch**
- For templating and abstracting data from the DOM - **KnockOut** + **Backbone** + **Marionette** + **Mustache** + **Handlebars**
- For geolocation integration - **Leaflet**
- For 3D graphics functionality - **ThreeJS**
- For handling sound assets and manipulation - **Buzz**
- For storing data - **Cookie**
- For dealing with browser compatability - **Modernizr**
- Specialist data formatting - **AccountingJS** + **Moment**

##### Fancy UI
- Notification - **Toastr**
- Modal - **Bootbox**
- Tables - **Datatables**
- Many things - **Fuelux** + **jQuery UI**

#### Tools
- For documenting - **JSdoc** + **Covers**
- For testing and debugging - **Mocha** + **Chai**
- For sanity checks - **JShint** + **JSONlint**
- For image compression - **SpriteSmith**
- For CSS optimization - **LESS** + **LessElements** + **UnCSS** + **Autoprefixer** + **Minifier**
- For JS optimization - **Browserify** + **Uglify**
- For browser integration - **BrowserSync**

- Task runner - **Gulp**
- Commandline generator - **Yeoman**

These libraries combined employ a powerful design pattern to build the frontend in the following fashion:
UMD modules + DCSS (Dynamic CSS) + MVVM (Model View ViewModel) + RESTful data

With the build tools available, an application can ultimately boil down to a single HTML, javascript and CSS file (along with folders containing any other media you have)

- index.html (Single page application)
- script.min.js (Code containing the game itself)
- styles.min.css (Stylesheet to style everything)

This makes the game very speedy and very easy to transfer, but is only optional if your still in development stages and need the code portable (none-compiled in a none development environment).

Games based on this software:
- DIY DIE (contained as the main game itself by default as example), 8 player co-op zombie shootem-up
- 1 VS 1000, 1000 player MMOAG (Massively Multiplayer Online Action Game)

This software is built by default to be the DIY DIE game.

DIY DIE is a Thriller RPG about an alien life-form infestation that threatens human extinction. Through the aliens becoming an immediate predatory threat humans must fight off the rapidly evolving life forms using only the tools they have available.

Set in a DIY specialist store called HomeModz, you only can only fight the threat with whatever items you can find in the store. Running away is not an option, or so it seems. 

Utilizing a 3D environment based in ThreeJS and a very complex combination of real life emulated game mechanics such as:
- Item uses and general item carrying
- Combinations of item crafting
- interactions with other humans

MIT licensed, open source code base. Wanna help? send me a message or submit a pull request, all contributions are welcome.