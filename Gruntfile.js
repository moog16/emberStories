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
        files: 'app/scripts/**/*.handlebars',
        tasks: ['emberTemplates', 'livereload']
      },
    },
    emberTemplates: {
      compile: {
        options: {
          amd: true,
          templateBasePath: /path\/to\//
        },
        files: {
          "path/to/result.js": "path/to/source.handlebars",
          "path/to/another.js": ["path/to/sources/*.handlebars", "path/to/more/*.handlebars"]
        }
      }
    }

  });
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');
 
  grunt.registerTask('default', ['watch']);  
};