# Typescript Interfaces
### Definition: Interfaces create a new Type, describing the property names and value types of an object

Why do we care?
- Interfaces and classes give us strong code reusability

When to use this?

# Examples

```typescript
// Without Interfaces
let person = {
    name: 'Mark',
    age: 21,
    married: false
}

const printPerson = (person: { name: string, age: number, married: boolean }): void => {
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
    console.log(`Married: ${person.married}`)
}

printPerson(person)

// With Interfaces
let person = {
    name: 'Mark',
    age: 21,
    married: false,
    summary(): string {
        return `${this.name} is ${this.age} years old.`
    }
}

interface Person {
    name: string;
    age: number;
    married: boolean;
    summary(): string;
}

const printPerson = (person: Person): void => {
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
    console.log(`Married: ${person.married}`)
    console.log(person.summary())
}

printPerson(person)
```