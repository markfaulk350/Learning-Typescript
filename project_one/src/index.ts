import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'
import { LeafletMap } from './LeafletMap'

const user = new User()
const company = new Company()

// const customMap = new CustomMap('map')
const leafletMap = new LeafletMap('map')

leafletMap.addMarker(user)

// customMap.addMarker(user)
// customMap.addMarker(company)