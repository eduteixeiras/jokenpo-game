const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreFinal = 0;
let machineScoreFinal = 0;

//OPÇÕES QUE SERÃO USADAS NO JOGO
const OPCOES = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor'
}

//VEZ DA PESSOA
const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

//VEZ DA MÁQUINA
const playMachine = () => {
    const choices = [OPCOES.ROCK, OPCOES.PAPER, OPCOES.SCISSOR];
    const randomNumber = Math.floor(Math.random()*3);

    return choices[randomNumber]
}

//REALIZA A VERIFICÃO DO RESULTADO
const playTheGame = (human, machine) => {
    if (human === machine) { //COMPARA O VALOR DA PESSOA E DA MÁQUINA E VÊ SE SÃO IGUAIS
        result.innerHTML = "Deu empate!"
    } else if( //FAZ A COMPARAÇÃO PARA SABER SE A PESSOA GANHOU
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
