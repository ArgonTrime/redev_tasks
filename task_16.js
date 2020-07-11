'use strict';

// Напиши функцию, которая принимает строковый параметр и меняет буквы в словах в обратном порядке. Все пробелы в строке должны быть сохранены.

// This is an example! -> sihT si na !elpmaxe

let reversLitersWords = (str) => {
    let newArrWords = str.split(' ');

    return console.log(newArrWords.map( item => item.split('').reverse().join('') ).join(' '));
};

reversLitersWords('This is an example!');