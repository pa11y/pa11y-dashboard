// This file is part of pa11y-dashboard.
// 
// pa11y-dashboard is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// pa11y-dashboard is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with pa11y-dashboard.  If not, see <http://www.gnu.org/licenses/>.

module.exports = function (grunt) {

	grunt.initConfig({

		jshint: {
			all: [
				'**/*.js',
				'!node_modules/**/*.js',
				'!public/js/vendor/**/*.js',
				'!public/js/site.min.js'
			],
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

		mochaTest: {
			functional: {
				src: ['test/functional/**/*.js'],
				options: {
					reporter: 'spec',
					timeout: 4000
				}
			}
		},

		nodemon: {
			development: {
				options: {
					cwd: __dirname,
					file: 'index.js',
					env: {
						NODE_ENV: 'development'
					}
				}
			},
			test: {
				options: {
					cwd: __dirname,
					file: 'index.js',
					env: {
						NODE_ENV: 'test'
					}
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
						'public/js/vendor/flot/jquery.flot.time.js',
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
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('lint', ['jshint']);
	grunt.registerTask('test', ['mochaTest']);
	grunt.registerTask('compile', ['less', 'uglify']);
	grunt.registerTask('start', ['nodemon:development']);
	grunt.registerTask('start-test', ['nodemon:test']);
	grunt.registerTask('default', ['compile', 'lint', 'test']);
	grunt.registerTask('ci', ['lint', 'test']);

};
