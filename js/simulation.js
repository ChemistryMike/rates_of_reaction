import Chart from 'https://cdn.jsdelivr.net/npm/chart.js@3.5.0/dist/chart.min.js/auto';

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

let xDataSet = [roundNumber]
let yDataSetA = [particleA]

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

const lineChartData = (x, y1, y2) => {
    xDataSet.push(x)
    yDataSetA.push(y)
}
const roundEvent = (numRounds) => {
    for (let j = 1; j <= numRounds; j++) {
        roundNumber++
        diceRoller()
        lineChartData(roundNumber, particleA, particleB)
    }
}

//Create Output chart

var ctx = document.getElementById('rateLineGraph');
var rateLineGraph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xDataSet,
        datasets: [{
            label: 'Number of white cells',
            data: yDataSetA,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
});

