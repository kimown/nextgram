/**
 * Created by google on 1/13/17.
 */


var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

var apiProxy = proxy('/api', {target: 'http://www.example.org'});


app.use('/api/a.json', proxy({target: 'http://localhost:3322', changeOrigin: true}));



//  /api/a.json --> 'activity.yonghuivip.com/a.json'
//  /pick/product/detail/ --> 'testin-partner-api.yonghuivip.com/product/detail/'

// proxy middleware options
var options = {
    target: 'http://localhost:3322/testin/api/', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
        // '^/api/a.json' : 'a.json',     // rewrite path
        // '^/api/remove/path' : '/path'           // remove base path
        "^/api233": ""
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        // 'dev.localhost:3000' : 'http://localhost:8000'
    }
};


// create the proxy (without context)
var exampleProxy = proxy(options);

// mount `exampleProxy` in web server
var app = express();
app.use('/api233', exampleProxy);
app.listen(3321);