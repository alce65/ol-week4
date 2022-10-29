/* eslint-disable no-unused-vars */
{
    let pet;
    const owner = 'Pepe';
    pet = 'Rufo';
    // owner = 'Juan' Error
    let user = 'Pepe';
}

{
    let answer = true;
    // TypeError: Cannot create property 'oposite' on boolean 'true'
    // answer.oposite = false;
    console.log(answer);
}

{
    let user = null;
    // TypeError: Cannot set properties of null (setting 'chief')
    // user.chief = 'No null';
    console.log(user);
}

{
    let user = 'Pepe';
    // TypeError: Cannot create property 'chief' on string 'Pepe'
    // user.chief = 'Ernesto';
    console.log(user.toLocaleUpperCase());
    console.log(user.length);
    // string, number, boolean
    // -> casting String, Number y Boolean (wrapper objects)
}

{
    // Casting
    let x = '22';
    let y = 2;
    console.log(x / y);
    console.log(x, typeof x);

    console.log(Number(x) + y);
    console.log(+x + y);
}
{
    let x = new Number(33);
    console.log(typeof x, x.valueOf());
}
