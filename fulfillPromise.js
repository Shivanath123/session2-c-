'use strict';
// create a promise
var promise = new Promise(function (fulfill, reject) {
    fulfill('FULFILLED!');
    reject('Error');
});
setTimeout(Promise,300);
/**
 * After the timeout reaches 300ms, fulfill the promise with value 'FULFILLED!'.
 * Add a handler to promise's fulfillment, 'console.log' will called with the value passed to 'fulfill', which is `'FULFILLED!'`.
 * note that this statement will ALWAYS be executed before 'fulfill' is called.
 */
promise.then(
    function(value) {console.log(value);},
    function(error) {console.log(error)}
);