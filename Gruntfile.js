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
          '$',
          '_gaq', 'ga',
          'console',
          'module'
        ]
      }
    },
    uglify: {

    },
    slim: {
      production: {
        files: { 'index.html': 'views/layout.slim' }
      }
    },
    less: {
      production: {
        files: {
          'css/main.css': 'css/main.less'
        },
        options: {
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
      },
      slim: {
        files:  ['**/*.slim'],
        tasks: ['slim']
      }
    }
  });

  // Load tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-slim');


  // Task definition.
  grunt.registerTask('default', ['jshint', 'less', 'slim']);
  grunt.registerTask('heroku', ['less', 'slim']);

};
