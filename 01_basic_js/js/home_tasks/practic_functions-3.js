/* Задачи:

1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). 
Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные" 


2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

*/

'use strict';

// Место для первой задачи
function getTimeFromMinutes(minutes) {

    if(typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные";
    }

    if (minutes > 600) {
        return "Введите число меньше 600";
    }

    const minutesWords = ['минута', 'минуты', 'минут'],
          hoursWords = ['час', 'часа', 'часов'];
  

    function declOfNum(n, arr) {  
        n = Math.abs(n) % 100; 
        var n1 = n % 10;
        if (n > 10 && n < 20) { return arr[2]; }
        if (n1 > 1 && n1 < 5) { return arr[1]; }
        if (n1 == 1) { return arr[0]; }
        return arr[2];
    }


    // 100 * / 60 = 1,6
    // 150 * / 60 = 2, 5 => 0.5 * 60 = 30 минут

    // 260 минут = ? + ?
    // 260 / 60 = 4.33
    // .33 * 60 = 20
    // 4 часа 20 минут

    let totalTime = +(minutes / 60).toFixed(2), // => get total time
        hours = Math.floor(minutes/60), // => get hour
        minutesAfterHour = Math.round(((totalTime % 1).toFixed(2) * 60)), // => get minutes after dot .
        hoursWord = declOfNum(hours, hoursWords),
        minutesWord = declOfNum(minutesAfterHour, minutesWords);

    return `Это ${hours} ${hoursWord} и ${minutesAfterHour} ${minutesWord}`;

}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));
console.log(getTimeFromMinutes(700));

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    
    if(
        typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number'
    ) {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
    
}

console.log(findMaxNumber(1,2));
console.log(findMaxNumber(1,2,4));
console.log(findMaxNumber(1,2,5,1));
