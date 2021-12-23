export default class User {
    private _email;
    private _password;
    private _id;
    constructor(email:any, password:any) {
        this._email = email;
        this._password = password;
        this._id = this.generateId
    }
    get email(){
        return this._email
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password
    }
    set password(value){
        this._password = value
    }
    get generateId(){
        return Math.random()
    }
}
