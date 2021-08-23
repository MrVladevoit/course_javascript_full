'use strict';

const inputRub = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

// Event input - событие при ввода данных.
// Event change - событие при котором были введены данные и потом потерян фокус из поля.

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // Методы
    // 1) request.open(method, url, async, login, password); // -> собирают настройки для того, чтобы сделать запрос
    request.open('GET', 'js/current.json');
    
    // 2) Задаем конфигурации
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    // 3) Отправляем
    request.send();

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         // calc
    //         const data = JSON.parse(request.response);
    //         inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2 );
    //     } else {
    //         inputUSD.value = "Что-то пошло не так";
    //     }
    // });

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRub.value / data.current.usd).toFixed(2 );
        } else {
            inputUSD.value = "Что-то пошло не так";
        }
    });

    // Status
    // statusText
    // response
    // readyState

    

});
