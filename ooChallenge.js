/* create a Vehicle class, with properties of make, model, and year. 
    Each vehicle should have a method attached that returns a string "Beep" & a method that returns a string outlining the make model & year */

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk() {
        return "Beep.";
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

/* create a class for a Car which inherits from the Vehicle class but adds a set numWheels property of 4 */
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

/* creates a class for a motorcycle which inherits from a Vehicle class, a set numWheels property of 2 and a revEngine method that returns the string "VROOM!!!" */
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        return "VROOM!!!";
    }

}
/* create a class of Vehicles (plural) that acts as a garage. user decides limit of cars/motorcycles that can be sored*/
class Vehicles {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    // checks to make sure vehicle being added is either a car or motorcycle.
    checkVehicle = (vehicle) => {
        if (vehicle.constructor.name === "Car" || vehicle.constructor.name === "Motorcycle") {
            return true;
        } else {
            console.log("vehicles only!!!!");
            return false;
        }
    }
    // if space is available, vehicle will be added to vehicles array 
    add(vehicleToAdd) {
        if (this.vehicles.length < this.capacity && this.checkVehicle(vehicleToAdd)) {
            this.vehicles.push(vehicleToAdd.constructor.name);
            console.log(`${vehicleToAdd.constructor.name} added!`);
        } else {
            return console.log("Sorry, we’re full.");
        }
    }
}




/* TESTS! */
let firstCar = new Car("saab", "900 turbo", 1995);
let retroBike = new Motorcycle("toyota", "roadster", 1990);
let perrysGarage = new Vehicles(3);

perrysGarage.add(firstCar);
perrysGarage.add(firstCar);
perrysGarage.add(retroBike);
perrysGarage.add("potato");

console.log(perrysGarage.vehicles);