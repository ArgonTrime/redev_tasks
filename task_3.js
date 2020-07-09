'use strict';

// В этом небольшом задании вам дана строка чисел, разделенных пробелами, и вы должны вернуть самое высокое и самое низкое число.

// list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")  ----> "666 -123"

let list = '4 5 29 54 4 0 -123 666 -64 1 -3 6 -6';
let newArr = list.split(' ').map(item => +item);

// newArr = newArr.map(item => +item);

console.log(`max: ${Math.max(...newArr)}, min: ${Math.min(...newArr)}`);