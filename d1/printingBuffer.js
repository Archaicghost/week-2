	var https = require('https');
	var data = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

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

getAndPrintHTML() 