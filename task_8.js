'use strict';

let maxMinValue = (arr) => {
    return `Max: ${Math.max(...arr)}, Min: ${Math.min(...arr)}`;
};

maxMinValue([1, -2, 23, 21, -12, 45, -1, 12]);