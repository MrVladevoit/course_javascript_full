"use strict";


let str = "some";
let strObj = new String(str);

// console.log(typeof(str)); // -> string - примитивный объект данных
// console.log(typeof(strObj)); // -> object - методы преобразуют строки в объекты и возвращают обратно строки

// console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

// const jonh = {
//     health: 100
// };

// Устаревший формат разрабатывания прототипов
// jonh.__proto__ = soldier; // - теперь мы установили прототипом Джона солдат
// console.log(jonh); // -> { health: 100 }
// console.log(jonh.armor); // -> 100 - Джон получил свойство из прототипа Soldier armor
// jonh.sayHello(); // -> Hello

// Новый формат разрабатывания прототипов
// Object.setPrototypeOf(jonh, soldier); 
// console.log(jonh); // -> { health: 100 }
// console.log(jonh.armor); // -> 100
// jonh.sayHello(); // -> Hello

// Как правильно работать с прототипами
const jonh = Object.create(soldier); // -> мы создаем новый объект jonh, который будет прототипом soldier
jonh.sayHello(); // -> Hello