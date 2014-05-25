// Gulp core files
var gulp = require('gulp'),
    watch = require('gulp-watch');

// Gulp plugins
var jsonlint = require('gulp-json-lint'),
	less = require('gulp-less'),
	path = require('path'),
	spritesmith = require('gulp.spritesmith');

/* Default task */
gulp.task('default', function()
{
	console.log("Regeneration process initialized");

	// Watch files to trigger tasks
	gulp.watch([
		'./maps/scraproom/tiles/*.png',
		'./stylesheets/default-theme/source.less'
		], ['sprite', 'css']);
});

/* Generate CSS files from grouped LESS files */
gulp.task('css', function()
{
	console.log("Rendering optimized internal visual mechanics");
	gulp
		.src('./stylesheets/default-theme/source.less')
		.pipe( less({
			paths: ['./maps/scraproom']
		}))
		.pipe(gulp.dest('./stylesheets/default-theme/'));
});

gulp.task('jsonlint', function()
{
	gulp.src('./packages/highscores/data.json')
		.pipe(jsonlint())
		.pipe(jsonlint.report('verbose'));
});

/* Compile map images into sprite and less file */
gulp.task('sprite', function(map)
{
	console.log("Fusing visual assets into single entity");
	var spriteData = gulp.src('maps/scraproom/tiles/*.png').pipe( spritesmith({
		imgName: 'tileset.png',
		cssName: 'stylesheet.less'
	}));
	spriteData.img.pipe(gulp.dest('maps/scraproom/'));
	spriteData.css.pipe(gulp.dest('maps/scraproom/'));
});