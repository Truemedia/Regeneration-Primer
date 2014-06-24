// Gulp core files
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat');

// Gulp plugins
var jshint = require('gulp-jshint'),
	jsonlint = require('gulp-json-lint'),
	less = require('gulp-less'),
	path = require('path'),
	spritesmith = require('gulp.spritesmith'),
	browserify = require('gulp-browserify');

/* Default task */
gulp.task('default', function()
{
	gutil.log(gutil.colors.orange("Regeneration process initialized"));

	// Watch files to trigger tasks
	gulp.watch([
		'./maps/scraproom/tiles/*.png',
		'./stylesheets/default-theme/source.less'
		], ['sprite', 'css']);
});

/* Compile and compress frontend scripts */
gulp.task('scripts', function()
{
    // Single entry point to browserify
    gulp.src('browserify.js')
        .pipe(browserify({
          insertGlobals : true
        }))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('.'));
});

/* Generate CSS files from grouped LESS files */
gulp.task('css', function()
{
	gutil.log(gutil.colors.orange("Rendering optimized internal visual mechanics"));
	gulp.src('./stylesheets/default-theme/source.less')
	.pipe( less({
		paths: ['./maps/scraproom']
	}))
	.pipe( gulp.dest('./stylesheets/default-theme/') );
});

/* JSHint */
gulp.task('lint', function() {
	return gulp.src([
		'./controllers/*.js', './regeneration/*.js', './gameobjects/*.js', './packages/**/*.js', './*.js', '!./bundle.js'
  	])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

/* Validate all JSON files inside the project folder */
gulp.task('jsonlint', function()
{
	gutil.log(gutil.colors.orange("Veryfying data format consistency"));
	gulp.src([
		'./blueprints/**/*.json','./config/**/*.json', './maps/**/*.json', './packages/**/*.json'
	])
	.pipe( jsonlint() )
	.pipe( jsonlint.report('verbose') );
	gutil.beep();
});

/* Compile map images into sprite and less file */
gulp.task('sprite', function(map)
{
	gutil.log(gutil.colors.orange("Fusing visual assets into single entity"));
	var spriteData = gulp.src('maps/scraproom/tiles/*.png').pipe( spritesmith({
		imgName: 'tileset.png',
		cssName: 'stylesheet.less'
	}));
	spriteData.img.pipe( gulp.dest('maps/scraproom/') );
	spriteData.css.pipe( gulp.dest('maps/scraproom/') );
});