'use strict';

const now = new Date();
console.log(now); // 2021-07-20T08:40:37.808Z system date & time

const nowSecond = new Date ('2021-07-20');
console.log(nowSecond); // 2021-07-20T00:00:00.000Z - записали свою дату

const nowThird = new Date (2021, 5, 1, 20);
console.log(nowThird); // 2021-06-01T17:00:00.000Z

const nowFourth = new Date (0);
console.log(nowFourth); // 1970-01-01T00:00:00.000Z - начало отсчета.

// Date  Methods
// const current = new Date();
// console.log(current.getFullYear()); // -> 2021
// console.log(current.getMonth()); // -> 6 - Jule
// console.log(current.getDate()); // -> 20 (20.07)
// console.log(current.getDay()); // -> day of week 2, started from sunday
// console.log(current.getUTCHours()); // -> получит время от 0 часового пояса 

// console.log(current.getTimezoneOffset()); // -> -180
// console.log(current.getTime()); // -> 1626770951886 - количество часов от начала отсчета 1970 года 

// Set Time
// const current = new Date(); // - > браузер будет ориентироваться на время установленное в системе
// console.log(current.setHours(18, 40)); // hour , minutes - > 18:40
// console.log(current.setHours(40)); // автоисправление -> будет 24ч + 16 , то есть следующий день + 16
// console.log(current);


// const current2 = new Date('2021-07-20');
// new Date.parse('2021-07-20');

let start = new Date();

for( let i = 0; i < 100000; i++) {
    let some = i ** 3; // возведение в степень 3 -> есть только в ES7
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);