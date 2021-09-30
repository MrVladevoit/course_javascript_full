//1)
import {one, sayHi, two} from './main.js';
console.log(`${one} and ${two}`);

// 2)
// import {one as first} from './main';
// console.log(first);

// 3)
// import * as data from './main';
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

// 4) Дефолтный экспорт
// import {default as sayGoodbye} from "./export_default";
import sayGoodbye from "./export_default.js";
sayGoodbye();

