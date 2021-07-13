"use strict";

// ------------- Properties

// const str = "test";
// const arr = [1, 3 ,4];

// console.log(str.length); // получить длинну строки 4
// console.log(arr.length); // получим количество элементов в массиве 3

// console.dir(Number); // можно раскрыть объект в браузере и узнать ве его свойства и методы

// console.log(str[2]); // -> можно получить 3ю по проядку букву S

// ------------- Methods

// ------------- String

const str = "Test";

console.log(str.toUpperCase()); // превращает строку в верхний регистр
console.log(str.toLocaleLowerCase()); // превращает строку в нижний регистр
console.log(str);

const fruit = "Some fruit";

// Поиск подстроки
console.log(fruit.indexOf("fruit")); // 5
console.log(fruit.indexOf("q")); // -1 - обозначает, что мы не нашли данный символ в строке

const logg = "Hello world";

// slice
console.log(logg.slice(6, 10)); // worl (начало строки, конец строки)
console.log(logg.slice(6, 11)); // world -> slice с какой части строки, нам нужно возвращать что-то
console.log(logg.slice(6)); // world (начало строки)
console.log(logg.slice(-5, -1)); // worl с конца в начало

// substring
console.log(logg.substring(6, 11)); // принимает аргументы старт и конец, он не поддерживает отрицательные значения, похож на slice

// substr
console.log(logg.substr(6, 5)); // Мы указываем длинну , сколько символов нужно вырезать (начало символа, количество символов)

// ------------- Numbers

const num = 12.2;
console.log(Math.round(num)); // Число округлилось до ближайшего целого 

const test = "12.2px";
console.log(parseInt(test)); // -> 12 метод превращает число в другое числовое измерение 
console.log(parseFloat(test)); // -> 12.2 вернет числовое значение в десятичной системе
