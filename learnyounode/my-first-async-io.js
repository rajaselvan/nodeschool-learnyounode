/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Write a program that uses a single asynchronous filesystem operation
 to read a file and print the number of newlines it contains to the console
 (stdout), similar to running cat file | wc -l.
 */



if(process.argv.length>2) {

    var fs = require('fs');

    fs.readFile(process.argv[2], 'utf8', function (err, data) {

        if (err) {

            return console.error(err);

        }

            var numOfLines = data.split("\n").length - 1;

            console.log(numOfLines);


    });
}
else{
    console.log("No file input!");
}