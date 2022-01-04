import IUser from "./interfaces";
import User from "./User";

export default class Person extends User{
    private _firstName;
    private _lastName;
    private _age;
    constructor(
        email: string, 
        password: string, 
        firstName: string, 
        lastName: string, 
        age: number
        ) {
        super(email, password)
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set age(num:number) {
        if(num<0){
            this._age = 0
        }
        else {
            this._age = num
        }
    }
    public greeting(){
        return console.log(`Hallo, ich bin Person und meine zugang ist ${this.zugang}`);
    }
}