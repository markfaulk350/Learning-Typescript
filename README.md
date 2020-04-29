# Learning-Typescript
Typescript taught by Stephen Grider on Udemy

### Why use Typescript?
- **Typescript simplifies javscript making it easier to read and debug.**
- **Typescript helps us catch errors in the development stage before ever having to run code.**

## Definitions
- Type annotations: Code we add to tell Typscript what type of value a variable should be
- Type inference: Typescript tries to figure out what what type of value a variable refers to

# Type Annotations vs Inferrence (When to use?)
Use Type Annotations when...
- We declare a variable on one line then initialize it on another
- We want a variable to have a type that cannot be inferred
- When a function returns the 'any' type and we need to clarify the value

Use Type Inference when...
- When ever possible to simplify code
- When we declare and initialize a variable on the same line

# Annotations (We explicitly tell Typescript what type a variable needs to be)
#### Everything to the left of the = sign is the type annotation

#### Variables
```typescript
const firstName: string = 'Mark'

let counter: number = 0

let loading: boolean = false

let nothingMuch: null = null  // Values can have a name identical to their type

let nothing: undefined = undefined   // Values can have a name identical to their type
```

#### Variable whos type cannot be inferred (Edge case)
```typescript
let numbers = [-1, 6, -5]
let numberAboveZero: boolean | number = false

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i]
    }
}
```

#### Objects
```typescript
let now: Date = new Date()
```

#### Arrays
```typescript
let colors: string[] = ['red', 'green', 'blue']

let myNumbers: number[] = [1,2,3]
```

#### Classes
```typescript
class Car {
    carMake: string
    constructor(val1: string) {
        this.carMake = val1;
    }
    showMake() {
        return 'The car is a' + this.carMake
    }
}

let car: Car = new Car('Toyota')
```

#### Object Literal
```typescript
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}
```

#### Functions
```typescript
// It's important to understand where the type annotation begins and ends, and where the function starts
// We can see that this function takes in i which is a number and returns nothing.
// Everything on the right hand side of = is the function itself. Not the type annotation!
const logNumber: (i: number) => (void) = (i: number) => {
    console.log(i)
}

// Arrow function
const add = (a: number, b: number): number => {
    return a + b
}

// Named function
function divide(a: number, b: number): number {
    return a / b
}

// Anonymous function
const multiply = function(a: number, b: number): number {
    return a * b
}

// Void
const logger = (message: string): void => {
    console.log(message)
}

// Never (Corner Case)
const throwError = (message: string): never => {
    throw new Error(message)
}
```

```typescript
// Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json)  // JSON.parse() returns type 'any'
console.log(coordinates)
// ---------------------------------------------------------------------
// To fix this
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json)  // coordinates returns type object
console.log(coordinates)
```

# Destructuring with Annotations & Objects
```typescript
const todaysWeather = {
    date: new Date(),
    weather: "Sunny"
}
logWeather(todaysWeather);

// Before destructuring
const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forcast.date)
    console.log(forcast.weather)
}

// After destructuring
const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}
```

```typescript
// Need to specify the types when destructuring
const profile = {
    name: 'Mark',
    age: 21,
    coords: {
        lat: 117.2475,
        lng: -11.3522
    }
}

const { age, name }: {age: number, name: string} = profile
```