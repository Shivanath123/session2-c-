'use strict';
/**
 * create a promise and constructor
 */
var promise = new Promise(function (fulfill, reject) {
    fulfill('SECRET value');
    reject(new Error('THERE IS AN ERROR!!!'));
});
/**
 * using resolve method and reject menthod to change the value.
 */
var promise = Promise.resolve('SECRET VALUE!!!');
var promise = Promise.reject(new Error('THERE IS AN ERROR!'));
/**
 * using catch method instead of then method 
 */
promise.catch(function (error) {
        console.log('THERE IS AN ERROR!!!');
        console.log(error.message);
    }
);
