'use strict';

const app = '123';

// 1) Анонимная самовызывающая функция 
// Function expretion может не иметь имени

const number = 1;

// Мы создали модуль со своей зоной видимости
(function() {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

// 2) Модуль запиываем в переменную 

const user = (function(){
    const privat = function() {
        console.log('I am privat');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();
