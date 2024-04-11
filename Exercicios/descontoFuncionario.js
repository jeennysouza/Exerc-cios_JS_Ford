// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).





//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto



//////////////////////////////////////////////


// Função para calcular o desconto com base no código do cliente
function calcularDesconto(totalCompra, codigoCliente) {
    let desconto = 0;
    
    switch (codigoCliente) {
        case 1:
            // Cliente comum - sem desconto
            desconto = 0;
            break;
        case 2:
            // Funcionário - desconto de 10%
            desconto = totalCompra * 0.1;
            break;
        case 3:
            // Cliente VIP - desconto de 5%
            desconto = totalCompra * 0.05;
            break;
        default:
            console.log("Código de cliente inválido.");
    }
    
    return totalCompra - desconto;
}

// Entrada de dados
let totalCompra = parseFloat(prompt("Digite o valor total da compra:"));
let codigoCliente = parseInt(prompt("Digite o código do cliente (1 para cliente comum, 2 para funcionário, 3 para VIP):"));

// Verificação e exibição do valor total a ser pago
if (!isNaN(totalCompra) && !isNaN(codigoCliente) && codigoCliente >= 1 && codigoCliente <= 3) {
    let totalPagar = calcularDesconto(totalCompra, codigoCliente);
    console.log("Total a ser pago: R$", totalPagar.toFixed(2));
} else {
    console.log("Por favor, insira valores válidos.");
}
