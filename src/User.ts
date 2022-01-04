import IUser from "./interfaces";

export default class User {
    private _id;
    private _email;
    private _password;
    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
        this._id = this.generateId
    }
    get generateId(){
        return Math.random()
    }
    public greeting(){
        return console.log(`Hallo, ich bin User und meine zugang ist ${this.zugang}`);
    }

    public get zugang(){
        return `${this._email} ${this._password}`;
    }
}
