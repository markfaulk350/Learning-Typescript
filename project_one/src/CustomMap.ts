export class CustomMap {
    // Properties inside of classes are public modifiers by default, If we dont want other engineers
    // To be able to access those properties directly, we can set the modifier to private
    // Private only allows methods inside of this class to access the googleMap property
    private googleMap: google.maps.Map // Is of type map

    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divID), {
            zoom: 3,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }
}