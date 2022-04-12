var url = require('q-io/http');
/**
 * read() enables you to read the content of a File object into memory.
 */
url.read("http://localhost:7000")

.then(function (id) {
    return url.read("http://localhost:7001/" + id)
})
.then(function (json) {
    console.log(JSON.parse(json));
})
.then(null,console.error)
.done()
