Pa11y Dashboard
===============

Pa11y Dashboard is a web interface to the [Pa11y][pa11y] accessibility reporter; allowing you to focus on *fixing* issues rather than hunting them down.

![Version][shield-version]
[![Node.js version support][shield-node]][info-node]
[![Build status][shield-build]][info-build]
[![GPL-3.0 licensed][shield-license]][info-license]

---

## Latest news from Pa11y

✨ 🔜 ✨ The Pa11y team is very excited to announce plans for the successor to Pa11y Dashboard and Pa11y Webservice, codename "Sidekick". Help us define the features that you want to see by visiting the [proposal][sidekick-proposal]. ✨

---


![dashboard](https://f.cloud.github.com/assets/1225142/1549567/f0361e72-4de8-11e3-8d14-3fe6900cc15d.jpg)
![results-page](https://f.cloud.github.com/assets/1225142/1549568/f225aa54-4de8-11e3-8b25-ef2f405997a3.jpg)


Setup
-----

Pa11y Dashboard requires [Node.js][node] 4+. See the [Pa11y][pa11y] documentation for detailed instructions on how to install this on your operating system.

You'll also need to have [MongoDB][mongo] installed and running. For quick access, you can install via a package manager such as on Mac OS `brew install mongodb` or on Linux (Debian) it would be `apt-get install mongodb`. To run MongoDB, you can run `mongod` in the command line. See the [MongoDB install guide][mongo-install] for more detailed information.

You'll then need to clone this repo locally and install dependencies with `npm install`. Now you need to add some configuration before you can run the application. We can do this in two ways:

### Option 1: Using Environment Variables

Each configuration can be set with an environment variable rather than a config file. For example to run the application on port `8080` you can use the following:

```sh
PORT=8080 node index.js
```

The [available configurations are documented here](#configurations).

### Option 2: Using Config Files

You'll need to copy and modify different config files depending on your environment (set with `NODE_ENV`):

```sh
cp config/development.sample.json config/development.json
cp config/production.sample.json config/production.json
cp config/test.sample.json config/test.json
```

Each of these files defines configurations for a different environment. If you're just running the application locally, then you should be OK with just development and test configurations. The [available configurations are documented here](#configurations).

Now that you've got your application configured, make sure you have a MongoDB server running with the `mongod` command in another terminal window. You can run in each mode by changing the `NODE_ENV` environment variable:

```sh
NODE_ENV=development node index.js
```

See [Contributing](#contributing) for more information about running locally (and restarting automatically when files change).

If you run into problems, check the [troubleshooting guide][troubleshooting].


Configurations
--------------

The boot configurations for Pa11y Dashboard are as follows. Look at the sample JSON files in the repo for example usage.

### port
*(number)* The port to run the application on. Set via a config file or the `PORT` environment variable.

### noindex
*(boolean)* If set to `true` (default), the dashboard will not be indexed by search engines. Set to `false` to allow indexing. Set via a config file or the `NOINDEX` environment variable.

### readonly
*(boolean)* If set to `true`, users will not be able to add, delete or run URLs (defaults to `false`). Set via a config file or the `READONLY` environment variable.

### siteMessage
*(string)* A message to display prominently on the site home page. Defaults to `null`.

### webservice
This can either be an object containing [Pa11y Webservice configurations][pa11y-webservice-config], or a string which is the base URL of a [Pa11y Webservice][pa11y-webservice] instance you are running separately. If using environment variables, prefix the webservice vars with `WEBSERVICE_`.


Contributing
------------

There are many ways to contribute to Pa11y Dashboard, we cover these in the [contributing guide](CONTRIBUTING.md) for this repo.

If you're ready to contribute some code, you'll need to clone the repo and get set up as outlined in the [setup guide](#setup). You'll then need to start the application in test mode with:

```sh
NODE_ENV=test node index.js
```

You'll now be able to run the following commands:

```sh
make verify              # Verify all of the code (ESLint)
make test                # Run all tests
make test-integration    # Run the integration tests
```

To compile the client-side JavaScript and CSS, you'll need the following commands. Compiled code is committed to the repository.

```sh
make less    # Compile the site CSS from LESS files
make uglify  # Compile and uglify the client-side JavaScript
```


Useful Resources
-------
* [Setting up An Accessibility Dashboard from Scratch with Pa11y on DigitalOcean](https://una.im/pa11y-dash/)
* [Monitoring Web Accessibility Compliance With Pa11y Dashboard](https://www.lullabot.com/articles/monitoring-web-accessibility-compliance-with-pa11y-dashboard)

Support and Migration
---------------------

Pa11y Dashboard major versions are normally supported for 6 months after their last minor release. This means that patch-level changes will be added and bugs will be fixed. The table below outlines the end-of-support dates for major versions, and the last minor release for that version.

We also maintain a [migration guide](MIGRATION.md) to help you migrate.

| :grey_question: | Major Version | Last Minor Release | Node.js Versions | Support End Date |
| :-------------- | :------------ | :----------------- | :--------------- | :--------------- |
| :heart:         | 2             | N/A                | 4+               | N/A              |
| :skull:         | 1             | 1.12               | 0.10–6           | 2016-12-05       |

If you're opening issues related to these, please mention the version that the issue relates to.


License
-------

Pa11y Dashboard is licensed under the [GNU General Public License 3.0][info-license].<br/>
Copyright &copy; 2013–2017, Team Pa11y



[gpl]: http://www.gnu.org/licenses/gpl-3.0.html
[mongo]: http://www.mongodb.org/
[mongo-install]: https://docs.mongodb.org/manual/installation/
[node]: http://nodejs.org/
[pa11y]: https://github.com/pa11y/pa11y
[pa11y-webservice-config]: https://github.com/pa11y/webservice#configurations
[phantom]: http://phantomjs.org/
[sidekick-proposal]: https://github.com/pa11y/sidekick/blob/master/PROPOSAL.md
[travis]: https://travis-ci.org/pa11y/dashboard
[travis-img]: https://travis-ci.org/pa11y/dashboard.png?branch=master
[troubleshooting]: https://github.com/pa11y/dashboard/blob/master/TROUBLESHOOTING.md

[info-license]: LICENSE
[info-node]: package.json
[info-build]: https://travis-ci.org/pa11y/pa11y-dashboard
[shield-license]: https://img.shields.io/badge/license-GPL%203.0-blue.svg
[shield-node]: https://img.shields.io/badge/node.js%20support-4–6-brightgreen.svg
[shield-version]: https://img.shields.io/badge/version-2.4.2-blue.svg
[shield-build]: https://img.shields.io/travis/pa11y/pa11y-dashboard/master.svg
