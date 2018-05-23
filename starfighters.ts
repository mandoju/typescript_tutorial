import {SpaceCraft, ContainerShip} from './base-ships'

export class MilleniumFalcon extends SpaceCraft implements ContainerShip {

    cargoContainer: number
    constructor(){
        super("hypeprdrive")
        this.cargoContainer = 2
    }

    jumpIntoHyperspace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperspace()
        }else { console.log('Failed to jump into hyperspace')}
    }
}
