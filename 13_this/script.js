'use strict';

// 1) Обычная функция: this = window, но если будет use sctrict - undefined
// function showThis() {
//     console.log(this);
// }
// showThis();

// function showThis(a, b) {
//     console.log(this); // undefined
    
//     function sum() {
//         console.log(this); // undefined
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);

// 2) Контекст у методов объекта - сам объект 

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this); // obj
//     }
// };
// obj.sum();

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this); // undefined
//             shout();
//         }
//     }
// };
// obj.sum();


// 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello !" + this.name);
//     };
// }

// let ivan = new User('Ivan', 23);


// 4) Ручное привязка this: call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// Разница в синтаксисе передачи аргументов функции
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2); // 2 переходит в this и передается в double
// console.log(double(3)); // 2*3
// console.log(double(13)); // 2*13


const btn = document.querySelector('button');

//  this + function() = сам элемент, на котором произошло событие
btn.addEventListener('click', function(){
    console.log(this); // <button></button>
    this.style.backgroundColor = 'red';
});

// () =>  у стрелочной функции нет своего контекста вызова и поэтому он будет следовать своему родителю
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber(); // obj

const double = a => a * 2; // если ваше действие помещается в одну строку, то можно сократить код и использовать стрелочную функцию
console.log(double(4));

const calc = (a, b) => a + b;
console.log(calc(2,2));

// btn.addEventListener('click', () => { // undefined потому что стрелочная функция теряет контекст вызова
//     this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (e) => { // undefined потому что стрелочная функция теряет контекст вызова
    e.target.style.backgroundColor = 'blue';
});