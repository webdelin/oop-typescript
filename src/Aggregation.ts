class Engine {
    drive(){
        console.log('Mottor läuft');
        
    }
}

class Wheel {
    drive(){
        console.log('Räder drehen');
    }
}

class Freshener {
}

class Flat {
    freshener: Freshener;
    constructor(freshener:any){
        //Aggregation
        this.freshener = freshener
    }
}

export default class Car {
    engine: Engine;
    wheels: Wheel[] = [];
    freshener: Freshener;
    constructor(freshener:any){
        //Aggregation
        this.freshener = freshener
        //Composition
        this.engine = new Engine()
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
        this.wheels.push(new Wheel())
    }
    drive(){
        console.log(this.freshener);
        this.engine.drive()
        this.wheels.map(item=>item.drive())
    }
}

