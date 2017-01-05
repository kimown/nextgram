/* eslint-disable */

// disable all rule in dev tools: http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments

const gulp = require('gulp')
const shell = require('gulp-shell')
const minimist = require('minimist')
const knownOptions = {
    string: 'name',
    default: { name: '' }
}
const options = minimist(process.argv.slice(2), knownOptions);

gulp.task('default', shell.task([
    'echo gulp-shell_works_properly'
]))


// cmd: gulp demo --name demo233
gulp.task('demo', shell.task([
    `cp -r pages/demo/ pages/${options.name}`,
    `cp -r components/demo/ components/${options.name}`
]))

// cmd: gulp rmdemo --name demo233
gulp.task('rmdemo', shell.task([
    `rm -rf pages/${options.name}`,
    `rm -rf components/${options.name}`
]))


