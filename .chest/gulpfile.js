// Gulp core and plugins loader
var gulp = require('gulp'),
	$ = require('gulp-load-plugins')();

// Command line help
require('gulp-help')(gulp);

// Gulp plugins (incompatable with plugin loader)
var jsonlint = require('gulp-json-lint'),
	cover = require('gulp-coverage'),
	spritesmith = require('gulp.spritesmith'),
	browserSync = require('browser-sync'),
	uncss = require('gulp-uncss'),
	glob = require('glob');

/* Default task */
gulp.task('default', 'Run automated development environment', ['browser-sync'], function()
{
	console.log("Regeneration process initialized");

	// Watch files to trigger tasks
	$.watch([
		'./maps/scraproom/tiles/*.png',
		'./themes/default/assets/less/source.less'
		], ['sprite', 'css']);
});

/* Verify and publish any changes to the codebase */
gulp.task('publish', 'Publish changes to a git repository', ['tests'], function()
{
	// Commit work
	return gulp.src('./*')
  		.pipe($.git.commit('Commit using gulp-git'));
});

/* Conduct tests on source code for stability */
gulp.task('tests', 'Run code testing procedures', ['jsonlint', 'lint', 'unit'], function()
{
	console.log("Conducting tests");
});

/* Browser sync */
gulp.task('browser-sync', 'Synchronize changes between repo and browsers automatically', function() {
    browserSync.init(['*.css'], {
        server: {
            baseDir: "./"
        }
    });
});

/* Handle assets */
gulp.task('assets', 'Compile all client side assets', ['scripts', 'css', 'sprite'], function()
{
	console.log("Assets merged into project");
});

/* Compile and compress frontend scripts */
gulp.task('scripts', 'Compile all frontend scripts into a single file', function()
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
gulp.task('css', 'Compile LESS files into CSS', function()
{
	console.log("Rendering optimized internal visual mechanics");
	return gulp.src('./themes/default/assets/less/*.less')
	.pipe( $.concat('style.less') )
	.pipe( $.less() )
	.pipe( gulp.dest('./themes/default/assets/css') )
	.pipe( $.filter('**/*.css') ) // Filtering stream to only css files
    .pipe(browserSync.reload({stream:true}));
});

/* JSHint */
gulp.task('lint', 'Check coding style for irregularities and broken syntax', function() {
	$.util.beep();
	return gulp.src([
		'./controllers/*.js', './regeneration/*.js', './gameobjects/*.js', './packages/**/*.js', './*.js', '!./bundle.js'
  	])
    .pipe( $.jshint() )
    .pipe( $.jshint.reporter('default') );
});

/* Validate all JSON files inside the project folder */
gulp.task('jsonlint', 'Validate all JSON source files', function()
{
	$.util.beep();
	console.log("Verifying data format consistency");
	return gulp.src([
		'./blueprints/**/*.json','./config/**/*.json', './maps/**/*.json', './packages/**/*.json'
	])
	.pipe( jsonlint() )
	.pipe( jsonlint.report('verbose') );
});

gulp.task('unit', 'Run TDD/BDD unit tests', function()
{
	$.util.beep();
	console.log("Unit testing application using BDD and TDD");
    return gulp.src([
    	'regeneration/tests/*.js', 'packages/**/tests/*.js'
    ], {
    	read: false
    })
    .pipe( cover.instrument({
    	pattern: ['**/main*'],
    	debugDirectory: 'debug'
    }))
    .pipe( $.mocha({
    	ui: 'tdd',
    	reporter: 'nyan'
	}))
	.pipe( cover.report({
		outFile: 'coverage.html'
	}));
});

/* Compile map images into sprite and less file */
gulp.task('sprite', 'Create sprite from directory of images', function(map)
{
	console.log("Fusing visual assets into single entity");
	var spriteData = gulp.src('maps/scraproom/tiles/*.png').pipe( spritesmith({
		imgName: 'tileset.png',
		cssName: 'stylesheet.less'
	}));
	spriteData.img.pipe( gulp.dest('maps/scraproom/') );
	spriteData.css.pipe( gulp.dest('maps/scraproom/') );
});

gulp.task('uncss', 'Clear out unused CSS selectors and rules from a stylesheet', function()
{
    return gulp.src('uncss_test/style.css')
        .pipe(uncss({
            html: glob.sync('./packages/**/templates/*.mustache'),
            ignore: ['#always_available_id']
        }))
        .pipe(gulp.dest('./out'));
});