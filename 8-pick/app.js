"use strict";
const user = {
    name: 'Vasia',
    age: 8,
    skills: ['js', 'ts']
};
function pickObjectKeys(obj, keys) {
    const newObj = {};
    for (const key in obj) {
        if (String(keys).includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
const res = pickObjectKeys(user, ['age', 'skills']);
console.log(res);
