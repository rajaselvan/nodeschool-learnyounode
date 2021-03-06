/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Write an HTTP server that serves JSON data when it receives a GET request
 to the path '/api/parsetime'. Expect the request to contain a query string with
 a key 'iso' and an ISO-format time as the value.
 For example:
 /api/parsetime?iso=2013-08-10T12:10:15.474Z
 The JSON response should contain only 'hour', 'minute' and 'second' properties.
 For example:
 {
 "hour": 14,
 "minute": 23,
 "second": 15
 }
 Add second endpoint for the path '/api/unixtime' which accepts the same
 query string but returns UNIX epoch time in milliseconds (the number of milliseconds
 since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
 For example:
 { "unixtime": 1376136615474 }
 Your server should listen on the port provided by the first argument to your program.
 */



if (process.argv.length > 2) {

    var http = require('http');
    var url = require('url');
    var port = Number(process.argv[2]);

    var server = http.createServer(function (req, res) {

        var requestedUrl = url.parse(req.url, true);
        var param = requestedUrl.query.iso;
        var responseData;

        if (/^\/api\/parsetime/.test(req.url)) {

            var dateForRequest1 = new Date(param);
            responseData = {
                "hour": dateForRequest1.getHours(),
                "minute": dateForRequest1.getMinutes(),
                "second": dateForRequest1.getSeconds()
            };

        }

        else if (/^\/api\/unixtime/.test(req.url)) {

            var dateForRequest2 = new Date(param);
            responseData = {
                "unixtime": dateForRequest2.getTime()
            };

        }

        res.writeHead(200, {'Content-Type': 'application/json'});

        res.end(JSON.stringify(responseData));

    });

    server.listen(port);

}
else {

    console.log("No port specified!");

}