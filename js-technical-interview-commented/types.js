/**
 * Task: say what will be printed in the console.log() and why
 *
 * typeof x prints 'function' because function is not a separate data type in JS, but rather a callable object;
 * to distinguish between objects and functions this synthetic 'type' was introduced.
 */
function x() {}
console.log(typeof x); // function
console.log(x instanceof Object); // true

/**
 * Task: say what will be printed in the console.log() and why
 *
 * str1 is of 'string' type (String function used directly as a type converter)
 * str2 has 'object' tyoe due to the usage of 'new' operator
 * Hence their types are different.
 */
var str1 = String(12345);
var str2 = new String(12345);
console.log(typeof str1 === typeof str2); // false

/**
 * Task: say what will be printed in the console.log() and why
 *
 * Sometimes type of the array is incorrectly stated as 'array'
 * But JS has no array type, so arrays are objects.
 */
var y = [];
console.log(typeof y); // object
