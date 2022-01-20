/**
 * Task: say what will be printed in the console.log() and why
 *
 * 'i' and 'a' are defined globally in this snippet.
 * (1) When first IIFE is executed it affects both global 'i' and 'a' as they're not defined inside function scope.
 * (2) When the second IIFE is executed it only affects the object 'a' content because primitive value ('i') is passed by value,
 * while 'a' is passed by reference. 'i' in the function arguments list shadows the global 'i' which remains unaffected.
 */
var i = 1;
var a = {};

(function () {
    i++;
    a.j = 1;
})();
console.log(i, a); // 2, { j: 1 } (1)

(function (i, a) {
    i++;
    a.k = 1;
})(i, a);
console.log(i, a); // 2, { j: 1, k: 1 } (2)
