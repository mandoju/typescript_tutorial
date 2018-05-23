class SpaceCraft {

    constructor(public propulsor: string){}

    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new SpaceCraft('hyperdrive')
ship.jumpIntoHyperspace()



class MilleniumFalcon extends SpaceCraft implements ContainerShip {

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

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()


interface ContainerShip {

    cargoContainer: number
}

let goodForTheJob = ( ship: ContainerShip ) => ship.cargoContainer > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon)}`)