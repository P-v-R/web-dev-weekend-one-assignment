/* create a Vehicle class, with properties of make, model, and year. 
    Each vehicle should have a method attached that returns a string "Beep" & a method that returns a string outlining the make model & year */

class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk(){
        return "Beep."
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

/* create a class for a Car which inherits from the Vehicle class but adds a set numWheels property of 4 */

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4
    }
}

/* creates a class for a motorcycle which inherits from a Vehicle class, a set numWheels property of 2 and a revEngine method that returns the string "VROOM!!!" */ 

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!"
    }

}

class Vehicles {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    checkVehicle = (vehicle) => {
        if(vehicleToAdd.constructor.name ==="Car" || vehicleToAdd.constructor.name === "Motorcycle"){
            console.log("working with check")
        } else {
            console.log("check failed")
        }
    }

    add(vehicleToAdd){
        if(vehicleToAdd.constructor.name ==="Car" || vehicleToAdd.constructor.name === "Motorcycle"){
            if (this.vehicles.length < this.capacity){
                this.vehicles.push(vehicleToAdd.constructor.name);
                console.log(`${vehicleToAdd.constructor.name} added!`)
            } else {
                return console.log("Sorry, we’re full.");
            }
        } else {
            console.log("only Vehicles can enter!")
        }
    }
}





let carA = new Car("saab", "900 turbo", 1995)
let bikeB = new Motorcycle("toyota","dragon",1990)

let newGarage = new Vehicles(2);

newGarage.add(carA)
newGarage.add(bikeB)
newGarage.add(carA)



