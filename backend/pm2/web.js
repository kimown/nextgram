/**
 * Created by google on 1/16/17.
 */

var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('web.js244')
})

app.listen(3334, function () {
    console.log('Example app listening on port 3334!')
})