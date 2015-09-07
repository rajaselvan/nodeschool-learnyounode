/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Write a program that performs an HTTP GET request to a URL
 provided to you as the first command-line argument. Collect all data
 from the server (not just the first "data" event) and then write two
 ines to the console (stdout).
 The first line you write should just be an integer representing the
 number of characters received from the server. The second line should
 contain the complete String of characters sent by the server.
 */



if (process.argv.length > 2) {

    var http = require('http');
    var characterList = [];
    var url = process.argv[2];

    http.get(url, function (response) {


        response.setEncoding('utf8');

        response.on('data', function (data) {

            characterList.push(data);

        });

        response.on('end', function(){

            console.log(characterList.join("").length);
            console.log(characterList.join(""));

        });
    });
}

else {

    console.log("No url input!");

}