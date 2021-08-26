'use strict';

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// ALL - принимает массив с промисами. Ждет окончание всех промиссов и только потом, что-то выполняет. 
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Race (перев. гонка) - какой-то из промиссов выполнится первым и таким образом запускается следующая операция. 
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});