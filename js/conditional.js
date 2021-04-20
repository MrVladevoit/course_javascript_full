"use strict";

// if(4 == 9) {
//     console.log('ok!');
// } else {
//     console.log('error');
// }

const num = 50;

if(num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('A lot !');
} else {
    console.log('Ok!');
}

// Тернарный опператор 
(num === 50) ? console.log('Ok!') : console.log('Error');

// Бинарный аргумент 4 + 4
// Унарный аргумент +'4';


// Switch
switch (num) {
    case 49:
        console.log('Wrong');
        break;
    case 100: 
        console.log('Wrong');
        break;
    case 50: 
        console.log('Okkkk!');
        break;
    default:
        console.log('Not now!');
        break;
        
}