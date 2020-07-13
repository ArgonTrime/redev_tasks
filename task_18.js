'use strict';

let polindromDetected = (str) => {
    return str.split('').reverse().join('') === str;
};

polindromDetected('test');
polindromDetected('testset');
polindromDetected('12321');