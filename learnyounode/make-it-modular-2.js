/**
 * Created by rajaselvan on 9/7/15.
 */

var fs = require('fs');
var path = require('path');

module.exports = function (filePath, extension, myCallback) {

    fs.readdir(filePath, function (err, data) {

        if (err) {

            return myCallback(err);

        }
        data = data.filter(function (value) {

            return path.extname(value) === "." + extension;

        });

        myCallback(null, data);
    });
};