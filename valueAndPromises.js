'use strict';
function attachTitle(result) {
    return `DR. `+ result;
}
/**
 * retrun output from attachTitle is printed using promise and then method.
 */
Promise.resolve(`MANHATTAN`)
.then(attachTitle)
.then(console.log);