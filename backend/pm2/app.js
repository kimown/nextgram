/**
 * Created by google on 1/16/17.
 */

var express = require('express')
var app = express();
const openBrowser = require('react-dev-utils/openBrowser');
const argv = require('yargs').argv;
const PORT = argv.env.port;

app.get('/', function (req, res) {
    res.send('app.js233'+argv.env.port+(typeof argv.env.port))
})

app.listen(PORT, function () {
    console.log('Example app listening on port !')
  const openUrl = `http://localhost:${PORT}`;
  openBrowser(openUrl)
})

// process.on('exit', (code) => {
//   console.log(`----About to exit with code: ${code}`);
// });

// setTimeout(()=>{
//   process.exit(1);
//
// },2000)