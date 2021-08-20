'use strict';

const person = {
    name: 'Alex',
    tel: '+74444444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// Методы JSON
console.log(JSON.stringify(person)); // {"name":"Alex","tel":"+74444444444"} превращаем данные в JSON
console.log(JSON.parse(JSON.stringify(person))); // JSON превращаем в формат JS

// Глубокие копии
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone); // parents: { mom: 'Ann', dad: 'Mike' }

