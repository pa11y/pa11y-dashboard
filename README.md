pa11y-dashboard
===============

pa11y-dashboard is a visual web interface to the [pa11y][pa11y] accessibility reporter.

**Current Version:** *1.0.0-beta.2*  
**Node Version Support:** *0.10*


![The Dashboard Page](https://f.cloud.github.com/assets/1225142/1269563/2fc6e4e0-2cfb-11e3-8f49-e74a9d49bb32.jpg)
![The URL Page](https://f.cloud.github.com/assets/1225142/1297247/f749f3a0-30dd-11e3-9920-583f86f3c8f9.jpg)


Setup
-----

pa11y-dashboard requires [Node.js][node] 0.10+ and [pa11y-webservice][pa11y-webservice] to be installed and running. You'll need to follow the setup guide for pa11y-webservice before setting up pa11y-dashboard.

You'll then need to clone this repo locally and install dependencies with:

```sh
$ npm install
$ ./node_modules/.bin/bower install
```

This installs npm and bower dependencies. Once you have a local clone, you'll need to copy some sample configuration files in order to run the application. From within the repo, run the following commands:

```sh
$ cp config/development.sample.json config/development.json
$ cp config/production.sample.json config/production.json
```

Each of these files defines configurations for a different environment. If you're just running the application locally, then you should be OK with just development configurations. The [available configurations are documented here](#configurations).

You'll need [Grunt][grunt] to be installed globally in order to compile front-end assets. Run `npm install -g grunt-cli` to install grunt if you haven't already, then to compile assets:

```
$ grunt compile
```

Now that you've got your application configured, you can run in each mode with the following commands:

```sh
$ NODE_ENV=production node .
$ NODE_ENV=development ./node_modules/.bin/supervisor -q .
```

Development mode runs the application with [Supervisor][supervisor], so you won't need to restart it if you change any JavaScript files.


Configurations
--------------

The boot configurations for pa11y-dashboard are as follows. Look at the sample JSON files in the repo for example usage.

### webservice
*(string)* The base URL of the [pa11y-webservice][pa11y-webservice] instance you intend on using.

### port
*(number)* The port to run the application on.


Development
-----------

To develop pa11y-dashboard, you'll need to clone the repo and get set up as outlined in the [setup guide](#setup). You'll also need [Grunt][grunt] to be installed globally in order to run tests, you can do this with `npm install -g grunt-cli`.

Now you'll be able to run the following commands:

```sh
$ grunt          # Run the lint and test tasks together
$ grunt lint     # Run JSHint with the correct config
$ grunt compile  # Compile front-end assets
```

Code with lint errors or failing tests will not be accepted, please use the build tools outlined above.

For users with push-access, don't commit to the master branch. Code should be in `develop` until it's ready to be released.


License
-------

[Copyright 2013 Nature Publishing Group](LICENSE.txt).  
pa11y-dashboard is licensed under the [GNU General Public License 3.0][gpl].



[gpl]: http://www.gnu.org/licenses/gpl-3.0.html
[grunt]: http://gruntjs.com/
[node]: http://nodejs.org/
[pa11y]: https://github.com/nature/pa11y
[pa11y-webservice]: https://github.com/nature/pa11y-webservice
[supervisor]: https://github.com/isaacs/node-supervisor
