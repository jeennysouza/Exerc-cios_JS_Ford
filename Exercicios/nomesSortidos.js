// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

//////////////////INICIO DA TAVIDADE ABAIXO////////////////////////////////////////////////

// Cria um vetor para armazenar os nomes das pessoas
let nomes = [];

// Realiza a leitura dos nomes das 10 pessoas
for (let i = 1; i <= 10; i++) {
    let nome = prompt(`Digite o nome da ${i}ª pessoa:`);
    nomes.push(nome);
}

// Realiza a leitura de mais um nome para busca
let nomeBusca = prompt("Digite um nome para buscar:");

// Verifica se o nome está entre os 10 nomes lidos anteriormente
if (nomes.includes(nomeBusca)) {
    console.log("ACHEI");
} else {
    console.log("NÃO ACHEI");
}