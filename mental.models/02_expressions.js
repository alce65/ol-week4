/* eslint-disable no-unused-vars */
// expressions

function foo(a) {
    //parámetros
    let x;
    console.log(x, a);
}

// ejecución
const a = 6;
foo(8); // argumentos (parámetros)
foo(6 + 2);
foo(a + 2);

const arr = [1, 2, 3];
let str = 'Hola';
console.log(arr[0]); // 1
console.log(str[0]); // h
arr[0] = 12;
console.log(arr); // 12,2,3
// str[0] = 'M'; //  Cannot assign to read only property '0' of string 'Hola'
str = 'Mola';
console.log(str);
