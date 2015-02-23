'use strict'

// This module we are exporting, load tasks, set up our config file,
// then register tasks

module.exports = function(grunt) {

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/', src: ['**'], dest: 'public/', filter: 'isFile'}
        ]
      }
    }
  });

  grunt.registerTask('default', []);
};