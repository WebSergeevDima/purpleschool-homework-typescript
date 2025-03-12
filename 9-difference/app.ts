interface IA {
    a: number;
    b: string;
}

interface IB {
    a: number;
    c: boolean;
}

interface IDiff {
    b: string;
}

let a: IA = {
    a: 5,
    b: ''
}

let b: IB = {
    a: 5,
    c: true
}

function difference<T, K>(obj1: T, obj2: Required<K>): T {
    const newObj = {} as T;

    for(let key in obj1) {
        if(!obj2.hasOwnProperty(key)) {
            newObj[key] = obj1[key];
        }
    }

    return newObj;
}

let v0 = difference<IA, IB>(a, b);

console.log(v0);