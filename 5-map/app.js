"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MapCustom_map;
class MapCustom {
    constructor() {
        _MapCustom_map.set(this, {});
    }
    getHash(key) {
        return key.length;
    }
    add(key, value) {
        const hash = this.getHash(key);
        if (!__classPrivateFieldGet(this, _MapCustom_map, "f")[hash]) {
            __classPrivateFieldGet(this, _MapCustom_map, "f")[hash] = [];
        }
        __classPrivateFieldGet(this, _MapCustom_map, "f")[hash].push([key, value]);
    }
    delete(key) {
        const hash = this.getHash(key);
        if (!__classPrivateFieldGet(this, _MapCustom_map, "f")[hash]) {
            return undefined;
        }
        __classPrivateFieldGet(this, _MapCustom_map, "f")[hash] = __classPrivateFieldGet(this, _MapCustom_map, "f")[hash].filter((mapKey) => key !== mapKey[0]);
    }
    get(key) {
        var _a;
        const hash = this.getHash(key);
        if (!((_a = __classPrivateFieldGet(this, _MapCustom_map, "f")[hash]) === null || _a === void 0 ? void 0 : _a.length)) {
            return undefined; //Если ключ не найден
        }
        for (const [mapKey, mapValue] of __classPrivateFieldGet(this, _MapCustom_map, "f")[hash]) {
            if (key === mapKey) {
                return mapValue;
            }
        }
    }
    clear() {
        __classPrivateFieldSet(this, _MapCustom_map, [], "f");
    }
}
_MapCustom_map = new WeakMap();
let weatherMap = new MapCustom();
weatherMap.add('London', 20);
weatherMap.add('Berlin', 25);
console.log(weatherMap.get('London'));
