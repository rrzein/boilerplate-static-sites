module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      options: {
        pretty: true
      },
      files: {
        expand: true,
        cwd: 'jade/',
        src: '*.jade',
        ext: '.html'
      }
    },
    sass: {
      dist: {
        options: {
          loadPath: 'stylesheets/scss/',
        },
        files: {
          'stylesheets/main.css': 'stylesheets/scss/main.scss'
        }
      }
    },
    cssmin: {
      files: {
        'stylesheets/ms.min.css': ['stylesheets/main.css']
      },
      minify: {
        expand: true,
        cwd: 'stylesheets/',
        src: 'main.css',
        dest: 'stylesheets/',
        ext: '.min.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'javascripts/jsp.min.js': [
          ]
        }
      }
    },
    watch: {
      jade: {
        files: ['jade/**/*.jade'],
        tasks: ['jade']
      },
      scss: {
        files: ['stylesheets/scss/**/*.scss'],
        tasks: ['sass', 'cssmin']
      },
      uglify: {
        files: ['javascripts/*.js'],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

};
