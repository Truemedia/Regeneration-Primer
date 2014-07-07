// Gulp core and plugins loader
var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

// Gulp plugins (incompatable with plugin loader)
var jsonlint = require('gulp-json-lint'),
	spritesmith = require('gulp.spritesmith');

/* Default task */
gulp.task('default', function()
{
	console.log("Regeneration process initialized");

	// Watch files to trigger tasks
	$.watch([
		'./maps/scraproom/tiles/*.png',
		'./stylesheets/default-theme/source.less'
		], ['sprite', 'css']);
});

/* Verify and publish any changes to the codebase */
gulp.task('publish', ['jsonlint', 'lint', 'unit'], function()
{
	// Commit work
	return gulp.src('./*')
  		.pipe($.git.commit('Commit using gulp-git'));
});

/* Handle assets */
gulp.task('assets', ['scripts', 'css', 'sprite'], function()
{
	console.log("Assets merged into project");
});

/* Compile and compress frontend scripts */
gulp.task('scripts', function()
{
    // Single entry point to browserify
    gulp.src('build.js')
        .pipe($.browserify({
          insertGlobals : true
        }))
        .pipe($.concat('bundle.js'))
        .pipe(gulp.dest('.'));
});

/* Generate CSS files from grouped LESS files */
gulp.task('css', function()
{
	console.log("Rendering optimized internal visual mechanics");
	gulp.src('./stylesheets/default-theme/source.less')
	.pipe( $.less({
		paths: ['./maps/scraproom']
	}))
	.pipe( gulp.dest('./stylesheets/default-theme/') );
});

/* JSHint */
gulp.task('lint', function() {
	gulp.src([
		'./controllers/*.js', './regeneration/*.js', './gameobjects/*.js', './packages/**/*.js', './*.js', '!./bundle.js'
  	])
    .pipe( $.jshint() )
    .pipe( $.jshint.reporter('default') );
    $.util.beep();
});

/* Validate all JSON files inside the project folder */
gulp.task('jsonlint', function()
{
	console.log("Verifying data format consistency");
	gulp.src([
		'./blueprints/**/*.json','./config/**/*.json', './maps/**/*.json', './packages/**/*.json'
	])
	.pipe( jsonlint() )
	.pipe( jsonlint.report('verbose') );
	$.util.beep();
});

gulp.task('unit', function () {
	console.log("Unit testing application using TDD");
    gulp.src([
    	'regeneration/tests/*.js', 'packages/**/tests/*.js'
    ])
    .pipe( $.mocha({
    	ui: 'tdd',
    	reporter: 'nyan'
	}));
    $.util.beep();
});

/* Compile map images into sprite and less file */
gulp.task('sprite', function(map)
{
	console.log("Fusing visual assets into single entity");
	var spriteData = gulp.src('maps/scraproom/tiles/*.png').pipe( spritesmith({
		imgName: 'tileset.png',
		cssName: 'stylesheet.less'
	}));
	spriteData.img.pipe( gulp.dest('maps/scraproom/') );
	spriteData.css.pipe( gulp.dest('maps/scraproom/') );
});