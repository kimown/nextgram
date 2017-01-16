/**
 * Created by google on 1/16/17.
 */

var express = require('express')
var app = express();
const argv = require('yargs').argv;


app.get('/', function (req, res) {
    res.send('app.js233'+argv.module+"===---"+argv.api+"--===oiiii9999"+argv.env)
})

app.listen(3333, function () {
    console.log('Example app listening on port 3333!')
})