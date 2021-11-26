# Migration Guide

Pa11y Dashboard's API changes between major versions. This is a guide to help you make the switch when this happens.

## Table of contents

* [Table of contents](#table-of-contents)
* [Migrating from 3.0 to 4.0](#migrating-from-30-to-40)
* [Migrating from 2.0 to 3.0](#migrating-from-20-to-30)
	* [PhantomJS to Headless Chrome](#phantomjs-to-headless-chrome)
	* [Node.js Support](#nodejs-support)
	* [Miscellaneous](#miscellaneous)
* [Migrating from 1.0 to 2.0](#migrating-from-10-to-20)
	* [Node.js Support](#nodejs-support-1)

## Migrating from 3.0 to 4.0

Pa11y Dashboard requires Node.js version 12 or greater. Versions 8 and 10 are not supported any more.

## Migrating from 2.0 to 3.0

### PhantomJS to Headless Chrome

Pa11y Dashboard 3 uses version 5 of Pa11y, which replaces PhantomJS with [Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome). This allows us to use more modern JavaScript APIs and make Pa11y testing more stable.

As a result of this change, [Pa11y Dashboard's requirements](../README.md#requirements) have changed, and you may need to install additional dependencies required by Chrome before being able to use this version.

### Node.js Support

Pa11y Dashboard 3 requires Node.js version 8 or greater. Versions 4 and 6 are not supported any more.

### Miscellaneous

The default viewport dimensions for Pa11y have been changed from `1024x768` to `1280x1024`. This could make pa11y report a different number of errors if different content appears on the page based on its width, so results obtained with v2 and v3 may not be comparable.

## Migrating from 1.0 to 2.0

### Node.js Support

The only breaking change in Pa11y Dashboard 2.0 is that Node.js 0.10 and 0.12 are no longer supported. We'll be using newer ES6 features in upcoming releases which will not work in these older Node.js versions.
