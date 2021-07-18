"use strict";

// classList
const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length); // узнать сколько классов у элемента есть
// console.log(btns[0].classList.item(0)); // получим первый класс у элемента blue
// console.log(btns[0].classList.add("red", "treeee")); // добавить класс red
// console.log(btns[0].classList.remove("blue")); // удалить класс blue
// console.log(btns[0].classList.toggle("blue")); // если класс есть, то он его удалит, а если нет, то добавит

// console.log(btns[1].classList.add("red"));

// проверка наличия класса 
// if(btns[1].classList.contains('red')) {
//     console.log("red");
// }

// btns[0].addEventListener("click", () => {

//     if(!btns[1].classList.contains("red")) {
//         btns[1].classList.add("red");
//     } else {
//         btns[1].classList.remove("red");
//     }
// });

// btns[0].addEventListener("click", () => {
//     btns[1].classList.toggle("red");
// });

// className - устарело  и не нужно использовать в проектах
// console.log(btns[0].className);

// Делегирование событий

const wrapper = document.querySelector(".btn-block");

// wrapper.addEventListener("click", (e) => {
//     if (e.target && e.target.tagName == "BUTTON") {
//         console.log("Hello");
//     }
// });

// Деллегируем событие через родителя на потомки
// wrapper.addEventListener("click", (e) => {
//     if (e.target && e.target.classList.contains('blue')) {
//         console.log("Hello");
//     }
// });

// btns.forEach(btn => {
//     btn.addEventListener("click", ()=> {
//         console.log("Hello");
//     });
// });

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

wrapper.addEventListener("click", (e) => {
    if (e.target && e.target.matches("button.red")) {
        console.log("Hello");
    }
});
