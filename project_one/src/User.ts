import faker from 'faker'

// In order to use this class somewhere else in the project we need to export it
export class User {
    name: string
    location: {
        lat: number
        lng: number
    }
    constructor() {
        this.name = faker.name.firstName()
        this.location = {
            // Faker returns a string for lat & lng. Because we defined lat & lng as numbers in the User class, we have to convert them to numbers.
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `<h1>Username: ${this.name}</h1>`
    }
}