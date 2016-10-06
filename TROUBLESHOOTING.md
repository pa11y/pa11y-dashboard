Troubleshooting
===============


Common issues
-----

* `500` errors or `Could not connect to pa11y-webservice` messages are often related to MongoDB. Ensure that you have the [latest version of MongoDB][mongo-install] installed, and that it's running - it doesn't always start automatically. 
* Error messages saying that pa11y-webservice isn't running may be due to dependency installation problems. Try deleting your `pa11y-dashboard/node_modules` directory and running `npm install` again. 


Check to see if the issue has been reported
-----

* Check the [issue tracker][issues] for similar issues.


Create an issue
-----

If all else fails, [create an issue][create-issue] and we'll help you. Please include your node.js, Phantom, and MongoDB version numbers, and your operating system. 


[issues]: https://github.com/pa11y/dashboard/issues?utf8=%E2%9C%93&q=is%3Aissue
[mongo-install]: https://docs.mongodb.org/manual/installation/
[create-issue]: https://github.com/pa11y/dashboard/issues/new

