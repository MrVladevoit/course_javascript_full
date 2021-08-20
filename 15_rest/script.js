'use strict';

// ...rest - это Rest оператор - бесконечное количество аргументов
 const log = function(a, b, ...rest) {
     console.log(a, b, rest);
 };

 log('basic', 'rest', 'operator', 'usage');

// basis = 2 - новый синтаксис в ES6
 function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
 }

 calcOrDouble(3);

