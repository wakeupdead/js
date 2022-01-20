/**
 * Task: say what will be printed in the console.log() and why
 *
 * (1) 'a' and 'b' are defined in the global scope and are attached to 'window' object.
 * In this case 'this' for 'b' is 'window' where 'a' equals 1.
 * This is called implicit this.
 * (2) When 'b1' is assigned for 'b' it becomes a method of an object.
 * Now for 'b1' 'this' equals to object 'm'. 'a' property is not defined on object 'm' hence result is 'undefined'.
 * (3) 'b2' is a method which return the result of invocation of function b().
 * As we figured out earlier this result equals 1. In this case 'this' for the function 'b' do not change because it is
 * lexically defined.
 * (4) 'b3' is an arrow function which do not have it's own 'this'. While 'b3' is not defined within another function
 * but rather in a global object it gets the global this - 'window'. Window has 'a' defined as 1.
 * (5) 'c' is a bound function, which is attached to a context where 'a' equals 2, so invocation of 'c' returns 2.
 * (6) 'd' is a result of an attempt to re-bind a bound function. This is prohibited because bound function can not
 * change its context. That is why result still equals 2.
 * (7) We can call a bound function 'c' as a constructor, the bound context will be discarded and a plain new object
 * returned.
 */
var a = 1;

function b() {
    return this.a;
}

var m = {
    b1: b,
    b2: function b2() {
        return b();
    },
    b3: () => {
        return this.a;
    },
};

var c = b.bind({ a: 2 });

var d = c.bind({ a: 3 });

var x = new c();

console.log(b()); // 1 (1)
console.log(m.b1()); // undefined (2)
console.log(m.b2()); // 1 (3)
console.log(m.b3()); // 1 (4)
console.log(c()); // 2 (5)
console.log(d()); // 2 (6)
console.log(x); // {} (7)
