'use strict';

// Тролли атакуют ваш раздел комментариев!
// Распространенный способ справиться с этой ситуацией - убрать все гласные из комментариев троллей, нейтрализуя угрозу.
// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку со всеми удаленными гласными.
// Например, строка «Этот сайт для неудачников LOL!» стал бы "Ths wbst s fr lsrs LL!"
// у не считается гласным.

let fixTrollMessage = (str) => console.log( str.replace(/[aeiouауоыиэяюёе]/gi, '') );

fixTrollMessage('Тролли атакуют ваш раздел комментариев!');
fixTrollMessage('Этот сайт для неудачников LOL!');