"use strict";
// Making abstract class
class Vehicle {
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    // Accessor methods
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    // Mutator method
    setRented(rented) {
        this.rented = rented;
    }
    // Rent and return methods
    rent() {
        if (this.rented) {
            return `Sorry, ${this.make} ${this.model} is already rented.`;
        }
        else {
            this.rented = true;
            return `You have rented ${this.make} ${this.model}.`;
        }
    }
    returnVehicle() {
        if (this.rented) {
            this.rented = false;
            return `Thank you for returning ${this.make} ${this.model}.`;
        }
        else {
            return `Sorry, ${this.make} ${this.model} has not been rented.`;
        }
    }
}
// making subcalass
class Car extends Vehicle {
    constructor(make, model, year, rented, numSeats) {
        super(make, model, year, rented);
        this.numSeats = numSeats;
    }
    rentalRate() {
        return 50;
    }
    getNumSeats() {
        return this.numSeats;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, rented, payloadCapacity) {
        super(make, model, year, rented);
        this.payloadCapacity = payloadCapacity;
    }
    rentalRate() {
        return 100;
    }
    getPayloadCapacity() {
        return this.payloadCapacity;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, rented, engineSize) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 25;
    }
    getEngineSize() {
        return this.engineSize;
    }
}
// Example usage
const car = new Car("Toyota", "Camry", 2022, false, 5);
console.log(car.rent()); // "You have rented Toyota Camry."
console.log(car.returnVehicle()); // "Thank you for returning Toyota Camry."
console.log(car.rent()); // "You have rented Toyota Camry."
console.log(car.rent()); // "Sorry, Toyota Camry is already rented."
const truck = new Truck("Toyota", "Tacoma", 2019, false, 2000);
console.log(truck.rent()); // "You have rented Toyota Tacoma"
console.log(truck.returnVehicle()); // "Thank you for returning Toyota Tacoma"
const motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2023, false, 883);
console.log(motorcycle.rent()); // You have rented Harley-Davidson Sportster
console.log(motorcycle.returnVehicle()); // Thank you for returning Harley-Davidson Sportster."
console.log(motorcycle.rent()); // "You have rented Harley-Davidson Sportster
console.log(motorcycle.rentalRate()); // 25
console.log(car.rentalRate()); // 50
console.log(truck.getPayloadCapacity()); // 2000
console.log(motorcycle.getEngineSize()); // 883
//# sourceMappingURL=index.js.map