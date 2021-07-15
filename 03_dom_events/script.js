"use strict";

const btn = document.querySelector("button"),
      overlay = document.querySelector(".overlay");


// Click event

// btn.onclick = function () {
//     alert("Click");
// };


// btn.onclick = function () {
//     alert("Second Click");
// };

// Обработчик события 
// btn.addEventListener('click', ()=> {
//     alert("Click");
// });

// btn.addEventListener('click', ()=> {
//     alert("Second Click");
// });

// btn.addEventListener('mouseover', ()=> {
//     console.log("Hover");
// });

// btn.addEventListener('mouseover', (e) => {
//     console.log(e.target);
//     // console.log("Hover");

//     e.target.remove();
// });

// let i = 0;

// const deleteElement = (e) => {
//     // e.target.remove();
//     console.log(e.target);
    
//     i++;
//     if(i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);


const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type)
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


// Link
const link = document.querySelector("a");

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});

// Работа с псевдомассивом
const btns = document.querySelectorAll("button"); // псевдомассив

// target.addEventListener(type, listener[, options]);

btns.forEach(btn =>{
    btn.addEventListener("click", deleteElement, {once: true});
});


