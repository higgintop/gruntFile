'use strict'

// This module we are exporting, load tasks, set up our config file,
// then register tasks

module.exports = function(grunt) {

  // load tasks
  //grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-jade');
  //grunt.loadNpmTasks('grunt-contrib-clean');
  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    autoprefixer: {
      options: {
         browsers: ['> 1% in US']
        },
      build: {
        src: 'public/css/**/*.css'
     }
    },
    clean : ['public'],
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'app/', src: ['**', '!*.jade', '!**/*.scss'], dest: 'public/', filter: 'isFile'}
        ]
      }
    },
    jade: {
      compile: {
      files: [
        {expand: true, cwd: 'app/', src: ['**/*.jade', '!**/_*.jade'], dest: 'public/', ext: '.html'}
      ]
     }
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
         'public/css/main.css': 'app/css/main.scss'
        }
      }
    },
    watch: {
      other: {
        files: ['app/**', '!app/**/*.jade', '!app/**/*.scss'],
        tasks: ['copy']
      },
      jade: {
        files: ['app/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['app/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  grunt.registerTask('default', []);
  grunt.registerTask('build', ['clean', 'copy', 'jade', 'sass', 'autoprefixer']);
  grunt.registerTask('serve', ['build', 'watch']);

};