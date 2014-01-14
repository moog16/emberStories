module.exports = function(grunt) {

  grunt.initConfig({

    watch : {
      scripts : {
        files : [
                  'js/app.js',
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
          'js/handlebarTemplates.js': ['templates/**/*.hbs']
        }
      }
    }


  });
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
 
  grunt.registerTask('default', ['watch']);  
};