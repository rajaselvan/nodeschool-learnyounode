/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Write an HTTP server that receives only POST requests and converts
 incoming POST body characters to upper-case and returns it to the client.
 Your server should listen on the port provided by the first argument to your program.
 */


if (process.argv.length > 2) {

    var http = require('http');
    var port = Number(process.argv[2]);
    var map = require('through2-map');

    var server = http.createServer(function (req, res) {

        if (req.method != 'POST') {

            return res.end('I respond only to POST\n');

        }

        req.pipe(map(function (chunk) {

            return chunk.toString().toUpperCase();

        })).pipe(res);
    });


    server.listen(port);
}
else {

    console.log("No port specified!");

}