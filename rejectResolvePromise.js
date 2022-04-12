'use strict';
// create a variable promise
// create a constructor Promise
let promise = new Promise (function (fulfill,reject) {
    fulfill("I FIRED");
    /**
     * reject the promise with an 'Error' object with parameter '"I DID NOT FIRE"'.
     */
    reject(new Error("I DID NOT FIRE"));
});
/**
 * create a function to print 'error.message' using 'console.log'.
 */
function onRejected (error) {
    console.log(error.message);
}
/**
 * Pass this function as rejection handler to the 'then' method of the promise.
 */
promise.then(console.log, onRejected);