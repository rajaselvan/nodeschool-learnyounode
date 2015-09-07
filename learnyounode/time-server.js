/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Write a TCP time server!
 Your server should listen to TCP connections on the port
 provided by the first argument to your program. For each connection
 you must write the current date & 24 hour time in the format:
 "YYYY-MM-DD hh:mm"  followed by a newline character.
 Month, day, hour and minute must be zero-filled to 2 integers.
 For example: "2013-07-06 17:42"
 */


if (process.argv.length > 2) {

    var net = require('net');
    var port = Number(process.argv[2]);

    var server = net.createServer(function (socket) {

        var today = new Date().toISOString();
        socket.end(today.slice(0, 10) + " " + today.slice(11, 16) + "\n");

    });

    server.listen(port);

}
else {

    console.log("No port specified!");

}
