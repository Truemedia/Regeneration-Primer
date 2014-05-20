var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');

/* Compile map images into sprite and less file */
gulp.task('sprite', function() {
  console.log("Fusing visual assets into single entity");
  var spriteData = gulp.src('maps/scraproom/tiles/*.png').pipe(spritesmith({
    imgName: 'tileset.png',
    cssName: 'stylesheet.less'
  }));
  spriteData.img.pipe(gulp.dest('maps/scraproom/'));
  spriteData.css.pipe(gulp.dest('maps/scraproom/'));
});

gulp.task('default', ['sprite'], function() {
  // place code for your default task here
  console.log("Regeneration process initialized");
  console.log("Rendering optimized internal programming");
});