// This interface has a shitty name. But its essentialy what we use to check that an object has certain fields before passing them to a function
interface Mappable {
    location: {
        lat: number
        lng: number
    }
    markerContent(): string 
}

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

    addMarker(mappable: Mappable): void {
        let marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            let infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })

            infoWindow.open(this.googleMap, marker)
        })
    }

}