include Makefile.node

# We need to run integration tests recursively
export INTEGRATION_FLAGS := --recursive


# Verify tasks
# ------------

# Lint alias for backwards compatibility
lint: verify


# Client-side asset tasks
# -----------------------

# Compile LESS
less:
	@lessc -x ./public/less/main.less ./public/css/site.min.css
	@$(TASK_DONE)

# Compile client-side JavaScript
uglify:
	@uglifyjs \
		public/js/vendor/jquery/jquery.min.js \
		public/js/vendor/bootstrap/js/alert.js \
		public/js/vendor/bootstrap/js/dropdown.js \
		public/js/vendor/bootstrap/js/tooltip.js \
		public/js/vendor/bootstrap/js/transition.js \
		public/js/vendor/bootstrap/js/collapse.js \
		public/js/vendor/bootstrap/js/tab.js \
		public/js/vendor/bootstrap/js/popover.js \
		public/js/vendor/flot/jquery.flot.js \
		public/js/vendor/flot/jquery.flot.dashes.js \
		public/js/vendor/flot/jquery.flot.time.js \
		public/js/vendor/flot/jquery.flot.selection.js \
		public/js/vendor/flot/jquery.flot.resize.js \
		public/js/vendor/helpers/html2canvas.min.js \
		public/js/site.js \
		-o ./public/js/site.min.js
	@$(TASK_DONE)
