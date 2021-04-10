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

/* create a class for a Car which inherits from the Vehicle class but adds a property for number of wheels  */

class Car extends Vehicle{
    constructor(make, model, year, numWheels){
        super(make, model, year);
        this.numWheels = numWheels;
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


