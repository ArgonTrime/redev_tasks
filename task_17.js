'use strict';

// Написать функцию которая переделывает строку с camelCase в snake_case

// solution("redevCourses") -> "redev_courses"

let solution = (str) => {
    return str.split('').map(item => item.match(/[A-Z]/g) ? item = `_${item.toLowerCase()}` : item).join('');
};

solution('redevCourses');
solution('moreCamelCase');