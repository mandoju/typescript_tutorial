import {SpaceCraft,ContainerShip} from './base-ships'
import {MilleniumFalcon} from './starfighters'


let ship = new SpaceCraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()




let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainer > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon)}`)