// Tipos primitivos = INMUTABLES
console.log(2, typeof 2);
console.log('Pepe', typeof 'Pepe');
console.log(true, typeof true, false, typeof false);
console.log(undefined, typeof undefined);
console.log(null, typeof null, 'Error: el tipo es null');
// Relativamente nuevos
console.log(Symbol(), typeof Symbol());
console.log(5n, typeof 5n);
// NO primitivos = referenciados = MUTABLES
console.log({}, typeof {});
console.log([], typeof []);
console.log(/[a-z]/, typeof /[a-z]/);
console.log(new Date(), typeof new Date());
console.log(new Error('Error').message, typeof new Error());
console.log(() => {}, typeof (() => {}));
