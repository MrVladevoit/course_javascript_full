// setTimeout ---------

// const timerId = setTimeout(function (text) {
//     console.log(text);
// }, 2000, 'Hello');

// const timerId = setTimeout(logger, 2000);

// Очищение таймера
// clearInterval(timerId); // в консоле ничего не появится, потому что мы остановили таймер

// function logger () {
//     console.log("text");
// }


// setInterval ---------

// Если мы хотим, чтобы наш скрипт повторялся через некоторое время, то нам необходимо
// использовать setInterval

// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
// });

// function logger () {

//     if (i == 3) {
//         clearInterval(timerId);
//     }

//     console.log("text");
//     i++;
// }

// Рекурсия - это прием, когда функция внутри себя вызывает

// let id = setTimeout(function log() {
//     console.log('Hello');

//     id = setTimeout(log, 500);
// }, 500);


// Practice
const btn = document.querySelector('.btn');

function myAnimation() {
    const element = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + 'px';
            element.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);