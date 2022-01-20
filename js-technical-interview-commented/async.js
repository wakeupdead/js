/**
 * Task: say in which order the digits will be printed.
 *
 * The order of execution is fairly simple:
 * log(1) and log(4) fire first because they're both synchronous
 * promise(3) fires next because it's a microtask which is executed in the same tick of event loop right after the
 * closest synchronous function.
 * timeout(3) fires the last one because it's a macrotask which is executed in the beginning of the next event loop tick.
 */
const log = console.log;
const timeout = (x) =>
    setTimeout(() => {
        log(x);
    });
const promise = (x) =>
    Promise.resolve(x).then((x) => {
        log(x);
    });

log(1);
timeout(2);
promise(3);
log(4);

// 1 4 3 2
