/**
 * Task: say what will be printed in the console.log() and why
 *
 * Strings in JS are greedy: when one operand in '+' operation is a string, it turns addition into concatenation.
 * Resulting type of this operation is always a string.
 */
var a = 1 + 2 + 3 + '';
var b = '' + 1 + 2 + 3;
console.log(a); // '6'
console.log(b); // '123'

/**
 * Task: say what will be printed in the console.log() and why
 *
 * When Number() is used to convert a string to a number it tries to parse the whole string.
 * If the string contains non-numeric symbols then NaN is returned.
 * On the contrary, parseInt() tries to parse a string until it gets a non-numeric symbol and then returns
 * all preceeding ones as a string.
 */
var c = '123x';
console.log(Number(c)); // NaN
console.log(parseInt(c, 10)); // 123

/**
 * Task: say what will be printed in the console.log() and why
 *
 * An empty array is still an object with non-null reference, and objects are always 'true' in JS, so the first
 * console.log() will fire.
 */
var d = [];
if (d) {
    console.log(1); // *1 <- will fire
} else {
    // or
    console.log(2); // *2
}
