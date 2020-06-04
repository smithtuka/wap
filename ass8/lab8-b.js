
class Bicycle{
    // only methods preferred here and not -- how to initialize speed to 0?
    constructor(speed){
       
        this.speed = speed;
    }
    applyBrake(decValue){
        if( this.speed-decValue >=0) this.speed -= decValue;
        else this.speed=0;
    }
    speedUp(accValue){
        this.speed += accValue;
    }
} 

class MountainBicycle extends Bicycle{
    constructor(gear){
        this.gear = gear; // assign 0
    }
    setGear(newGear){
        this.gear=newGear;
    }

}

let f = new Bicycle();
console.log(f);