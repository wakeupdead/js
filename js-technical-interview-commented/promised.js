/**
 * Task:
 * 1. What is the difference between two Promise chains?
 * 2. What will be printed in console.log()?
 * 3. In what order will it be printed?
 *
 * Two promise chains differ in a way they handle callbacks in their first then() functions:
 * (1) is callback which in turn returns a Promise. It means that next then() (1') will wait for this promise to resolve.
 * It means that console.log() at (1') will fire with the value 1 after 1 second.
 * (2) is a callback which returns 'undefined', not a promise: the promise() function is invoked, but it's result is
 * discarded. So the console in (2') gets an 'undefined' almost immediately, as we are not waiting for the promise to
 * resolve. That is why console.log() in (2') will fire almost synchronously with an 'undefined' value.
 */
const promised = (x) =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve(x);
        }, 1000),
    );

Promise.resolve(1)
    .then((x) => promised(x)) // (1)
    .then(console.log); // (1')  1, in a second

Promise.resolve(2)
    .then((x) => {
        // (2)
        promised(x);
    })
    .then(console.log); // (2') undefined, almost synchronously
