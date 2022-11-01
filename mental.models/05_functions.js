/* eslint-disable no-unused-vars */

// Crear por Declaración: function

function foo() {
    return 'Hola soy foo y pertenezco';
}

// Invocación, ejecución, run
console.log(foo()); // Hola
// Paso de la función como argumento
console.log(foo);
foo.user = 'Pepe';
console.log(foo);
console.log(foo.user);
// foo.bind()

// Crear por asignación

const o = {};
const bar = function () {
    return 'Hola soy bar';
};

console.log(bar());
console.log(bar);

// Crear por asignación + arrow functions

const zap = () => {
    console.log('Hola soy arrow zap');
};

setTimeout(zap, 1000);

setTimeout(() => console.log('Hola de nuevo'), 1000);

// bees === peas;
// bees !== knees;
// peas !== knees;

let banana = (function () {
    return 2 + 2;
})();

// IIFE
(function () {
    // gestión de la web
})();
