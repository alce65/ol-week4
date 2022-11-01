/* eslint-disable no-unused-vars */
// ReferenceError: foo is not defined
// console.log(foo);

let bar;
console.log(bar); // undefined

let age = null;

// Casting a booleans

// Falsy -> 8
console.log('Falsy');
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));

// Truly
console.log('Truly');
console.log(Boolean(true));
console.log(Boolean(23));
console.log(Boolean('Pepe'));
console.log(Boolean(Symbol()));
console.log(Boolean(23n));
console.log(Boolean({}));
console.log(Boolean([]));

let x = 2;
if (x) {
    console.log('Bien');
}

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(9_007_199_254_740_991n + 1n);

console.log(Number.MAX_VALUE * 2); // Infinity
console.log(Number.MAX_VALUE * -2); // - Infinity
console.log(0);
console.log(0 * -1); // -0
console.log(2 / 0); // Infinity
console.log(0 / 6); // 0
console.log(0 / 0); // NaN

// Casting
console.log(Number('22'));
console.log(Number('Pepe'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(''));
console.log(Number({}));
console.log(Number([]));
console.log(Number([4]));
console.log(Number([4, 5]));
