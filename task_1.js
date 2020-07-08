'use strict';

// Вы можете знать несколько довольно больших идеальных квадратов. Но как насчет следующего?
// Завершите метод findNextSquare, который находит следующий целочисленный идеальный квадрат после того, как передан в качестве параметра. Напомним, что целочисленный совершенный квадрат - это такое целое число n, что sqrt (n) также является целым числом.
// Если параметр сам по себе не является идеальным квадратом, то должно быть возвращено -1. Вы можете предположить, что параметр положительный.

// findNextSquare = (sq) => {

// return 
// }

let findNextSquare = (sq) => {
    if( !Number.isInteger(Math.sqrt(sq)) ) {
        return console.log(`-1 since ${sq} is not a perfect`);
    }

    let sqNew = Math.sqrt(sq) + 1;

    return console.log(sqNew * sqNew);

};

findNextSquare(121);
findNextSquare(625);
findNextSquare(114);