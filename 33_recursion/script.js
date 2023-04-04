function factorial(num) {
    
    if(typeof(num) !== 'number' || !Number.isInteger(num)) {
        return "Ошибка. Используйте целое число для корректной работы.";
    } else if (num <= 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
    
}


function factorialize(num) {

    if(typeof(num) !== 'number' || !Number.isInteger(num)) {
        return "Ошибка. Используйте целое число для корректной работы.";
    } else if (num <= 0) {
        return 1;
    } else {
        for (var i = num - 1; i >= 1; i--) {
            num *= i;
        }
        return num;
    }
}

// n! = n * (n - 1) * (n - 2) * ...*1 

// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120


// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += "*";
// 	}
  
//   result += '\n';
// }



// console.log(factorial(22.2));
// console.log(factorial('String'));
// console.log(factorial(-1));
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
console.log(factorial(4));
console.log(factorialize(4));

