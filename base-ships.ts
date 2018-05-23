class SpaceCraft {

    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

interface ContainerShip {

    cargoContainer: number
}

export{SpaceCraft,ContainerShip}