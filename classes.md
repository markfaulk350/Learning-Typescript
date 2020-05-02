# Typescript Classes
### Definition: Classes are blueprints to create objects with values and methods to create things

### Basics
Javascript is an object oreinted programming language. We are constantly creating objects and passing them around. Classes make it easy to reuse code to create objects. We define the fields and methods a certain type of object should have and save it as a class. Classes have constructor functions that take arguments passed in when an object is created. Those arguments are then used to create an instance of that class, an object. By extending classes we inherit all the fields, methods, and the constructor function.

The whole idea is to use classes and interfaces to reuse code.

## Examples
```typescript
class Vehicle {
    color: string;

    constructor(color) {
        this.color = color
    }

    // Shortened constructor
    // constructor(public color: string) {

    drive(): void {
        console.log("Choo Choo!")
    }
    beep(): void {
        console.log("Beep")
    }
}

class Car extends Vehicle { // By extending vehicle we can access all the methods inside of Car
    drive(): void {
        console.log("Vroom")
    }
}

const vehicle = new vehicle("Green")
const car = new Car("Red")


vehicle.drive() // Choo Choo!
vehicle.beep() // Beep
car.drive() // Vroom - We can override values and methods inside the Car class
```