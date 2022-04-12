'use strict';
var promise = new Promise (function(fulfill,reject) {
    fulfill(`MAIN PROGRAM\nPROMISE VALUE`);
});
/**
 * At this point, the value of promise is already known
 * if promise is not always asynchronous,console.log would be called with 'PROMISE VALUE' here.
 */
promise.then(console.log,null);
