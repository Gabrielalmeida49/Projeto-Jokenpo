const result = document.querySelector('.result')
const resultHuman = document.querySelector('.result-human')
const resultMachine = document.querySelector('.result-machine')

let humanScoreNumber = 0 
let machineScoreNumber = 0 


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const randonNumber = Math.floor(Math.random() * 3)

    return choices[randonNumber]
}


const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = 'deu empate '
    } else if ((human === 'pedra' && machine === 'tesoura') ||
        (human === 'papel' && machine === 'pedra') ||
        (human === 'tesoura' && machine === 'papel')
    ) {
        humanScoreNumber++
        resultHuman.innerHTML = humanScoreNumber
        result.innerHTML = 'você ganhou '


    } else {
        machineScoreNumber++
        resultMachine.innerHTML = machineScoreNumber
        result.innerHTML = 'alexa ganhou'
    }

}