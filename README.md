pa11y-dashboard
===============

pa11y-dashboard is a visual web interface to the [pa11y][pa11y] accessibility reporter.

**Current Version:** *1.0.0-beta.1*  
**Node Version Support:** *0.10*


![The Dashboard Page](https://f.cloud.github.com/assets/1225142/1269563/2fc6e4e0-2cfb-11e3-8f49-e74a9d49bb32.jpg)
![The URL Page](https://f.cloud.github.com/assets/1225142/1269564/2fe12f26-2cfb-11e3-8a24-d6eba09a940d.jpg)


Setup
-----

pa11y-dashboard requires [Node.js][node] 0.10+ and [pa11y-webservice][pa11y-webservice] to be installed and running. You'll need to follow the setup guide for pa11y-webservice before setting up pa11y-dashboard.

You'll then need to clone this repo locally and install dependencies with `make deps`, this installs npm and bower dependencies. Once you have a local clone, you'll need to copy some sample configuration files in order to run the application. From within the repo, run the following commands:

```sh
$ cp config/development.sample.json config/development.json
$ cp config/production.sample.json config/production.json
```

Each of these files defines configurations for a different environment. If you're just running the application locally, then you should be OK with just development configurations. The [available configurations are documented here](#configurations).

Now that you've got your application configured, you can run in each mode with the following commands:

```sh
$ make start       # start in production mode
$ make start-dev   # start in development mode
```

Development mode runs the application with [Supervisor][supervisor], so you won't need to restart it if you change any JavaScript files.


Configurations
--------------

The boot configurations for pa11y-dashboard are as follows. Look at the sample JSON files in the repo for example usage.

### webservice
*(string)* The base URL of the [pa11y-webservice][pa11y-webservice] instance you intend on using.

### port
*(number)* The port to run the application on.


License
-------

[Copyright 2013 Nature Publishing Group](LICENSE.txt).  
pa11y-dashboard is licensed under the [GNU General Public License 3.0][gpl].



[gpl]: http://www.gnu.org/licenses/gpl-3.0.html
[node]: http://nodejs.org/
[pa11y]: https://github.com/nature/pa11y
[pa11y-webservice]: https://github.com/nature/pa11y-webservice
[supervisor]: https://github.com/isaacs/node-supervisor
