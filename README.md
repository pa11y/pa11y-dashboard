pa11y-dashboard
===============

pa11y-dashboard is a visual web interface to the [pa11y][pa11y] accessibility reporter; allowing you to focus on *fixing* issues rather than hunting them down.

**Current Version:** *1.0.0-beta.3*  
**Node Version Support:** *0.10*


![dashboard](https://f.cloud.github.com/assets/1225142/1549567/f0361e72-4de8-11e3-8d14-3fe6900cc15d.jpg)
![results-page](https://f.cloud.github.com/assets/1225142/1549568/f225aa54-4de8-11e3-8b25-ef2f405997a3.jpg)


Setup
-----

pa11y-dashboard requires [Node.js][node] 0.10+ and [pa11y-webservice][pa11y-webservice] to be installed and running. You'll need to follow the setup guide for pa11y-webservice before setting up pa11y-dashboard.

You'll then need to clone this repo locally and install dependencies with `npm install`.

Once you have a local clone, you'll need to copy some sample configuration files in order to run the application. From within the repo, run the following commands:

```sh
$ cp config/development.sample.json config/development.json
$ cp config/production.sample.json config/production.json
```

Each of these files defines configurations for a different environment. If you're just running the application locally, then you should be OK with just development configurations. The [available configurations are documented here](#configurations).

Now that you've got your application configured, you can run in each mode with the following commands:

```sh
$ NODE_ENV=production node .   # Run in production
$ NODE_ENV=development node .  # Run in development
```

See [development instructions](#development) for more information about running locally (and restarting automatically when files change).


Configurations
--------------

The boot configurations for pa11y-dashboard are as follows. Look at the sample JSON files in the repo for example usage.

### webservice
*(string)* The base URL of the [pa11y-webservice][pa11y-webservice] instance you intend on using.

### port
*(number)* The port to run the application on.

### noindex
*(boolean)* If set to `true` (default), the dashboard will not be indexed by search engines. Set to `false` to allow indexing.


Development
-----------

To develop pa11y-dashboard, you'll need to clone the repo and get set up as outlined in the [setup guide](#setup). You'll also need [Grunt][grunt] to be installed globally in order to run tests, you can do this with `npm install -g grunt-cli`.

Now you'll be able to run the following commands:

```sh
$ grunt          # Run the lint and test tasks together
$ grunt lint     # Run JSHint with the correct config
$ grunt compile  # Compile front-end assets
$ grunt start    # Run app in development mode, restarting if files change
$ grunt watch    # Watch for file changes and compile assets
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
