module.exports = function (grunt) {

	grunt.initConfig({

		jshint: {
			all: ['**/*.js', '!node_modules/**/*.js', '!public/js/vendor/**/*.js'],
			options: {
				es3: false,
				indent: 4,
				latedef: false,
				maxcomplexity: 4,
				maxdepth: 2,
				maxlen: 100,
				maxparams: 4,
				maxstatements: false,
				node: true,
				quotmark: 'single'
			}
		},

		less: {
			all: {
				options: {
					cleancss: true
				},
				files: {
					'public/css/main.css': 'public/less/main.less'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('compile', ['less']);
	grunt.registerTask('default', ['compile', 'lint']);
	grunt.registerTask('ci', ['compile', 'lint']);

};