'use strict';

// Simple, учитывая строку слов, возвращает длину самого короткого слова.
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

let simple = (str) => {
    let newArr = str.split(' ');
    let wordCount = newArr.map(item => item.replace(/[^a-zA-Zа-яА-Я]/g, '').length);

    return Math.min(...wordCount);
};

simple('Simple, учитывая строку слов, возвращает длину самого короткого слова.');
simple('Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.');
simple('Amy normally hated Monday mornings, but this year was different.');
