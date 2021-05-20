"use strict";

function first() {
    // Do something
    setTimeout(function () { // задержка
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

// first();
// second();

// Callback - это фукция, которая должна быть выполнена после того, как другая функция завершила ее выполнение

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);





