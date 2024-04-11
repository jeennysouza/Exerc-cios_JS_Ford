// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo


//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol

//////////////////////////INICIO DO TRABALHO ABAIXO/////////////////////////////////////////////
// Solicita ao usuário os nomes dos times e o placar do jogo
let time1 = prompt("Digite o nome do primeiro time:");
let time2 = prompt("Digite o nome do segundo time:");
let placarTime1 = parseInt(prompt("Digite o placar do primeiro time:"));
let placarTime2 = parseInt(prompt("Digite o placar do segundo time:"));

// Verifica o resultado do jogo
if (placarTime1 > placarTime2) {
    console.log(`Vitória do ${time1}`);
} else if (placarTime2 > placarTime1) {
    console.log(`Vitória do ${time2}`);
} else {
    console.log("O jogo terminou em empate");
}