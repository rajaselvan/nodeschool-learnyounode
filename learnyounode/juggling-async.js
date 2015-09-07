/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 This problem is the same as the previous problem (HTTP COLLECT)
 in that you need to use http.get(). However, this time you will
 be provided with three URLs as the first three command-line arguments.
 You must collect the complete content provided to you by each of the
 URLs and print it to the console (stdout). You don't need to print out
 the length, just the data as a String; one line per URL. The catch is that
 you must print them out in the same order as the URLs are provided to you
 as command-line arguments.
 */


if (process.argv.length > 2) {

    var http = require('http');
    var counter = 3;
    var url1 = process.argv[2];
    var url2 = process.argv[3];
    var url3 = process.argv[4];
    var string1 = [];
    var string2 = [];
    var string3 = [];


    http.get(url1, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            string1.push(data);
        });

        response.on('end', function () {
            counter--;
            printResult();
        });

    });

    http.get(url2, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            string2.push(data);
        });

        response.on('end', function () {
            counter--;
            printResult();
        });

    });

    http.get(url3, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            string3.push(data);
        });

        response.on('end', function () {
            counter--;
            printResult();
        });

    });


    function printResult() {

        if (!counter) {

            console.log(string1.join(""));
            console.log(string2.join(""));
            console.log(string3.join(""));
        }
    }
}
else {
    console.log("No url inputs!");
}
