/* Rates of reaction simulation
This simulation will cover:
a) Forward only - random dice rolls
b) Both directions - random & percentages
*/

//Initial Settings
let numberParticles = 1000000
let particleA = numberParticles
let particleB = numberParticles - particleA
let roundNumber = 0

let diceSize = 6
let targetNumber = 3

//Dice size = D6, D8, D10 etc.
//Target Number is the number to beat for the reaction to happen

const diceRoller = () => {
    for (let i = 1; i <= particleA; i++) {
        if (Math.floor(Math.random() * diceSize) >= targetNumber) {
            particleB ++
        }
    }
    particleA = numberParticles - particleB
}

const roundEvent = (numRounds) => {
    for (let j = 1; j <= numRounds; j++) {
        roundNumber++
        diceRoller()
        console.log(`At the end of Round ${roundNumber}, there are ${particleA} white particles and ${particleB} black particles`)
    }
}

roundEvent(10)