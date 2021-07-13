"use strict";

// Functions 
// function showFirstMessage() {
//     console.log('Hello World');
// }

// showFirstMessage();

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20; // - это локальная переменная, которая не доступна вне функции
// }

// showFirstMessage('Hi!');

// let num = 20; // глобальная переменная 

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10; // Переменная перезаписывает глобальную переменную 
//     // let num = 10; / -> локально объявленая переменная, которая не отработает в console.log
// }

// showFirstMessage('Hi!');
// console.log(num);


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hi!');
// console.log(num);

// -------------- calculator

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// -------------- ret
function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// -------------- Function Expression
const logger = function() {
    console.log("Hello");
};

logger();

// -------------- Стрелочные функции
const calc = (a, b) => { return a + b };