const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreFinal = 0;
let machineScoreFinal = 0;

const OPCOES = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [OPCOES.ROCK, OPCOES.PAPER, OPCOES.SCISSOR];
    const randomNumber = Math.floor(Math.random()*3);

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Deu empate"
    } else if(
        (human === OPCOES.ROCK && machine === OPCOES.SCISSOR) ||
        (human === OPCOES.PAPER && machine === OPCOES.ROCK) ||
        (human === OPCOES.SCISSOR && machine === OPCOES.PAPER))
    {
        humanScoreFinal++
        humanScore.innerHTML = humanScoreFinal
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreFinal++
        machineScore.innerHTML = machineScoreFinal
        result.innerHTML = "A máquina ganhou!"
    }
}
