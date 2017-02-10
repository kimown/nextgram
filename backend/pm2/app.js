/**
 * Created by google on 1/16/17.
 */

var express = require('express')
var app = express();
const openBrowser = require('react-dev-utils/openBrowser');
const PORT = 8080;

app.get('/', function (req, res) {
    res.send('app.js' + PORT)
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ! ${PORT}`)
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