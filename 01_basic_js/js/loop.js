"use strict";

let num = 50;


// --------------- while 
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// --------------- DO
// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);


// --------------- FOR
// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }

    console.log(i);
}

