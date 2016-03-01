'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: "public",
      index: "index.html"
    }
  });
});

gulp.task('default', ['serve']);
