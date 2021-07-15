"use strict";


// To String

// 1)
console.log(typeof(String(null))); // -> string
console.log(typeof(String(4))); // -> string

// 2)
console.log(typeof(5 + '')); // -> string при сложении со строкой, всегда будет строка - конкатинация 

// Example
const num = 5;
console.log("https://vk.com/catalog/" + num); // -> String https://vk.com/catalog/5

// Example
const fontSize = 26 + 'px';
console.log(fontSize); // -> 26px


// To Number

// 1) 
console.log(typeof(Number('4'))); // -> number

// 2) Унарный плюс
console.log(typeof(+'5')); // -> number

// 3)
console.log(typeof(parseInt("15px", 10))); // -> number

let answer = +prompt("Hello", "");

// To boolean

// 1)
// FALSE
    // 0 - false
    // '' - false пустая строка
    // null - false, пустой
    // undefined - false
    // NaN - false

let switcher = null;

if(switcher){
    console.log('Working...');
}

switcher = 1;

if(switcher){
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4'))); // -> boolean

// 3)
console.log(typeof(!!"4444")); // -> boolean