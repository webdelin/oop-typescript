import Developer from "./Developer";
import Person from "./Person";
import User from "./User";
import Car from "./Aggregation";
import {userService} from "./Repository"

const user = new User('user@user', 'user')
const person = new Person('person@person', 'person', 'Wendelin', 'Gerein', 45)
const developer = new Developer('developer@developer', 'developer', 'Wendelin', 'Gerein', 45, 'Middle', 'Javascript')

const userList:User[] = [user,person,developer]

function massGreating(users: User[]){
    users.map(item=>item.greeting())
}
massGreating(userList)
/* user.greeting()
person.greeting()
developer.greeting() */
const auto = new Car('Kirsche')
auto.drive()

class DatabaseSingelton {
    url?: number;
    private static instance: DatabaseSingelton;
    constructor(){
        if(DatabaseSingelton.instance){
            return DatabaseSingelton.instance
        }
        this.url = Math.random();
        DatabaseSingelton.instance = this;
    }
}

const db1 = new DatabaseSingelton()
const db2 = new DatabaseSingelton()
console.log(db1.url);
console.log(db2.url);

userService.filterUserByAge(15)