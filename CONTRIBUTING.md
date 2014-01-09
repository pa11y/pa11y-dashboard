
How To Contribute
=================

pa11y-dashboard accepts contributions from anyone, as long as you follow the guidelines below. If you'd like to contribute but aren't sure what there is for you to do, check the issue tracker for [things ready to be worked on][ready] and [known bugs][bugs].

It might be an idea to focus efforts on the goal of the [next milestone][milestones] before jumping onto anything too far ahead on the roadmap.


Features
--------

We won't accept features without prior discussion in the [issue tracker][issues]. Two heads are always better than one – this blanket rule stops you from spending your valuable time on features which may not make it back into pa11y-dashboard.

If you want to fork the project and build on it by yourself, of course that's absolutely fine! Just don't expect your code to me merged back upstream :)


Refactoring/Rewriting
---------------------

We will accept refactors where it makes an improvement to the maintainability of the code-base or makes code more readable/understandable. If there's an argument about what's readable or not, chat about it in a pull-request.


Coding Guidelines
-----------------

* No trailing whitespace please (except in Markdown)
* Generally follow the style that is currently present in the code – consistency is important
* Keep indentation consistent (tabs)
* Don't commit code with lint errors (run `grunt lint` to run JSHint with the correct configurations)
* Don't commit code without passing tests (run `grunt test`).


Versioning
----------

We use [Semantic Versioning][semver] in this project. The process for releasing a new version is as follows; this should only be done by core contributors – you don't need to include a tagged version in your pull-requests.

* Merge the `develop` branch into `master` and switch to that branch
* Update the version number in `package.json` and `README.md`
* Commit the changes with the message: "Version x.x.x" (x.x.x being the new version number)
* Tag the commit with the version number (just the numbers, no "version" or "v")
* Push with tags: `git push --tags`
* Check out the develop branch, merge master into it, and push
* On GitHub, add [release notes][release-notes] for the new version. The title should be "Version x.x.x", and the description should be a list of new features/fixes


[bugs]: https://github.com/nature/pa11y-dashboard/issues?labels=bug&state=open
[ready]: https://github.com/nature/pa11y-dashboard/issues?labels=ready&state=open
[issues]: https://github.com/nature/pa11y-dashboard/issues
[milestones]: https://github.com/nature/pa11y-dashboard/issues/milestones
[release-notes]: https://github.com/nature/pa11y-dashboard/releases
[semver]: http://semver.org/
