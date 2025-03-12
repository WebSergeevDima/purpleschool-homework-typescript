"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var URL_USERS = 'https://dummyjson.com/users';
axios_1.default.get(URL_USERS).then(function (response) {
    return response.data;
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    if (axios_1.default.isAxiosError(error)) {
        throw new Error(error.message);
    }
});
