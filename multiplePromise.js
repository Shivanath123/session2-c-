'use strict';
/**
* declaring two promises in all function as arguments.
*/
function all(promise1, promise2) {
    var counter = 0;
    var array = [];
    return new Promise(function (fulfill,reject) {
        promise1.then(val => {
            array[0] = val;
            counter++;

            if (counter>=2){
                fulfill(array);
            }
        });

        promise2.then(val =>{
            array[1] = val;
            counter++;

            if (counter>=2){
                fulfill(array);
            }
        });
    });
}
all(getPromise1(), getPromise2())
.then(console.log);
