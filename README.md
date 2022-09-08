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

Pa11y Dashboard is a [Node.js][node] application and requires a stable or LTS version of Node, currently version 12 or 14.

⚠️ At the moment, Pa11y Dashboard won't work with Node.js v16. Please use Node.js 12 or 14. ⚠️

Pa11y Dashboard uses a [MongoDB][mongo] database to store the results of the tests. The database doesn't have to be in the same server or computer where Pa11y Dashboard is running from.

Pa11y Dashboard uses [puppeteer](https://www.npmjs.com/package/puppeteer) to create a headless instance of the Chromium browser in order to run the tests. On certain environments this may require additional dependencies to be installed. For example, in Debian/Ubuntu systems you may need to install the `libnss3` and `libgconf-2-4` libraries in order to be able to run tests on Pa11y Dashboard. Please refer to the documentation from your provider for details on how to do this.

## Setting up Pa11y Dashboard

In order to run Pa11y Dashboard, we recommend cloning this repository locally:

```sh
git clone https://github.com/pa11y/pa11y-dashboard.git
```

Then installing the dependencies:

```sh
cd pa11y-dashboard
npm install
```

### Installing MongoDB

Instructions for installing and running MongoDB are outside the scope of this document. When in doubt, please refer to the [MongoDB installation instructions](https://docs.mongodb.com/manual/installation/) for details of how to install and run MongoDB on your specific operating system. An example of the installation and configuration process for macOS follows.

Pa11y Dashboard currently uses version 3 of the Node.js MongoDB driver, which means that [only MongoDB servers of versions 4.4 or older are supported](https://docs.mongodb.com/drivers/node/current/compatibility/#mongodb-compatibility). Please ensure that your MongoDB server fills the requirements before trying to run Pa11y Dashboard.

#### Example MongoDB installation for macOS

On recent versions of macOS (10.13 or later), you can use [Homebrew](https://brew.sh/) to install MongoDB Community Edition. More recent versions of MongoDB are untested and unsupported.

Tap the MongoDB Homebrew Tap:

```sh
brew tap mongodb/brew
```

Install a supported Community version of MongoDB:

```sh
brew install mongodb-community@4.4
```

Start the MongoDB server:

```sh
brew services start mongodb/brew/mongodb-community@4.4
```

Check that the service has started properly:

```sh
$ brew services list
Name              Status  User       Plist
mongodb-community started pa11y      /Users/pa11y/Library/LaunchAgents/homebrew.mxcl.mongodb-community.plist
```

### Configuring Pa11y Dashboard

The last step before being able to run Pa11y Dashboard is to define a configuration for it. This can be done in two ways:

#### Option 1: Using environment variables

Each configuration can be set with an environment variable rather than a config file. For example to run the application on port `8080` you can use the following:

```sh
PORT=8080 node index.js
```

The [available configurations](#configurations) are documented in the next section.

#### Option 2: Using config files

You can store the configuration for Pa11y Dashboard on a JSON file. You can use a different configuration file for each environment you're planning to run Pa11y Dashboard on. You can choose a specific environment to run the application from by setting the `NODE_ENV` environment variable:

```sh
NODE_ENV=development node index.js
```

Three example files are provided in this repository, you can copy and customise them to your liking:

```sh
cp config/development.sample.json config/development.json
cp config/production.sample.json config/production.json
cp config/test.sample.json config/test.json
```

The [available configurations](#configurations) are documented in the next section.

If you run into problems, check the [troubleshooting guide][#troubleshooting].

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

## Useful resources

* [Setting up An Accessibility Dashboard from Scratch with Pa11y on DigitalOcean](https://una.im/pa11y-dash/)
* [Monitoring Web Accessibility Compliance With Pa11y Dashboard](https://www.lullabot.com/articles/monitoring-web-accessibility-compliance-with-pa11y-dashboard)

## Troubleshooting

### Common issues

* `500` errors or `Could not connect to pa11y-webservice` messages are often related to MongoDB. Ensure that you have the [appropriate version of MongoDB][#installing-mongodb] installed, and that it's running - it doesn't always start automatically.
* Error messages saying that pa11y-webservice isn't running may be due to dependency installation problems. Try deleting your `pa11y-dashboard/node_modules` directory and running `npm install` again.

### Create a new issue

Check the [issue tracker][issues] for similar issues before creating a new one. If the problem that you're experiencing is not covered by one of the existing issues, you can [create a new issue][create-issue]. Please include your node.js and MongoDB version numbers, and your operating system, as well as any information that may be useful in debugging the issue.

## Support and Migration

Pa11y Dashboard major versions are normally supported for 6 months after their last minor release. This means that patch-level changes will be added and bugs will be fixed. The table below outlines the end-of-support dates for major versions, and the last minor release for that version.

We also maintain a [migration guide](MIGRATION.md) to help you migrate.

| :grey_question: | Major Version | Last Minor Release | Node.js Versions | Support End Date |
| :-------------- | :------------ | :----------------- | :--------------- | :--------------- |
| :heart:         | 4             | N/A                | 12+              | N/A              |
| :hourglass:     | 3             | 3.3.0              | 8+               | 2022-05-26       |
| :skull:         | 2             | 2.4.2              | 4+               | 2020-01-16       |
| :skull:         | 1             | 1.12               | 0.10–6           | 2016-12-05       |

If you're opening issues related to these, please mention the version that the issue relates to.

## License

Pa11y Dashboard is licensed under the [GNU General Public License 3.0][info-license].<br/>
Copyright &copy; 2013–2020, Team Pa11y and contributors

[gpl]: http://www.gnu.org/licenses/gpl-3.0.html
[mongo]: http://www.mongodb.org/
[node]: http://nodejs.org/
[pa11y]: https://github.com/pa11y/pa11y
[pa11y-webservice-config]: https://github.com/pa11y/webservice#configurations
[issues]: https://github.com/pa11y/pa11y-dashboard/issues?utf8=%E2%9C%93&q=is%3Aissue
[create-issue]: https://github.com/pa11y/pa11y-dashboard/issues/new
[info-node]: package.json
[info-build]: https://travis-ci.org/pa11y/pa11y-dashboard
[info-license]: LICENSE
[shield-version]: https://img.shields.io/github/package-json/v/pa11y/pa11y-dashboard.svg
[shield-node]: https://img.shields.io/node/v/pa11y/pa11y-dashboard.svg
[shield-build]: https://img.shields.io/travis/pa11y/pa11y-dashboard/master.svg
[shield-license]: https://img.shields.io/badge/license-GPL%203.0-blue.svg
