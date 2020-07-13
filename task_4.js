'use strict';

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

let accum = (str) => {
    let arrStr = str.toLowerCase().split('');

    return `${arrStr.map((item, i) => item[0].toUpperCase() + item.repeat(i)).join('-')}`;
};

accum("abcd");
accum("RqaEzty");
accum("cwAt");