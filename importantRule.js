'use strict';
function alwaysThrows (resolve,reject) {
    throw(new Error(`OH NOES`));
}
function iterate (int) {
    console.log(int);
    return int + 1;
}
function onReject (error) {
    console.log(error.message);
}
Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
/**
 * after alwaysThrows method it stop executing the remaining blocks for iteration.
 */
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(onReject);