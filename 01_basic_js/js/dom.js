"use strict";

// Get elements from document

// 1) By Id
const box = document.getElementById('box');
console.log(box);

// 2) By Tag
const btns = document.getElementsByTagName('button');
// btns - это псевдомассив HTMLCollection, в который попали 5 кнопок
console.log(btns); // -> HTMLCollection(5) [button, button, button, button, button]

const btnSecond = document.getElementsByTagName('button')[1];
console.log(btnSecond);

console.log(btns[3]); // -> Third button from DOM


// 3) By CSS Classess
const circles = document.getElementsByClassName('circle');
console.log(circles); // -> HTMLCollection(3) [div.circle, div.circle, div.circle]


// 4) New Ways querySelectorAll and querySelector

// 4.1) querySelectorAll
const hearts = document.querySelectorAll('.heart');
console.log(hearts); // NodeList(3) [div.heart, div.heart, div.heart]

// querySelectorAll включает в себя метод forEach
hearts.forEach(item => {
    console.log(item);
});

// 4.2) querySelector позволяет получить только один элемент со страницы. 
// Получает первый элемент.
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const oneButton = document.querySelector('button');
console.log(oneButton);

const oneDiv = document.querySelector('div');
console.log(oneDiv);