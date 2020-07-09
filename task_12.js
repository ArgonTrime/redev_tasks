'use strict';

// Такая вот задача.

// Удалить из одного массива все элементы второго массива.

// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

let arrayDiff = (arr, delArr) => {
    return console.log( arr.filter(item => item != delArr[0]));
};

arrayDiff([1,2],[1]);
arrayDiff([1,2,2,2,3],[2]);