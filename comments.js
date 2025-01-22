// Create web server
// Load the file system module
var fs = require('fs');
var http = require('http');
// Create web server
http.createServer(function (req, res) {
    // Load the HTML file
    fs.readFile('comments.html', function(err, data) {
        // Send the HTTP header
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Send the response body
        res.write(data);
        res.end();
    });
}).listen(8080);
console.log('Server running at http://):8080/');