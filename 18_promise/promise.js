'use strict';

console.log('Запрос данных...');

// resolve - что-то выполнилось правильно
// reject - обещание не выполнилось, что-то пошло не так.
const req = new Promise(function(resolve, reject) {

    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const good = {
            name: 'TV',
            price: 2000
        };

        resolve(good);
    }, 2000);
});

// then - обработка положительного результата
// req.then((good) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             good.status = 'ordered';
//             resolve(good);
//         }, 2000);  
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// });

// catch - отлавливает ошибки и позволяет их обработать
// reject => что делать при появлении ошибки
// req.then((good) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             good.status = 'ordered';
//             reject();
//         }, 2000);  
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then((data) => {
//     console.log(data);
// }).catch(() => {
//     console.error('Произошла ошибка');
// });

// finally - действия, которые должны произойти всегда после всех промисов
req.then((good) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            good.status = 'ordered';
            resolve();
        }, 2000);  
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('Произошла ошибка');
}).finally(() => {
    console.error('Finally');
});
  