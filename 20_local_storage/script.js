'use strict';

// загружать данные в local storage
localStorage.setItem('number', 5);

// выгружать данные из local storage
const localStorageData = localStorage.getItem('number');
console.log(localStorageData);

// удалить данные
localStorage.removeItem('number');

// очистить наше локальное хранилище
localStorage.clear();

// Example
const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('.form-signin'),
      buttonChangeColor = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

buttonChangeColor.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

// EXAMPLE 2
const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);
console.log(JSON.parse(localStorage.getItem('alex')));
