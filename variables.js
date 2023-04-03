/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable indent */

function foo() {
    if (true) {
        var a = 5;
    }
    console.log(a); // kiír: 5
}
foo();


function bar() {
    if (true) {
        let b = 10;
    }
    console.log(b);
}
bar();


const PI = 3.14159265359;
PI = 3; 
