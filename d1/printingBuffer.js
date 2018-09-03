function getAndPrintHTML () {

	var https = require('https');
	var data = '';
	var readStream = https.createReadStream('printingChunks');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  readStream.setEncoding('UTF8');
  readStream.on('data', function(chunk) {
  	data += chunk
  });

  readStream.on('end', function() {
  	console.log(getAndPrintHTML(data));
  });

  readerStream.on('error', function(err) {
  	console.log(getAndPrintHTML((err.stack);
  });

console.log(getAndPrintHTML(("program Ended"))

	// https.request(options, callback).end()


}



	var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

 https.get(requestOptions, function(response){
 response.setEncoding('utf8');

 response.on('data', function(data){
 	console.log('Chunk Received. Length:', data.length);
 });

 response.on('end', function() {
 	console.log('response stream complete');
 });
 
});