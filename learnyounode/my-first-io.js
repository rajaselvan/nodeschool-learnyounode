/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Write a program that uses a single synchronous filesystem operation
 to read a file and print the number of newlines (\n) it contains to the console (stdout),
 similar to running cat file | wc -l.
 */



if (process.argv.length > 2) {

    var fs = require('fs');

    var fileContent = fs.readFileSync(process.argv[2], 'utf8');

    var numberOfLines = fileContent.split("\n").length - 1;

    console.log(numberOfLines);
}
else {
    console.log("No file input!");
}