// Making abstract class
abstract class Vehicle {
    protected make: string;
    protected model: string;
    protected year: number;
    protected rented: boolean;

    constructor(make: string, model: string, year: number, rented: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }

    // Accessor methods
    public getMake(): string {
        return this.make;
    }

    public getModel(): string {
        return this.model;
    }

    public getYear(): number {
        return this.year;
    }

    public isRented(): boolean {
        return this.rented;
    }

    // Mutator method
    public setRented(rented: boolean): void {
        this.rented = rented;
    }

    // Abstract method
    public abstract rentalRate(): number;

    // Rent and return methods
    public rent(): string {
        if (this.rented) {
            return `Sorry, ${this.make} ${this.model} is already rented.`;
        } else {
            this.rented = true;
            return `You have rented ${this.make} ${this.model}.`;
        }
    }

    public returnVehicle(): string {
        if (this.rented) {
            this.rented = false;
            return `Thank you for returning ${this.make} ${this.model}.`;
        } else {
            return `Sorry, ${this.make} ${this.model} has not been rented.`;
        }
    }
}

// making subcalass
class Car extends Vehicle {
    private numSeats: number;

    constructor(make: string, model: string, year: number, rented: boolean, numSeats: number) {
        super(make, model, year, rented);
        this.numSeats = numSeats;
    }

    public rentalRate(): number {
        return 50;
    }

    public getNumSeats(): number {
        return this.numSeats;
    }
}

class Truck extends Vehicle {
    private payloadCapacity: number;

    constructor(make: string, model: string, year: number, rented: boolean, payloadCapacity: number) {
        super(make, model, year, rented);
        this.payloadCapacity = payloadCapacity;
    }

    public rentalRate(): number {
        return 100;
    }

    public getPayloadCapacity(): number {
        return this.payloadCapacity;
    }
}

class Motorcycle extends Vehicle {
    private engineSize: number;

    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
    }

    public rentalRate(): number {
        return 25;
    }

    public getEngineSize(): number {
        return this.engineSize;
    }
}

// Example usage
const car = new Car("Toyota", "Camry", 2023, false, 5);
console.log(car.rent()); // "You have rented Toyota Camry."
console.log(car.returnVehicle()); // "Thank you for returning Toyota Camry."
console.log(car.rent()); // "You have rented Toyota Camry."
console.log(car.rent()); // "Sorry, Toyota Camry is already rented."

const truck = new Truck("Toyota", "Tacoma", 2019, false, 2000);
console.log(truck.rent()); // "You have rented Toyota Tacoma"
console.log(truck.returnVehicle());// "Thank you for returning Toyota Tacoma"

const motorcycle = new Motorcycle("Harley-Davidson", "Sportster", 2023, false, 883);

console.log(motorcycle.rent()); // You have rented Harley-Davidson Sportster
console.log(motorcycle.returnVehicle()); // Thank you for returning Harley-Davidson Sportster."
console.log(motorcycle.rent()); // "You have rented Harley-Davidson Sportster
console.log(motorcycle.rentalRate()); // 25
console.log(car.rentalRate()); // 50
console.log(truck.getPayloadCapacity()); // 2000
console.log(motorcycle.getEngineSize()); // 883
