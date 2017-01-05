/* eslint-disable */

// disable all rule in dev tools: http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments

const gulp = require('gulp')
const shell = require('gulp-shell')

gulp.task('default', shell.task([
    'echo gulp-shell_works_properly'
]))

