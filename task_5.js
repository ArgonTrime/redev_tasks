'use strict';

// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

// Если функции передана правильная строка PIN, верните true, иначе верните false.

let pinCheck = (pin) => {

    let pinArr = pin.split('');
    console.log(pinArr);

    for(let i = 0; i < pinArr.length; i++) {
        if(isNaN(pinArr[i])) {
            return false;
        }
    }

    if(pinArr.length == 4 || pinArr.length == 6) {
        return true;
    } else {
        return false;
    }
};

pinCheck('1234');
pinCheck('000000');
pinCheck('341905');
pinCheck('1');
pinCheck('dfdwe');
pinCheck('aqzw');
