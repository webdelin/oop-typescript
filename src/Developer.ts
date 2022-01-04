import IUser from "./interfaces";
import Person from "./Person";

export default class Developer extends Person{
    private level;
    private language;

    constructor(
        email: string, 
        password: string, 
        firstName: string, 
        lastName: string, 
        age: number,
        level: string,
        language: string
        ) {
        super(email, password, firstName, lastName, age)
        this.level = level;
        this.language = language;
    }
    public greeting(){
        return console.log(`Hallo, ich bin Developer und meine zugang ist ${this.zugang}`);
    }
}