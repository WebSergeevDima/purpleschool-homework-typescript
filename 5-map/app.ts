type IKey = [string, unknown];

interface IMap {
    [key: number]: IKey[]
}

class MapCustom {
    #map: IMap = {};

    constructor() {

    }

    private getHash(key: string) {
        return key.length;
    }

    add(key: string, value: unknown) {
        const hash:number = this.getHash(key);

        if(!this.#map[hash]) {
            this.#map[hash] = [];
        }

        this.#map[hash].push([key, value]);
    }

    delete(key: string) {
        const hash: number = this.getHash(key);

        if(!this.#map[hash]) {
            return undefined;
        }

        this.#map[hash] = this.#map[hash].filter((mapKey: IKey) => key !== mapKey[0]);
    }

    get(key: string) {
        const hash: number = this.getHash(key);

        if(!this.#map[hash]?.length) {
            return undefined; //Если ключ не найден
        }

        for(const [mapKey, mapValue] of this.#map[hash]) {
            if(key === mapKey) {
                return mapValue;
            }
        }
    }

    clear() {
        this.#map = [];
    }
}

let weatherMap = new MapCustom();
weatherMap.add('London', 20);
weatherMap.add('Berlin', 25);
console.log(weatherMap.get('London'));


