'use strict';


// new RegExp('pattern', 'flags'); - Создание регулярного выражение - его никто не использует
// /pattern/flags - этот синтаксис все используют

// const ans = prompt('Введите ваше имя');

// Найти все n
// const reg = /n/ig;

//  const reg = /n/ig; - ["N", "N", "N", "N"]

// flags - i(регистр) , g(глобал), m(многострочный режим)

// console.log(ans.search(reg)); // индекс найденого символа
// console.log(ans.match(reg)); // получаем массив

// Replace + Reg
// const pass = prompt('Password');
// console.log(pass.replace(/./g, '*')); // . - все элементы в строке и заменим на ***** 
// console.log('12-34-56'.replace(/-/g, ':'));

// Method test

// const ans = prompt('Введите ваше имя');
// const reg = /n/ig;
// console.log(reg.test(ans)); // он вернет true/false

// \d - цифры
// \w - слова и символы
// \s - искать пробелы

// const ans = prompt('Введите ваше число');
// const reg = /\d/ig;
// console.log(ans.match(reg)); // он вернет true/false

const str = 'My name is R2D2';
// console.log(str.match(/\w\d\w\d/i));

// Обратный поиск
// \D - не числа
// \W - не буквы
console.log(str.match(/\W/i)); // не буквы (найдет space)