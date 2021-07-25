'use strict';

const box = document.querySelector('.box');

const width = box.clientWidth,
      height = box.clientHeight,
      offsetWidth = box.offsetWidth,
      offsetHeight = box.offsetHeight,
      scrollWidth = box.scrollWidth,
      scrollHeight = box.scrollHeight;

console.log(width, height); // 400 / 350
console.log(offsetWidth, offsetHeight); // 400 / 350 получает ширину с учетом полосы прокрутки и padding, margin
console.log(scrollWidth, scrollHeight); // 400 1298 - высота с учетом всех прокруток


const btn = document.querySelector('button');

btn.addEventListener('click',() => {
    // box.style.height = box.scrollHeight + 'px';

    console.log(box.scrollTop); // отобразит количество px, которое пользователь проскроллил 
});


console.log(box.getBoundingClientRect()); // получаем координаты нашего элемента на странице 
console.log(box.getBoundingClientRect().top); // 50 положение от верха страницы

// Получить все примененные стили к элементу
const style = window.getComputedStyle(box);
console.log(style.display); // block

console.log(document.documentElement.clientWidth); // получим ширину страницы
console.log(document.documentElement.scrollTop); // получим скролл страницы

window.scrollBy(0, 400); // x,y  от текущего положения проскроллит на 400px вниз
window.scrollTo(0, 400); // x,y  проскроллит от все страницы 400ox от верха 
