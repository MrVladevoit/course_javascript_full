'use strict';

// const num = new Number(3);
// const num = new Function(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

// prototype - позволяет создать новый метод для конструктора User. 
// Это полезно, когда у нас нет доступа к конструктору

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
}

// New - создает новый объект, который уже не является функцией - это и есть конструктор 
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

// ES6 - В нем есть классы для создания функций-конструкторов. Классы появились в ES6, как синтаксических сахар.
