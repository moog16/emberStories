module.exports = function(grunt) {

  grunt.initConfig({
    watch : {
      scripts : {
        files : [
                  'scripts/app.js',
                  'scripts/**/*.js',
                  'css/*.css',
                  'index.html'
                ],
        options : {
          livereload : 9090,
        }
      },
      emberTemplates: {
        files: 'templates/**/*.hbs',
        tasks: ['emberTemplates']
      }
    },
    emberTemplates : {
      compile: {
        options: {
          templateName: function(sourceFile) {
            return sourceFile.replace(/templates\//, '');
          }
        },
        files: {
          'scripts/handlebarTemplates.js': ['templates/**/*.hbs']
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-uglify');
 
  grunt.registerTask('default', ['watch']);  
};