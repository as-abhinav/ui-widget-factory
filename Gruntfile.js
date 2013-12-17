module.exports = function (grunt) {
  // Grunt config goes here.
  grunt.initConfig({

    // See: http://www.jshint.com/docs/
    jshint: {
      all: {
        src: 'src/javascripts/*/**.js',
        options: {
          bitwise: true,
          camelcase: true,
          curly: true,
          eqeqeq: true,
          forin: true,
          immed: true,
          indent: 4,
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
          'public/javascripts/all.min.js': 'src/javascripts/*/**.js'
        }
      }
    },

    // jade: {
    //   options: {
    //     pretty: true
    //   },
    //   all:{
    //     files: [ {
    //       cwd: "src/views",
    //       src: "**/*.jade",
    //       dest: "public/html",
    //       expand: true,
    //       ext: ".html"
    //     } ]
    //   }
    // },

    sass: {
      options: {
        style: 'compressed',
        precision: 5
      },
      all: {
        files: {
          'public/stylesheets/style.css': 'src/sass/style.scss'
        }
      }
    },
    
    jade: {
      compile: {
        options: {
          pretty: true
        },
        dir: {
          'dist': ['src/views']
        }
      }
    },

    watch: {
      javascript: {
        files: 'javascripts/*/**.js',
        tasks: ['jshint', 'uglify']
      },
      sass: {
        files: 'sass/*/**.scss',
        tasks: 'sass'
      }
    }

  }); 

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
};