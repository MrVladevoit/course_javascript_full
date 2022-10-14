/*

(**) Задача на формирование фигуры
Это одна из классических задач в программировании на формирование самых разных фигур при помощи кода. Вы спросите, а зачем это вообще нужно? Ответов несколько:

Существуют реальные задачи, когда вы кодом строите геометрию, символы и другие нужные вещи. Вспомните простые электронные табло на улицах, например

Это хорошо прокачивает логику и разминает мозг

Позволяет запомнить нюансы работы языка

Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
***********
(Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)

Это похоже на то, что было в одном из уроков недавно, но сложнее. Задача непростая для новичков, так что с первого раза может не получится.

Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу.

Ответ с кодом этой задачи можно найти тут: ссылка

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

Но постарайтесь решить самостоятельно 

*/




const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

// 5 space + 1*
// 4 space + 3*
// 3 space + 7*
// 2 space + 5*
// 1 space + 9*
// *********** - 11

for(let i = 0; i <= lines; i++) {

    for(let j = 0; j < lines - i; j++) {
        result += " ";
    }

    for(let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }


    result += '\n';

}
console.log(result);