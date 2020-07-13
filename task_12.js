'use strict';

// Такая вот задача.

// Удалить из одного массива все элементы второго массива.

// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

let arrayDiff = (arr, delArr) => {

    delArr.forEach(delItem => {
        arr = arr.filter(item => item != delItem);
    });

    return console.log(arr);
};

arrayDiff([1,2],[1]);
arrayDiff([1,2,2,2,3],[2]);
arrayDiff([1,2,2,2,3,23,1],[2, 23]);