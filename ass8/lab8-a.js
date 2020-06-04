// 1.	Create a function expression named createBicyclePrototye which returns an object literal with one property speed set to value 0 and two methods 
// a.	applyBrake that takes a parameter and decrement the current speed of the object by that given value.
// b.	speedup that takes a parameter increment current speed by given value.

// 2.	Create another function expression named createMountainBikeProtoype  
//that take a prototype parameter and returns an object created using Object.create (prototype) with one additional property - 
//gear set to value 1 and one additional method setGear which takes a parameter and sets gear value for the object.

// 3.	Write third function expression named start that first make bicyclePrototype object using first function and
// then mountainBikePrototype object using second function, passing bicyclePrototype as argument.

// 4.	Now create some objects from both bicyclePrototype and mountainBikePrototype using Object.create() and play with it. (do some console.log)
// 5.	Wrap all three functions in a module so that we have only one module variable in the global name space.
// 6.	Make use of 'use strict' at the top of your module.
// 7.	Now, try to achieve above functionality, this time using ES6 class construct.

const bikeModule = (function(){
    "use strict";
function createBicyclePrototye(){
    let speed;
    return{
         speed : speed=0,
        applyBrake: function(decValue){
            if( this.speed-decValue >=0) this.speed -= decValue;
            else this.speed=0;
        },
        speedUp: function(accValue){
            this.speed += accValue;
            // return this.speed;
        }
    };
}

function createMountainBikeProtoype(bike){
   
    const mBike = Object.create(bike);
    mBike.gear = 1;
    mBike.setGear = g => mBike.gear=g;
   return mBike;
   
}

function start(){
    const bicyclePrototype = createBicyclePrototye();
    const mountainBikeProtoype = createMountainBikeProtoype(bicyclePrototype);

    const bicycle = Object.create(bicyclePrototype);
    const mountainBicycle = Object.create(mountainBikeProtoype);

    // console.log(bicyclePrototype);
    // console.log(mountainBikeProtoype);
    // console.log(bicycle);
    // console.log(mountainBicycle);

    return [bicycle, mountainBicycle];
}
return {
    createBicyclePrototye: createBicyclePrototye,
    createMountainBikeProtoype: createMountainBikeProtoype,
    start:start
};
})();


const allBicycles = bikeModule.start();
console.log(allBicycles); // all bikes

//ordinary bike
console.log(allBicycles[0]); // all bikes
allBicycles[0].speedUp(25);
console.log(allBicycles[0]);
allBicycles[0].speedUp(25);
console.log(allBicycles[0]);
allBicycles[0].applyBrake(20);
console.log(allBicycles[0]);

//mountain Bike
console.log(allBicycles[1]);
console.log(allBicycles[1].speed);
allBicycles[1].setGear(50);
allBicycles[1].speedUp(90);
console.log(allBicycles[1].gear);
console.log(allBicycles);

for(const key of allBicycles){
    console.log(key);
}







