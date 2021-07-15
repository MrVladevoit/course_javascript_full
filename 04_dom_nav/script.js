"use strict";

// console.log(document.head); // head и внутрение метатеги
// console.log(document.body); // body и все что внутри
// console.log(document.documentElement); // html тег и все что внутри
// console.log(document.body.childNodes); 
// console.log(document.body.firstChild); // вернет text -  так как найдет перенос строки
// console.log(document.body.firstElementChild); // вернет элемент
// console.log(document.body.lastChild); // вернет text -  так как найдет перенос строки
// console.log(document.body.lastElementChild); // вернет элемент

// console.log(document.querySelector('#current').parentNode.parentNode); // => <wrapper></wrapper> навигируемся по родительским нодам / узлам

// console.log(document.querySelector('[data-current="3"]'));
// console.log(document.querySelector('[data-current="3"]').nextSibling); // вернет text -  так как найдет перенос строки
// console.log(document.querySelector('[data-current="3"]').previousSibling); // вернет text -  так как найдет перенос строки
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // вернет элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // вернет элемент


for(let node of document.body.childNodes) {
    if(node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}