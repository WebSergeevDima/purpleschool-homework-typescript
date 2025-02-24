type UserType = {
    name: string,
    age: number,
    skills: string[]
}

const user:UserType = {
    name: 'Vasia',
    age: 8,
    skills: ['js', 'ts']
}

function pickObjectKeys<T, K extends keyof T>(obj: T, keys: K[] ) {
    const newObj:any = {};

    for(const key in obj) {
        if(String(keys).includes(key)) {
            newObj[key] = obj[key]
        }
    }

    return newObj;
}

const res = pickObjectKeys(user, ['age', 'skills']);

console.log(res);