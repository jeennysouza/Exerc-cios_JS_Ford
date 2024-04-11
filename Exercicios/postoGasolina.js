// Um posto está vendendo combustíveis com a seguinte tabela de descontos:



// Álcool:
// . até 20 litros, desconto de 3% por litro Álcool
// . acima de 20 litros, desconto de 5% por litro

// Gasolina:
// . até 20 litros, desconto de 4% por litro Gasolina
// . acima de 20 litros, desconto de 6% por litro

// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado
// da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente
// sabendo-se que o preço do litro da gasolina é R$ 5,30 e o preço do litro do álcool é R$ 4,90.

// Dica: utilize switch case, operadores lógicos e relacionais e estrutura de condição para otimizar o algorítimo.


//entrada de dados
// = selecionar se deseja abastecer com alcool ou com gasolina;
// = selecionar a quantidade de litros que o usuário deseja;

//processamento de dados
// = switch case para gasolina ou alcool

//saida de dados
// = mostrar a porcentagem de desconto se for alcool ou se for gasolina



// Função para calcular o valor a ser pago
function calcularValorPago(tipoCombustivel, litros) {
    let precoPorLitro = 0;
    let descontoPorLitro = 0;

    switch (tipoCombustivel) {
        case 'A':
            // Álcool
            precoPorLitro = 4.90;
            if (litros <= 20) {
                descontoPorLitro = 0.03;
            } else {
                descontoPorLitro = 0.05;
            }
            break;
        case 'G':
            // Gasolina
            precoPorLitro = 5.30;
            if (litros <= 20) {
                descontoPorLitro = 0.04;
            } else {
                descontoPorLitro = 0.06;
            }
            break;
        default:
            console.log("Tipo de combustível inválido.");
            return -1;
    }

    let valorTotal = litros * precoPorLitro;
    let descontoTotal = litros * precoPorLitro * descontoPorLitro;
    return valorTotal - descontoTotal;
}

// Entrada de dados
let tipoCombustivel = prompt("Digite o tipo de combustível (A para Álcool, G para Gasolina):").toUpperCase();
let litros = parseFloat(prompt("Digite a quantidade de litros vendidos:"));

// Verificação e exibição do valor a ser pago
if (!isNaN(litros) && (tipoCombustivel === 'A' || tipoCombustivel === 'G')) {
    let valorPago = calcularValorPago(tipoCombustivel, litros);
    console.log("Valor a ser pago: R$", valorPago.toFixed(2));
} else {
    console.log("Por favor, insira valores válidos.");
}