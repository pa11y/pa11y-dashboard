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
					'public/css/site.min.css': 'public/less/main.less'
				}
			}
		},

		uglify: {
			options: {
				mangle: false
			},
			all: {
				files: {
					'public/js/site.min.js': [
						'public/js/vendor/jquery/jquery.min.js',
						'public/js/vendor/bootstrap/js/alert.js',
						'public/js/vendor/bootstrap/js/dropdown.js',
						'public/js/vendor/bootstrap/js/tooltip.js',
						'public/js/vendor/flot/jquery.flot.js',
						'public/js/vendor/flot/jquery.flot.categories.js',
						'public/js/vendor/flot/jquery.flot.selection.js',
						'public/js/vendor/flot/jquery.flot.resize.js',
						'public/js/site.js'
					]
				}
			}
		},

		watch: {
			less: {
				files: ['public/less/**/*.less'],
				tasks: ['less']
			},
			js: {
				files: ['public/js/**/*.js', '!public/js/site.min.js'],
				tasks: ['uglify']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('compile', ['less', 'uglify']);
	grunt.registerTask('default', ['compile', 'lint']);
	grunt.registerTask('ci', ['compile', 'lint']);

};