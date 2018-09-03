  var https = require('https');
	var data = '';

  var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html' };


function getHTML(options, callback) {


  https.get(options, function(response) {

  response.setEncoding('UTF8');

  response.on('data', function(chunk) {
  	data += chunk
  });

  response.on('end', function() {
  	callback(data)
  });

  response.on('error', function(err) {
  	console.log(err.stack);
  });
});

}

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
