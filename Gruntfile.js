/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    watch: {
      scripts: {
        files: ['less/*.less','less/**/*.less'],
        tasks: ['less']
      }
    },

    less: {
      development: {
        options: {
          'ieCompat': false,
        },
        files: {
          'demo.css': 'LESS/demo.less'
        },
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);



};
