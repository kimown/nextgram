/**
 * Created by google on 1/24/17.
 */


var Base64 = require('js-base64').Base64;

var a = Base64.encode('dankogai');

var b = Base64.decode(a)

console.info(b)