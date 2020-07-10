'use strict';

// Cоздай функцию, которая возвращает сумму двух наименьших положительных чисел, учитывая массив из минимум 4 положительных чисел

// [12,423,54,1235,3,15,2,52] => 5

let sumAmount = (arr) => {
    
    let count = 0;

    arr.forEach(item => {
        if(item > 0) {
            count++;
        }
    });
    
    if(count >= 4) {
        let newArr = arr.filter(item => item > 0).sort((a, b) => a - b);    

        return console.log(newArr[0] + newArr[1]); 
    }  
};

sumAmount([12,423,54,1235,3,15,2,52]);
sumAmount([-1,-45,-123,32,32,-12,-56]);
sumAmount([-213, -12, 12, 23, 21, -233, 23]);
sumAmount([2,34,1,3]);