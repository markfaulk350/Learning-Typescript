interface Mappable {
    location: {
        lat: number
        lng: number
    }
    markerContent(): string 
}

export class LeafletMap {

    private leafletMap: L.Map
    private baseLayer: L.TileLayer

    constructor(divID: string) {
        this.baseLayer = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'I am pretty sure I can write whatever I want here.'
        })

        this.leafletMap = new L.Map(document.getElementById(divID), {
            center: new L.LatLng(40.731253, -73.996139),
            zoom: 12,
            // layers: [this.baseLayer]
        })

        this.leafletMap.addLayer(this.baseLayer)
        
    }

    addMarker(mappable: Mappable): void {
        let marker = new L.Marker([mappable.location.lat, mappable.location.lng], {
        })
        marker.addTo(this.leafletMap)
        
    }

    // addMarker(mappable: Mappable): void {
    //     let marker = new google.maps.Marker({
    //         map: this.googleMap,
    //         position: {
    //             lat: mappable.location.lat,
    //             lng: mappable.location.lng
    //         }
    //     })

    //     marker.addListener('click', () => {
    //         let infoWindow = new google.maps.InfoWindow({
    //             content: mappable.markerContent()
    //         })

    //         infoWindow.open(this.googleMap, marker)
    //     })
    // }

}