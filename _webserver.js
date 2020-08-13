var express = require('express');

var app = express();

var execPHP = require('./execphp.js')();

execPHP.phpFolder = 'C:\\vue\\caepcav\\src\\php'


app.use('*.php',function(request,response,next) {
	execPHP.parseFile(request.originalUrl,function(phpResult) {
		response.write(phpResult);
		response.end();
	});
});



app.get('/', function(req, res) {
    res.render('index', { title: 'About dogs', message: 'Dogs rock!' });
});


app.listen(3000, function () {
	console.log('Node server listening on port 3000!');
});





