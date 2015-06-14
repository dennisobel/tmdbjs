'use strict';

// -- DEPENDENCIES
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var mdox = require('gulp-mdox');
var pkg = require('./package.json');


// -- FILES
var path = {
  build: './dist',
  source: './lib/**/*.js'
};

var banner = [
  '/**',
  '* <%= pkg.name %> - <%= pkg.description %>',
  '* @version v<%= pkg.version %>',
  '* @author <%= pkg.author.name %> (<%= pkg.author.site %>)',
  '* @license <%= pkg.license %>',
  '*/',
  ''
].join('\n');

gulp.task('doc', function() {
  gulp
    .src(path.source)
    .pipe(mdox({
      src: 'README.MD',
      name: 'README.md',
      start: '# API'
    }))
    .pipe(gulp.dest("./"))
    ;
});

gulp.task('build', function() {
  gulp
    .src(path.source)
    .pipe(uglify())
    .pipe(header(banner, {pkg:pkg}))
    .pipe(gulp.dest(path.build))
    ;
});

gulp.task('default', ['doc', 'build']);
