'use strict';

// Функция принимает число n (n> 0), чтобы вернуть обратную последовательность от n до 1

// Например n = 5 на выходе у тебя должно быть 5,4,3,2,1

let reverseSequence = (n) => {

    let reverseArr =[];

    if(n > 0 && Number.isInteger(n)) {
        for(let i = n; i > 0; i--) {
            reverseArr.push(i);
        }
    }

    return console.log(reverseArr.join(', '));
};

reverseSequence(5);
reverseSequence(13);
reverseSequence(28);