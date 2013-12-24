module.exports = function (grunt) {
  // Grunt config goes here.
  grunt.initConfig({

    // See: http://www.jshint.com/docs/
    jshint: {
      all: {
        src: 'modules/slideshow/**.js',
        options: {
          bitwise: true,
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
          nonew: true,
          quotmark: 'single',
          regexp: true,
          undef: true,
          unused: true,
          trailing: true,
          maxlen: 120
        }
      }
    },

    uglify: {
      all: {
        files: {
          'public/javascripts/app.js': 'modules/slideshow/**.js'
        }
      }
    },

    
    sass: {
      options: {
        style: 'compressed',
        precision: 5
      },
      all: {
        files: [ {
          cwd: "modules/slideshow",
          src: "*.scss",
          dest: "public/stylesheets",
          expand: true,
          ext: ".css"
        } ]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      javascript: {
        files: 'modules/slideshow/**/*.js',
        tasks: ['uglify']
      },
      sass: {
        files: 'modules/slideshow/**/*.scss',
        tasks: ['sass']
      }
    }

  }); 

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass', 'uglify']);

  grunt.registerTask('watcher', ['sass', 'uglify', 'watch']);
};
