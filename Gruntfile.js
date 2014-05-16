    module.exports = function(grunt) {
    grunt.initConfig({
    less: {
    development: {
    options: {
    compress: true,
    yuicompress: true,
    optimization: 2
    },
    files: {
    // target.css file: source.less file
    "stylesheets/default-theme/result.css": "stylesheets/default-theme/source.less"
    }
    }
    },
    watch: {
    styles: {
    // Which files to watch (all .less files recursively in the less directory)
    files: ['stylesheets/default-theme/**/*.less'],
    tasks: ['less'],
    options: {
    nospawn: true
    }
    }
    }
    });
     
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
     
    grunt.registerTask('default', ['watch']);
    };