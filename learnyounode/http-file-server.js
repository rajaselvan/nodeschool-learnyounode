/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Write an HTTP server that serves the same text file for each request it receives.
 Your server should listen on the port provided by the first argument to your program.
 You will be provided with the location of the file to serve as the second command-line
 argument. You must use the fs.createReadStream() method to stream the file contents to
 the response.
 */


if (process.argv.length > 2) {

    var http = require('http');
    var fs = require('fs');
    var port = Number(process.argv[2]);
    var filePath = process.argv[3];
    var fileStream = fs.createReadStream(filePath);

    var server = http.createServer(function (req, res) {

        fileStream.pipe(res);

    });

    server.listen(port);

}
else {

    console.log("No port specified!");

}