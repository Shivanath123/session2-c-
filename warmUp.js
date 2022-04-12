function setUp() {
    let value = "TIMED OUT!";
    console.log(value);
}
/**
 *  by using setTimeout() method setting a timeout of 300ms
 * after 300ms has elapsed, console.log will print the 'TIMED OUT!'
 */
setTimeout(setUp, 300);