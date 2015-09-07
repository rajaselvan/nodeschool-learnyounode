/**
 * Created by rajaselvan on 9/7/15.
 */
/*
 Write a program that accepts one or more numbers as command-line arguments
 and prints the sum of those numbers to the console (stdout).
 */

var sum = 0;

if (process.argv.length > 2) {
    for (var i = 2; i < process.argv.length; i++) {
        sum += Number(process.argv[i]);
    }

    console.log(sum);
}
else {
    console.log("No command-line arguments!");
}