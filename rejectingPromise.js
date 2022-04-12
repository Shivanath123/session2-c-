'use strict';
// create a promise
var promise = new Promise(function (fulfill,reject) {
    /**
     * After the timeout reaches 300ms, reject the promise with an 'Error' object with parameter '"REJECTED!"'
     */
    setTimeout(() =>reject(new Error("REJECTED!")),300);
});
/**
 * create a function to print 'error.message' using 'console.log'.
 */
function onReject (error) {
    console.log(error.message);
}
/**
 * Pass this function as rejection handler to the 'then' method of the promise.
 */
promise.then(null, onReject);