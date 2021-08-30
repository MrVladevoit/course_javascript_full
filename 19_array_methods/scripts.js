'use strict';

// forEach - просто перебирает какой-то массив и не возвращает новый.

// filter - фльтрует элементы внутри массива
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// получить имена < 5 символов
const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);

// map - позволяет изменить элементы внутри массива.
const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => item.toLocaleLowerCase());
console.log(result);

// every/some - возвращают булиновое значение
// every - если все элементы массива подходят по условие, то только в этом случае он вернет true
// some - возвращает ответ true при условии, если в массиве один из элементов подходит под условие
const someArray = [4, 'qwq', 'sfwesfsf'];
console.log(someArray.some(item => typeof(item) === 'number')); // true
console.log(someArray.every(item => typeof(item) === 'number')); // false 


// reduce - метод для схопываения массива
const arr = [4, 5, 1, 3, 2, 6];

// получить сумму всех этих элементов
const res = arr.reduce((sum, current) => sum + current);
console.log(res);

const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(res2);

// Example of real life
const obj = {
    iva: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj);
console.log(newArr);
// [
//     [ 'iva', 'persone' ],
//     [ 'ann', 'persone' ],
//     [ 'dog', 'animal' ],
//     [ 'cat', 'animal' ]
// ]
  
// Chaning - записать данные в цепочку
const newArr2 = 
    Object.entries(obj)
    .filter(item => item[1] === 'persone')
    .map(item => item[0]);
console.log(newArr2);

