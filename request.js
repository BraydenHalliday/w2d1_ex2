var request = require('request');
var fs = require('fs');


request.get('https://sytantris.github.io/http-examples')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode, 'Response Status Message: ', response.statusMessage, 'Response content type: ', response.headers['content-type'])
        })
       .pipe(fs.createWriteStream('./future.jpg'));