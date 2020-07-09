'use strict';

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

let accum = (str) => {
    let arrStr = str.toLowerCase().split('');

    for(let i = 0; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i].padStart(i + 1, arrStr[i]);
    }

    console.log(arrStr.map(item => item[0].toUpperCase() + item.slice(1)).join('-'));
};


accum("abcd");
accum("RqaEzty");
accum("cwAt");