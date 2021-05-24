"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    // Создаем свой метод
    makeTest: function() {
        console.log("Test");
    }
};

// console.log(options.name); // -> test
// console.log(options['colors'].border); // -> black

// DELETE
// delete options.name; // -> удалил из объекта name
// console.log(options);

// // Перебор данных с помощью FOR
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);

//     // IN CONSOLE
//     // Свойство name имеет значение test
//     // Свойство width имеет значение 1024
//     // Свойство height имеет значение 1024
//     // Свойство colors имеет значение [object Object]
// }


// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }

//     // Свойство name имеет значение test
//     // Свойство width имеет значение 1024
//     // Свойство height имеет значение 1024
//     // Свойство border имеет значение black
//     // Свойство bg имеет значение red
// }

// Прием счетчика

// let counter = 0;

// for (let key in options) {
//     // if(typeof(options[key]) === 'object') {
//     //     for (let i in options[key]) {
//     //         console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     //         counter++;
//     //     }
//     // } else {
//     //     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     // }
// }

// console.log(counter); // 4

// Прием счетчика с помощью метода
// console.log(Object.keys(options)); // получаем масив со всеми ключами [ 'name', 'width', 'height', 'colors' ]
// console.log(Object.keys(options).length); // -> 4


// Создаем свой метод в объекте
// options.makeTest(); // -> TEST

// Деструктуризация объекта В ES6 
const {border, bg} = options.colors;
console.log(border); // black