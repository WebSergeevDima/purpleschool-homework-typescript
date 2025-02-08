const obj: Record<string, number> = {
    a: 1,
    b: 2
}

const swapKeysAndValues = (obj: Record<string, number>) => {
    const newObj:Record<string, string> = {};

    for(const item in obj) {
        newObj[obj[item]] = item;
    }

    return newObj;
}

const res = swapKeysAndValues(obj);

console.log('res: ', res);


// Вот ещё одна реализация, но мне не нравится что возвращаемый тип number, string. Этого быть не может так как ключ оюъекта всегда строка

// const obj: Record<string, number> = {
//     a: 1,
//     b: 2
// }
//
// const swapKeysAndValues = <T extends string, Y extends number> (obj: Record<T, Y>): Record<Y, T> => {
//     const newObj = {} as Record<Y, T>;
//
//     for(const item in obj) {
//         newObj[obj[item]] = item;
//     }
//
//     return newObj;
// }
//
// const res = swapKeysAndValues<string, number>(obj);
//
// console.log('res: ', res);