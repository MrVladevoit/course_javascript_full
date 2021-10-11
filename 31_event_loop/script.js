'use strict';

// console.log(1);

// setTimeout(() => {
//     console.log('Timeout_2000');
// }, 4000);

// setTimeout(() => {
//     console.log('Timeout_4000');
// }, 4000);

// console.log(2);


// Practice
// 1e9 - 1 + 000000000

// let k = 0;

// function count() {
//     for(let i =0; i < 1e9; i++) {
//         k++;
//     }

//     alert('done');
// }

// count();

setTimeout(() => {
    console.log(1);
}, 0);

console.log(2);

// 2 , 1

// Ответы:
// 1 - Когда запускается setTimeout то он проходит черех ансихронную часть и записывает все в WebApis и идет в callback Queue. Поэтому сначала выполнится синхронный код.
// 2 - Если задать setTimeout 0 или 4, то он по дефолту выставит 4мл секунды.

