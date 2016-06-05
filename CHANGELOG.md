
# Changelog

## 1.12.1 (2016-06-05)

  * Update references/links after a repo rename

## 1.12.0 (2016-05-26)

  * Update Node.js version support to 0.10–6.0
  * Update dependencies
    * body-parser: added at ~1.15
    * chalk: ~0.2 to ~1.1
    * compression: added at ~1.6
    * express: ~3.4 to ~4.13
    * express-hbs: ~0.2 to ~1.0
    * moment: ~2.2 to ~2.13
    * pa11y-webservice: ~1.10 to ~1.11
    * pa11y-webservice-client-node: ~1.1 to ~1.2
    * bower: ~1.2 to ~1.7
    * cheerio: added at ~0.20
    * jsdom: removed
    * request: ~2.27 to ^2
    * uglify-js: ~2.4 to ~2.6

## 1.11.0 (2016-05-23)

  * Add the ability to configure task wait times
  * Allow configuration by environment variables
  * Update repository references to the new Pa11y organisation
  * Add a changelog

## 1.10.0 (2016-05-18)

  * Automatically focus on the filter input box when you select the filter
  * Make a task URL clickable
  * Tweak the documentation to make it more usable
  * Add a resources section to the README

## 1.9.0 (2016-04-25)

  * Show errors' context and selector on the results page
  * Add context and selector to CSV output
  * Fix lint errors
  * Switch from Grunt to Make
  * Add a `SIGINT` handler
  * Update dependencies
    * pa11y-webservice: ~1.6 to ~1.8

## 1.8.2 (2016-02-10)

  * Update the license in the footer

## 1.8.1 (2016-02-10)

  * Update repository references to springernature

## 1.8.0 (2016-02-04)

  * Make the graph more accessible to color-blind users
  * Fix lint errors

## 1.7.0 (2016-01-29)

  * Hide the date list from individual result pages
  * Make the date selector properly keyboard accessible
  * Change the options button into a more accessible list
  * Make the errors/warnings/notices lists keyboard accessible

## 1.6.1 (2016-01-26)

  * Add keyboard access for filters
  * Fix lint errors

## 1.6.0 (2015-08-20)

  * Hide all graph data except for errors by default

## 1.5.0 (2015-07-06)

  * Add the ability to use HTTP basic auth with task URLs
  * Update dependencies
    * pa11y-webservice: ~1.5 to ~1.6

## 1.4.0 (2015-07-02)

  * Add the ability to set a per-task timeout

## 1.3.2 (2015-01-17)

  * Update dependencies
    * pa11y-webservice: ~1.3 to ~1.4

## 1.3.1 (2014-03-05)

  * Fix the URL filter position when in demo mode

## 1.3.0 (2014-03-04)

  * Add filtering of tasks on the home page
  * Add the ability to ignore certain rules
  * Add the ability to ignore a rule from the result page
  * Tweak the display of task cards

## 1.2.3 (2014-01-13)

  * Fix CSV export for the OS X version of Excel

## 1.2.2 (2014-01-09)

  * Fix spacing issues when the graph is not visible
  * Add notes on publishing a release

## 1.2.1 (2014-01-08)

  * Fix dropdown positioning in Internet Explorer 7 and 8

## 1.2.0 (2013-12-12)

  * Add HTML Codesniffer links on the results page
  * Display the ignore rules for results on the results page
  * Link the breadcrumbs on task sub-pages
  * Fix an issue with saving empty ignore rules
  * Cache-bust the CSS and JavaScript
  * Add the ability to edit tasks
  * Fix lint errors
  * Tweaks to the display of the graphs
  * Update dependencies
    * pa11y-webservice: ~1.1 to ~1.2
    * pa11y-webservice-client-node: ~1.0 to ~1.1

## 1.1.0 (2013-11-22)

  * Add a functional test suite
  * Allow the webservice to run automatically
  * Documentation improvements
  * Add a Travis config
  * Fix lint errors

## 1.0.0 (2013-11-19)

  * Initial stable release
  * Add the ability to set a site-wide message
  * Add a demo mode for demo/public-facing sites
  * Disable search engine indexing by default
  * Tweak the task header at smaller screen sizes
  * Make checkboxes on the graph WCAG2AA compliant
  * Make checkbox inputs and labels WCAG2AA compliant on new URL page
  * Colour changes to ensure there are no contrast issues
  * Make the copy more consistent
  * Update screenshots
  * Update dependencies
    * pa11y-webservice-client-node: 1.0.0-beta.7 to ~1.0

## 1.0.0-beta.3 pre-release (2013-11-12)

  * Fix lint errors
  * Add descriptive labels to tasks
  * Add a name field to "New URL" form
  * Add a WCAG 2.0 link to the footer
  * Tweak the layout at smaller screen sizes
  * Notify users when there are no ignored rules
  * Fix the expires headers for front end assets
  * Move from Make to Grunt
  * Compress static files
  * Minify the site JavaScript
  * Compile LESS files with grunt
  * Add a watch task to recompile assets on change
  * Commit compiled front-end code to the repo
  * Add development instructions
  * Update screenshots
  * Update dependencies
    * pa11y-webservice-client-node: 1.0.0-beta.4 to 1.0.0-beta.7

## 1.0.0-beta.2 pre-release (2013-10-04)

  * Add screenshots to the README
  * Fix margins
  * Add bower package management
  * Stop the graph from appearing if there's only one result
  * Add the ability to run tasks ad-hoc
  * Add more useful information to the footer
  * General copy edits
  * Update dependencies
    * pa11y-webservice-client-node: 1.0.0-beta.3 to 1.0.0-beta.4

## 1.0.0-beta.1 pre-release (2013-09-27)

  * Initial release
