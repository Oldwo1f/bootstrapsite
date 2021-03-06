/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {

	grunt.config.set('clean',{
		dev: {
		 src: ['.tmp/public/**','!.tmp/public/bower_components/*']
		 ,
		 options: {
		 'no-write': true
		 }
		},
		components: ['.tmp/public/bower_components/**'],
		build: ['www']
	}
	);

	grunt.loadNpmTasks('grunt-contrib-clean');
};
