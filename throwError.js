'use strict';
function parsePromised(json) {
    return new Promise(function (fulfill, reject) {
      try {
        /** Block of code to try */
        fulfill(JSON.parse(json));
      } catch (e) {
        /** block of code to handle error */
        reject(e);
      }
    });
  }
function onReject(error) {
    console.log(error.message);
  }
  parsePromised(process.argv[2])
  .then(null,onReject);