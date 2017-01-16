/**
 * Created by google on 1/13/17.
 */


var express = require('express')
var app = express()


// http://activity.yonghuivip.com/testin/api/
app.get('/api/a.json', function (req, res) {
    res.end('/api/a.json;from server.js\r\n')
})

app.get('/a.json', function (req, res) {
    res.end('a.json from server.js\r\n')
})

app.get('/testin/api/a.json', function (req, res) {
    res.end('/testin/api/a.json from server.js\r\n')
})

app.get('/api-rest/api/a.json', function (req, res) {
    res.end('/testin/api/a.json from server.js\r\n')
})


app.listen(3322)