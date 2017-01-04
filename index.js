#! /usr/bin/env node

(function() {
  var path = require('path');
  var pkg = require(path.join(process.cwd(), 'package.json'));
  var spawn = require('child-process').spawn;

  var log = console.log;

  // Build arguments for npm
  log("Node process.version = ", process.version);
  var dependencies = process.version + '-Dependencies'
  var dependenciesObj = pkg[dependencies]

  var versionArray = process.version.split(".");
  var minorDependencies = versionArray[0] + "." + versionArray[1] + ".*-Dependencies";
  var minorDependenciesObj = pkg[minorDependencies];

  dependenciesObj = dependenciesObj || minorDependenciesObj; 
  log("dependencies = ", dependenciesObj); 

  if (dependenciesObj) {
    log('Installing dependencies for ' + process.version)
    var npmArgs = ['install']
    for (var dep in dependenciesObj) {
      if (dependenciesObj.hasOwnProperty(dep)) {
        npmArgs.push(dep.concat('@').concat(dependenciesObj[dep]))
      }
    }
    var options = {
      stdio: 'inherit' // feed all child process logging into parent process
    }

    spawn('npm', npmArgs, options)
  } else {
    log('No specific dependencies on this platform: ' + process.version)
  }
})();
