// Задача:

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, 
// где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. 
// Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

'use strict';

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

// My version
// function isBudgetEnough(data) {

//     let {shops, height, moneyPer1m3, budget} = data;
    
//     let totalAreaShops = 0;
    
//     for(let i = 0; i < shops.length; i++) {
//         let shopSquare = shops[i].width * shops[i].length;
//         totalAreaShops += shopSquare;
//     }

//     let shoppingMalVolume = totalAreaShops * height, // 1675 m3
//     billForPayment = shoppingMalVolume * moneyPer1m3; // 50 250
    
//     if(billForPayment > budget) {
//         return 'Бюджета недостаточно';
//     } else {
//         return 'Бюджета достаточно';
//     }
// }

// From link
// function isBudgetEnough(data) {

//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// My version (edit)
function isBudgetEnough(data) {
    let square = 0,
        volume = 0,
        billForPayment = 0;

    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });

    volume = data.height * square;
    billForPayment = volume * data.moneyPer1m3; // 50 250
    
    if(billForPayment <= data.budget) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));
