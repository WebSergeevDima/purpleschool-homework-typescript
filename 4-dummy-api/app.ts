import axios from 'axios';

const URL_USERS: string = 'https://dummyjson.com/users';

const enum Roles {
    MODERATOR = 'moderator',
    ADMIN = 'admin',
    USER = 'user',
}

const enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

const enum HairType {
    CURLY = 'Curly',
    STRAIGHT = 'Straight',
    WAVY = 'Wavy',
    KINKY = 'Kinky',
}

interface ICoordinates {
    lat: number,
    lng: number
}

interface IHair {
    color: string,
    type: string
}

interface IAddress {
    address: string,
    city: string,
    state: string,
    stateCode: string,
    postalCode: string,
    coordinates: ICoordinates,
    country: string
}

interface IBank {
    cardExpire: string,
    cardNumber: string,
    cardType: string,
    currency: string,
    iban: string
}

interface ICompany {
    department: string,
    name: string,
    title: string,
    address: IAddress
}

interface ICrypto {
    coin: string,
    wallet: string,
    network: string
}

interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: IHair,
    ip: string,
    address: IAddress,
    macAddress: string,
    university: string,
    bank: IBank,
    company: ICompany,
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: ICrypto,
    role: Roles
}

interface IResponseUser {
    users: IUser[];
    total: number,
    skip: number,
    limit: number
}

axios.get<IResponseUser>(URL_USERS).then((response): IResponseUser => {
    return response.data;
}).then(data => {
    console.log(data)
}).catch((error) => {
    if (axios.isAxiosError(error)) {
        throw new Error(error.message);
    }
});