var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendfile('./view.html');
});

app.listen(port, function() {
    console.log('start on :3000');
});
