module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        separator: '\n/*next file*/\n\n'
      },
      dist: {
        src: ['scripts/hello.js', 'scripts/main.js'],
        dest: 'scripts/built.js'
      }
    },

    uglify: {
      build: {
        files: {
          'scripts/built.min.js': ['scripts/built.js']
        }
      }
    }
   });

  // Default task
  grunt.registerTask('default', ['watch']);
 // grunt.registerTask('css', ['sass', 'cssmin']);
  grunt.registerTask('js', ['concat', 'uglify']);

  // Load up tasks
 // grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');

};