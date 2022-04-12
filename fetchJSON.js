var url = require('q-io/http');
url.read("http://localhost:1337")

.then(function (json) {
    console.log(JSON.parse(json));
})
/**
 * console.error method output an error message to wed console.
 */
.then(null,console.error)
.done()
