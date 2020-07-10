'use strict';


// let toJadenCase = (str) => {
//     let strArr = str.toLowerCase().split(' ');
//     return strArr.map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
// };

// console.log(toJadenCase('Test proto metod toJadenCase'));

String.prototype.toJadenCase = function () {
    // let strArr = ;
    return this.toLowerCase().split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ');
};

'Test proto metod toJadenCase'.toJadenCase();