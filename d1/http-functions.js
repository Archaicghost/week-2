var https = require('https');
var data = '';

module.exports = function getHTML (options, callback) {

	https.get(options, function(response) {

  response.setEncoding('UTF8');

  response.on('data', function(chunk) {
  	data += chunk;
  });

  response.on('end', function() {
  	callback(data);
  });

  response.on('error', function(err) {
  	console.log(err.stack);
  
  });
});
};


function printHTML(html) {
  console.log(html);
}