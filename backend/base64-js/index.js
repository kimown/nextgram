/**
 * Created by google on 1/24/17.
 */


// const base64 = require('base64-js')
//
//
// const strAfterEncode = base64.fromByteArray('hello world');
// console.info(strAfterEncode)
//
//
// const strAfterDecode =  base64.toByteArray(strAfterEncode)
//
// console.info(strAfterDecode)


var encode  = new Buffer('Hello, world!').toString('base64');

var decode = Buffer('SGVsbG8sIHdvcmxkIQ==', 'base64').toString('ascii')

console.info(encode+"----" + decode)