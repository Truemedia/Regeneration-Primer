How to setup Regeneration Primer

# Download the git repo and make sure submodules are loaded (git submodule init)

# Make sure KnockoutJS is built (cd into software directory and run 'dependencies/knockout/build/build.sh')

# Set browser to file://LocationOfThisSoftwareFolder/index.html

# Make sure javascript is enabled and enjoy

This is the documentation for Regen Primer, A moddable game software for client and/or server based HTML5 games.

Games based on this software:
- DIY DIE (contained as the main game itself by default as example)

This software serves as a boilerplate  for the purpose of providing a general software that can be modified to create any game imaginable within the scope of HTML5, CSS3, and javascript technologies.

Relies on the following javascript libraries:
- jQuery
- Crafty
- RequireJS
- KnockoutJS
- JXON (implemented using jQuery plugins)
- LessCSS

These 6 libraries combined employ a powerful design pattern  of:
AMD + (Entity and Component system) + (JXON + MVVM) + DCSS

They also can ultimately boil down any project to a single HTML, javascript and CSS file (along with folders containing any other media you have)

- index.html (Single page application)
- game.js (Code containing the game itself)
- style.css (Stylesheet to style everything)

This makes the game very speedy and very easy to transfer, but is only optional if your still in development stages and need the code portable (none-compiled)

This software is built by default to be the DIY DIE game.

DIY DIE is a Thriller RPG about an alien life-form infestation that threatens human extinction. Through the aliens becoming an immediate predatory threat humans must fight off the rapidly evolving life forms using only the tools they have available.

Set in a DIY specialist store called HomeModz, you only can only fight the threat with whatever items you can find in the store. Running away is not an option, or so it seems. 

It employs a 2D Oblique projection perspective and a very complex combination of real life emulated game mechanics such as:
- Item uses and general item carrying
- Combinations of item crafting
- interactions with other humans