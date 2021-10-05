'use strict';

// 1) Example error

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('Result');
// } catch(error) {
//     console.log(error.name); // ReferenceError
//     console.log(error.message); // a is not defined
//     console.log(error.stack); // ReferenceError: a is not defined at script.js:5
// }

// console.log('Still normal');


// 2) Finally

// try {
//     console.log('Normal');
//     console.log(a);
//     console.log('Result');
// } catch(error) {
//     console.log(error.name); // ReferenceError
//     console.log(error.message); // a is not defined
//     console.log(error.stack); // ReferenceError: a is not defined at script.js:5
// } finally {
    
// }

// console.log('Still normal');

// 3) Button error

try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e);
}

console.log('Normal');

