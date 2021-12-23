import Database from "./Database";
import User from "./User";

export default class AppIndex extends User {

}

const user = new AppIndex('sss','ssss')
console.log(user);

class Rectagle {
    private _width;
    private _height;

    constructor(w: number,h: number){
        this._width = w;
        this._height = h;
    }

    public get width(){
        return this._width
    }

    public set width(value){
        if(value<=0){
            this._width = 1
        } else {
            this._width = value
        }
    }

    calcArea(){
        return this._width * this._height
    }
}

const rect = new Rectagle(11,22)
rect.width=-2
console.log(rect);

const db = new Database(1,2,3,4)
db.createNewTable('roles')
db.createNewTable('users')
console.log(db);
