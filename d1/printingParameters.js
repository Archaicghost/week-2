	var https = require('https');
	var data = '';


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html' };



function getAndPrintHTML(options) {


  https.get(options, function(response) {

  response.setEncoding('UTF8');

  response.on('data', function(chunk) {
  	data += chunk
  });

  response.on('end', function() {
  	console.log(data);
  });

  response.on('error', function(err) {
  	console.log(err.stack);
  });

});

}


getAndPrintHTML(requestOptions)