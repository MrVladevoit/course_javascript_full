"use strict";

const arr = [1, 2, 3, 4, 6, 8];

// arr.pop(); // удаляет последний элемент
arr.push(10); // добавляет новый эелемнт в конце массива

// console.log(arr);

// Перебор массива
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Перебор значений массива
for (let value of arr) {
    console.log(value);
}

// arr[99] = 0;
// console.log(arr.length); // -> последний индекс + 1
// console.log(arr); // -> ошибка [ 1, 2, 3, 4, 6, 8, 10, <92 empty items>, 0 ]

// Метод FOR EACH
// МЕТОД = ФУНКЦИЯ

// Мы перебираем массив и можем к каждому элементу массива применить что-то (функцию). 
arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
