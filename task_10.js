'use strict';

// ты можешь найти иголку в стоге сена?
// Напишите функцию findNeedle, которая принимает массив, полный мусора, но содержащий одну иглу
// После того, как ваша функция найдет иголку, она должна вернуть сообщение (в виде строки), которое говорит:
// "нашел иглу в положении" плюс индекс, в котором он нашел иглу, так
// **findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"])**
// должен вернуться «нашел иглу в положении 2»

let findNeedle = (arr) => {
    

    arr.map((item, i) => {
        if(item === 'needle') {
            return console.log(`нашел иглу в положении ${i}`);
        }
    });
    
};

findNeedle(["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"]);