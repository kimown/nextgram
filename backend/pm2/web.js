/**
 * Created by kimown on 1/16/17.
 */

var express = require('express')
var app = express();
const openBrowser = require('react-dev-utils/openBrowser');
const PORT = process.env.PORT;

app.get('/', function (req, res) {
    res.send('web.js '+PORT)
})

app.listen(PORT, function () {
  console.log(`Example app listening on port !${PORT}`);
  const openUrl = `http://localhost:${PORT}`;
  openBrowser(openUrl)
})