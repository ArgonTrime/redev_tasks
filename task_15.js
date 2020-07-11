'use strict'; 

// Твоя задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую слово должно занимать в результате.

// Примечание: числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (не 0)

// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только действительные последовательные числа

// **is2 Thi1s T4est 3a -> Thi1s is2 3a T4est**

let sortNumberWord = (str) => {

    if(str === '') {
        return '';
    }

    return console.log(str.split(' ').sort((a, b) => a.match(/[1-9]/g) - b.match(/[1-9]/g)).join(' '));
};

sortNumberWord('is2 Thi1s T4est 3a');