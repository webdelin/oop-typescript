import User from "./User";

export default class Person extends User{
    private firstName;
    private lastName;
    private age;

    constructor(firstName:string, lastName:string, age:number){
        super(this.email, this.password)
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}