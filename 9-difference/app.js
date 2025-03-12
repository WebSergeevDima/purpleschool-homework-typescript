"use strict";
let a = {
    a: 5,
    b: ''
};
let b = {
    a: 5,
    c: true
};
function difference(obj1, obj2) {
    const newObj = {};
    for (let key in obj1) {
        if (!obj2.hasOwnProperty(key)) {
            newObj[key] = obj1[key];
        }
    }
    return newObj;
}
let v0 = difference(a, b);
console.log(v0);
