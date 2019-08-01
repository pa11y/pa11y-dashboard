# Pa11y Dashboard

Pa11y Dashboard is a web interface to the [Pa11y][pa11y] accessibility reporter; allowing you to focus on *fixing* issues rather than hunting them down.

![Version][shield-version]
[![Node.js version support][shield-node]][info-node]
[![Build status][shield-build]][info-build]
[![GPL-3.0 licensed][shield-license]][info-license]

![dashboard](https://user-images.githubusercontent.com/6110968/61603347-0bce1000-abf2-11e9-87b2-a53f91d315bb.jpg)
![results-page](https://user-images.githubusercontent.com/6110968/62183438-05851580-b30f-11e9-9bc4-b6a4823ae9e8.jpg)

---

## Requirements

Pa11y Dashboard is a [Node.js][node] application and requires a stable or LTS version of Node, currently version 8 or greater.

Pa11y Dashboard also requires a [MongoDB][mongo] database to be available so it can store the results of the tests. The database doesn't have to be in the same server or computer where Pa11y Dashboard is running from.

Since version 3, Pa11y Dashboard uses Headless Chrome in order to run the tests. This means that additional dependencies maybe be required.

In [Unix-like](https://en.wikipedia.org/wiki/Unix-like) systems you may need to install the `libnss3` and `libgconf-2-4` libraries in order to be able to run Chrome. If you're trying to run the app in a headless environment (e.g. the cloud, or a headless server), you may also need to configure Xvfb before. Please refer to the documentation from your provider for details on how to do this.

## Setup

In order to run Pa11y Dashboard, we recommend cloning this repository locally:

```sh
git clone https://github.com/pa11y/pa11y-dashboard.git
```

Then installing the dependencies:

```sh
cd pa11y-dashboard
npm install
```

You'll also need to have [MongoDB][mongo] installed and running. For quick access, you can install via a package manager such as on Mac OS `brew install mongodb` or on Linux (Debian) it would be `apt-get install mongodb`. To run MongoDB, you can run `mongod` in the command line. See the [MongoDB install guide][mongo-install] for more detailed information.

The last step before being able to run the application is to define a configuration for it. This can be done in two ways:

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

## Configurations

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

## Contributing

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

## Useful Resources

* [Setting up An Accessibility Dashboard from Scratch with Pa11y on DigitalOcean](https://una.im/pa11y-dash/)
* [Monitoring Web Accessibility Compliance With Pa11y Dashboard](https://www.lullabot.com/articles/monitoring-web-accessibility-compliance-with-pa11y-dashboard)

## Support and Migration

Pa11y Dashboard major versions are normally supported for 6 months after their last minor release. This means that patch-level changes will be added and bugs will be fixed. The table below outlines the end-of-support dates for major versions, and the last minor release for that version.

We also maintain a [migration guide](MIGRATION.md) to help you migrate.

| :grey_question: | Major Version | Last Minor Release | Node.js Versions | Support End Date |
| :-------------- | :------------ | :----------------- | :--------------- | :--------------- |
| :heart:         | 3             | N/A                | 8+               | N/A              |
| :hourglass:     | 2             | 2.4.2              | 4+               | 2020-01-16       |
| :skull:         | 1             | 1.12               | 0.10–6           | 2016-12-05       |

If you're opening issues related to these, please mention the version that the issue relates to.

## License

Pa11y Dashboard is licensed under the [GNU General Public License 3.0][info-license].<br/>
Copyright &copy; 2013–2019, Team Pa11y and contributors

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

[info-node]: package.json
[info-build]: https://travis-ci.org/pa11y/pa11y-dashboard
[info-license]: LICENSE
[shield-version]: https://img.shields.io/github/package-json/v/pa11y/pa11y-dashboard.svg
[shield-node]: https://img.shields.io/node/v/pa11y/pa11y-dashboard.svg
[shield-build]: https://img.shields.io/travis/pa11y/pa11y-dashboard/master.svg
[shield-license]: https://img.shields.io/badge/license-GPL%203.0-blue.svg
