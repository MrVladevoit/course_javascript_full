'use strict';

// Геттеры - получать какие-то свойства
// Сеттеры - присваивать какие-то свойства

const persone = {
    name: 'Alex',
    age: 25,

    // getter
    get userAge() {
        return this.age;
    },

    // setter
    set userAge(num) {
        this.age = num;
    }
};

persone.userAge = 30; // присвоили новое значение
console.log(persone.userAge); // получили свойство объекта
