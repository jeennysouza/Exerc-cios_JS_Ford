// A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional e a entender sua relação com variáveis que influenciam o desenvolvimento, como qualidade de vida, migrações, , fatores socioeconômicos e localização. Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.



// Observação : A taxa de natalidade é calculada pela seguinte fórmula: taxa de natalidade = (número de crianças nascidas x 1000) / número de habitantes;
// Enquanto que, a taxa de mortalidade = (números de óbitos x 1000) /número de habitantes.

//olá!

//entrada de dados
// verificar o que o usuario vai querer calcular (natalidade ou mortalidade)
// determinar o número de crianças nascidas e o número de habitantes para natalidade
// determinar o número de óbitos e o número de habitantes para mortalidade

//processamento de dados
// realizar o calculo de natalidade e mortalidade 
// determinar com switch case se o usuario vai querer calcular natalidade ou mortalidade

//saída de dados
// imprimir na tela a taxa de mortalidade ou natalidade



// Função para calcular a taxa de natalidade
function calcularTaxaNatalidade(criancasNascidas, numeroHabitantes) {
    return (criancasNascidas * 1000) / numeroHabitantes;
}

// Função para calcular a taxa de mortalidade
function calcularTaxaMortalidade(obitos, numeroHabitantes) {
    return (obitos * 1000) / numeroHabitantes;
}

// Entrada de dados
let opcao = prompt("Deseja calcular a taxa de natalidade (digite 'N') ou a taxa de mortalidade (digite 'M')?").toUpperCase();

// Verificação e cálculo da taxa correspondente
switch (opcao) {
    case 'N':
        let criancasNascidas = parseInt(prompt("Digite o número de crianças nascidas:"));
        let numeroHabitantesNatalidade = parseInt(prompt("Digite o número total de habitantes:"));
        let taxaNatalidade = calcularTaxaNatalidade(criancasNascidas, numeroHabitantesNatalidade);
        console.log("Taxa de Natalidade:", taxaNatalidade.toFixed(2), "nascimentos por 1000 habitantes.");
        break;
    case 'M':
        let obitos = parseInt(prompt("Digite o número de óbitos:"));
        let numeroHabitantesMortalidade = parseInt(prompt("Digite o número total de habitantes:"));
        let taxaMortalidade = calcularTaxaMortalidade(obitos, numeroHabitantesMortalidade);
        console.log("Taxa de Mortalidade:", taxaMortalidade.toFixed(2), "óbitos por 1000 habitantes.");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha 'N' para calcular a taxa de natalidade ou 'M' para calcular a taxa de mortalidade.");
}