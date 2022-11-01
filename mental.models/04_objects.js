/* eslint-disable no-unused-vars */
{
    const a = 4;
    const b = 4;
    const obj1 = {}; // una instancia
    const obj2 = {}; // otra instancia

    // Notación objetos
    obj1.user = 'Pepe';
    console.log('obj1', obj1);

    const obj3 = { user: 'Ernesto' }; // Notación JSON
    obj1.user = 'Jose';
    obj1.age = 33;
    console.log('obj1', obj1);
    delete obj1.age;
    console.log('obj1', obj1);
    // obj1 = {} Error porque es const
}

// Notación []

const obj3 = { user: 'Ernesto', age: 26 };
//
const property = 'age';
console.log(obj3[property]);

// for (const key in object) {
//     const element = object[key];
// }

// Convertir en inmutable
Object.freeze(obj3);
