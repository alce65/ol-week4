console.log(Object.is(2, 2));
console.log(Object.is(2, 3));
console.log(Object.is(NaN, NaN)); // True
console.log(Object.is(0, -0)); // False
console.log(Object.is({}, {}));
const a = {};
const b = a;
console.log(Object.is(a, b));
console.log(Object.is([], []));
console.log(
    Object.is(
        () => {},
        () => {}
    )
);
const foo = () => {};
const bar = foo;
console.log(Object.is(foo, bar));
///
// ===

// eslint-disable-next-line use-isnan
console.log(NaN === NaN); // False
// eslint-disable-next-line no-compare-neg-zero
console.log(0 === -0); // True
// eslint-disable-next-line no-compare-neg-zero
console.log(-0 === 0); // True

console.log('Uso de isNaN');
console.log(isNaN('Pepe')); // true
console.log(Number.isNaN('Pepe')); // false
