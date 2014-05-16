module.exports = function (grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'Gruntfile.js',
        'public/scripts/**/*.js',
        '!public/scripts/lib/**/*.js',
        '!public/scripts/*.min.js'
      ],
      options: {
        browser: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        forin: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        quotmark: 'single',
        undef: true,
        unused: true,
        trailing: true,
        strict: true,
        predef: [
          'requirejs', 'require', 'define',
          'module',
          '_gaq', 'ga',
          'console',
          'angular'
        ]
      }
    },
    uglify: {

    },
    less: {
      production: {
        files: {
          'public/css/main.css': 'public/css/main.less'
        },
        options:{
          compress: true
        }
      }
    },
    csslint: {
      src: [

      ]
    },
    watch: {
      less: {
        files: ['**/*.less'],
        tasks: ['less']
      }
    }
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Task definition.
  grunt.registerTask('default', ['jshint', 'less']);
  grunt.registerTask('heroku', ['less']);

};
