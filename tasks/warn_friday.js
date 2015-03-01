/*
 * grunt-warn-friday
 * https://github.com/dinks/grunt-warn-friday
 *
 * Copyright (c) 2015 Dinesh Vasudevan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('warn_friday', 'Grunt to warn developers of a Friday deployment', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      friday: 5, // Define the Day which is Friday
      aggressive: true, // Aggressive bt default
      warningTemplate: 'templates/deploy_friday.txt',
      warningColor: 'red',
      okTemplate: 'templates/all_ok.txt',
      okColor: 'green'
    });

    var now = new Date();

    if (now.getDay() === options.friday) {
      grunt.log.writeln(grunt.file.read(options.warningTemplate)[options.warningColor].bold);
      return options.aggressive === false; // Return false if aggressive and use --force to continue
    } else {
      grunt.log.writeln(grunt.file.read(options.okTemplate)[options.okColor].bold);
    }

  });

};
