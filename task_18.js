'use strict';

let polindromDetected = (str) => {
    return (str.split('').reverse().join('') === str) ? true : false;
};

polindromDetected('test');
polindromDetected('testset');
polindromDetected('12321');