/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Create a program that prints a list of files in a given directory,
 filtered by the extension of the files. You will be provided a directory
 name as the first argument to your program (e.g. '/path/to/dir/') and a file
 extension to filter by as the second argument.
 For example, if you get 'txt' as the second argument then you will need to
 filter the list to only files that end with .txt. Note that the second argument
 will not come prefixed with a '.'.
 The list of files should be printed to the console, one file per line.
 You must use asynchronous I/O.
 */



if (process.argv.length > 2) {

    var fs = require('fs');
    var path = require('path');
    var filePath = process.argv[2];
    var extension = "." + process.argv[3];

    fs.readdir(filePath, function (err, data) {
        if (err) {
            return console.error(err);
        }

        data.forEach(function(item) {
            if (path.extname(item) === extension) {
                console.log(item);
            }
        });
    });
}
else {
    console.log("No file input!");
}