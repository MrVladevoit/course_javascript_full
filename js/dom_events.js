"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


console.dir(box); // -> выводим в консоль всю информацию ввиде объекта для этого элемента

// 1) Change Styless

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

const num = 500;
box.style.cssText = `background-color: blue; width: ${num}px;`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = ('red');

// 2)  Циклы

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

// 3) Работа с новыми элементами из JS на странице

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я'); - устарело, сейчас его не используют

div.classList.add('black');

// append - новый метод вставки элементов на страницу 
// Он вставляет в самый конце body - новый элемент  div
// document.body.append(div);

// Вставляет в самый конце wrapper - новый элемент  div
// wrapper.append(div);

// prepend - вставляет новый эелемент вначало другого элемента
// wrapper.prepend(div);

// Вставить перед элемента
// hearts[0].before(div);

// Вставить после элемента
// hearts[0].after(div);

// Удаление элементов
// circles[0].remove();

// Замена элементов
// hearts[0].replaceWith(circles[0]);

// 4) Устаревшие конструкции
// Вставка в конец родителя
// wrapper.appendChild(div);

// Вставка перед другим элементов
// wrapper.insertBefore(div, hearts[2]);

// Удаление
// wrapper.removeChild(hearts[1]);

// Замена
// wrapper.replaceChild(circles[0], hearts[1]);


// 5) Работа с текстом и атрибутами, содержимым div

// wrapper.append(div);
// div.innerHTML = "Hello World";
// div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";


// 6) Вставить кусок HTML кода перед элементом
wrapper.append(div);
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // Вставляет этот код перед элементом
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // Вставляет в начало внутри этого элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // Вставляет в конец внутри этого элемента
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // Вставляет после этого элемента

// 7) Другой способ получения элементов

const wrapperNew = document.querySelector('.wrapper'),
      heartsNew = wrapperNew .querySelectorAll('.heart'),
      oneHeartNew = wrapperNew .querySelector('.heart');