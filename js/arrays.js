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
// for (let value of arr) {
//     console.log(value);
// }

// arr[99] = 0;
// console.log(arr.length); // -> последний индекс + 1
// console.log(arr); // -> ошибка [ 1, 2, 3, 4, 6, 8, 10, <92 empty items>, 0 ]

// Метод FOR EACH
// МЕТОД = ФУНКЦИЯ

// Мы перебираем массив и можем к каждому элементу массива применить что-то (функцию). 
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

const str = prompt("", "");
const products = str.split(", "); // разделили строчку и получили массив элементов. Чтобы метод сработал, в строке элементы должны разделяться через запятую + пробел
// console.log(products); 
products.sort(); // отсоритировалось в алфавитном порядке, он всегда сортирует только массивы со строчными элементами
console.log(products.join('; ')); // сделали из строки массив с разделителем ; + пробел

const arrNums = [2, 13, 25, 8, 10];
arrNums.sort(); // [ 10, 13, 2, 25, 8 ]
arrNums.sort(compareNum); // [ 2, 8, 10, 13, 25 ]
console.log(arrNums);

function compareNum(a, b) {
    return a - b;
}

// Псевдомассивы
// У псевдомассивов нет методов - они нужны только для хранения данных