'use strict';

// Function-generator
// Более продвинутая технология. Она генерирует какой-то результат и делает это последовательно.

// function* generator() {
//     yield 'S'; // при первом вызове
//     yield 'c'; // при 2м вызове
//     yield 'r'; // при 3м вызове и тп
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generator();

// console.log(str.next()); // { value: 'S', done: false }
// console.log(str.next()); // { value: 'c', done: false }
// console.log(str.next()); // { value: 'r', done: false }
// console.log(str.next()); // { value: 'i', done: false }
// console.log(str.next()); // { value: 'p', done: false }
// console.log(str.next()); // { value: 't', done: false }
// console.log(str.next()); // { value: undefined, done: true }

// console.log(str.next().value); // S


// function* count(n) {
//     for(let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// const counter = count(7);

// console.log(counter.next().value); // 0
// console.log(counter.next().value); // 1
// console.log(counter.next().value); // 2

function* count(n) {
    for(let i = 0; i < n; i++) {
        yield i;
    }
}

for(let k of count(7)) {
    console.log(k); // 0 1 2 3 4 5 6
}

