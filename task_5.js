'use strict';

// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

// Если функции передана правильная строка PIN, верните true, иначе верните false.

let pinCheck = (pin) => {

    let pinArr = pin.split('');
    console.log(pinArr);

    let check = pinArr.find(item => {
        return item.match(/\D/) ? false : true;
    });

    return ((pinArr.length == 4 || pinArr.length == 6) && check) ? true : false;
};

pinCheck('1234');
pinCheck('000000');
pinCheck('341905');
pinCheck('1');
pinCheck('dfdwe');
pinCheck('aqzw');