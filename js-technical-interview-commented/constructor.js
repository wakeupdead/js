/**
 * Task: say what will be printed in the console.log() and why
 *
 * (1) We use 'A' as a constructor and add 'a' property to 'this'. It creates a new object and copies the 'a' property
 * there.
 * (2) Function 'B' returns an object and that is why, when used as a constructor, this very object is returned.
 * (3) Function 'C' returns a primitive value, which is discarded when using it as a constructor, which results in
 * an empty object.
 */

function A() {
    this.a = 1;
}

var a = new A();

console.log(a); // { a: 1 } (1)

function B() {
    this.b = 2;
    return {
        x: 1,
    };
}

var b = new B();

console.log(b); // { x: 1 } (2)

function C() {
    var c = 3;
    return c;
}

var c = new C();

console.log(c); // {}
