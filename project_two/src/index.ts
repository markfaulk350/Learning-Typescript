class Sorter {
    // collection: number[] | string
    // constructor(collection: number[] | string) {
    //     this.collection = collection
    // }

    constructor(public collection: number[] | string) { }

    sort(): void {
        const { length } = this.collection

        // Bubble Sort Algorithm
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {

                // If collection is ann Array of numbers
                if (this.collection instanceof Array) {     // Type Guard
                    // collection === numbers[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j]
                        this.collection[j] = this.collection[j + 1]
                        this.collection[j + 1] = leftHand
                    }
                }

                // If collection is a string
                if (typeof this.collection === 'string') {

                }

            }
        }
    }

}