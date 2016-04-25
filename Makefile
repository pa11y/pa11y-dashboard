
# Color helpers
C_CYAN=\x1b[34;01m
C_RESET=\x1b[0m

# Group targets
all: deps lint test
ci: lint test

# Install dependencies
deps:
	@echo "$(C_CYAN)> installing dependencies$(C_RESET)"
	@npm install

# Lint JavaScript
lint: jshint jscs

# Run JSHint
jshint:
	@echo "$(C_CYAN)> linting javascript$(C_RESET)"
	@./node_modules/.bin/jshint .

# Run JavaScript Code Style
jscs:
	@echo "$(C_CYAN)> checking javascript code style$(C_RESET)"
	@./node_modules/.bin/jscs .

# Run all tests
test: test-integration

# Run integration tests
test-integration:
	@echo "$(C_CYAN)> running integration tests$(C_RESET)"
	@./node_modules/.bin/mocha ./test/integration --reporter spec --recursive --timeout 5000 --slow 50

# Compile LESS
less:
	@echo "$(C_CYAN)> compiling less$(C_RESET)"
	@./node_modules/.bin/lessc -x ./public/less/main.less ./public/css/site.min.css

# Compile client-side JavaScript
uglify:
	@echo "$(C_CYAN)> compiling client-side JavaScript$(C_RESET)"
	@./node_modules/.bin/uglifyjs \
		public/js/vendor/jquery/jquery.min.js \
		public/js/vendor/bootstrap/js/alert.js \
		public/js/vendor/bootstrap/js/dropdown.js \
		public/js/vendor/bootstrap/js/tooltip.js \
		public/js/vendor/bootstrap/js/transition.js \
		public/js/vendor/bootstrap/js/collapse.js \
		public/js/vendor/flot/jquery.flot.js \
		public/js/vendor/flot/jquery.flot.dashes.js \
		public/js/vendor/flot/jquery.flot.time.js \
		public/js/vendor/flot/jquery.flot.selection.js \
		public/js/vendor/flot/jquery.flot.resize.js \
		public/js/site.js \
		-o ./public/js/site.min.js

.PHONY: test
