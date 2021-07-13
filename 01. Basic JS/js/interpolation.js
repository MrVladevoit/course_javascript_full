"use strict";

// console.log('arr' + ' - object');
// console.log(4 + ' - object');
// console.log(4 + +' - object'); // error
// console.log(4 + +'5'); // 5 - плюсик - это унарный плюс

// инкремент
// декримент

let incr = 10,
    decr = 10;


// префиксная запись
// ++incr; // оппертор инкремента  --> 11
// --decr; // оппертор декримента  --> 9

// префиксная запись сначала возвращает старую запись, а только потом уже изменяет значение. 
// Это причина по которой в console.log она возвращает 10
// console.log(incr++); // --> 10 
// console.log(decr--); // --> 10

// постфиксная запись
// incr++; // оппертор инкремента  --> 11
// decr--; // оппертор декримента --> 9

console.log(++incr); // --> 11 
console.log(--decr); // --> 19


console.log(5%2); // => возвравщает остаток от деления 2х чисел -> 1

// = - это оператор присваивания
// == - если нам нужно, что-то сравнить
// === - строгое равенство, которое сравнивает значения еще по типу

console.log(2*4 == 8); // true

console.log(2*4 == '8'); // тоже true

console.log(2*4 === '8'); // false
console.log(2*4 === 8); // false

// && - и , работает только когда оба подобных выражения правдивы
// || - или

// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose); // true

// const isChecked = true,
//       isClose = false;

// // console.log(isChecked && isClose); // false один из вариантов не правдив(false)
// console.log(isChecked || isClose); // true

// const isChecked = false,
//       isClose = false;

// // Оба покажут false, потому что оба значения в переменных false
// console.log(isChecked && isClose); // false
// console.log(isChecked || isClose); // false

// Оператор отрицания !
const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose); // true

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
console.log(2 + 2 * 2 === 8); // false

// != - не равен
// !== - строгое сравнение по типу
console.log(2 + 2 * 2 != 8); // true
console.log(2 + 2 * 2 != 6); // false



