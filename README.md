# nvd - Node Version based Dependencies

There are cases when you have to support multiple version of NodeJS on production. Each version of node, require specific dependency management. In such cases, when you need to use some modules with node@0.10 and other modules in node@4.0.0 or node@6.2.4 etc. 

This module help you provide the dependencies in simple manner inside package.json, so that you can have different dependencies tree for each version of node.

# Sample Packge.json

```
{
	"name": "test-service",
	"version": "1.0.0",
	"private": true,
	"description": "Sample test service",
	"main": "index.js",
	"dependencies": {
		"async": "2.0.1",
		"bluebird": "3.4.6",
		"body-parser": "^1.15.2"
	},
	"v0.10.*-Dependencies": {
		"couchbase": "1.2.1"
	},
	"v4.6.0-Dependencies": {
		"couchbase": "2.2.4"
	},
	"devDependencies": {
		"chai": "3.5.0",
		"chai-things": "0.2.0",
		"mocha": "3.1.0",
		"should": "^7.1.1"
	},
	"scripts": {
		"test": "./node_modules/.bin/mocha"
	},
	"author": "Nitesh Yadav",
	"license": "MIT"
}
```
