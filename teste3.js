/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; */

const mes = require('./dados.json')

var menor    = mes[0] 
var maior    = mes[0]
var qtdeDias = 0
var vlrTotal = 0
var contador = 0



for (index in mes) {

    if( mes[index].valor != 0) {
        vlrTotal = vlrTotal + mes[index].valor
        qtdeDias++
    } 

    if (mes[index].valor < menor.valor ) {
        menor = mes[index]
    }
    if (mes[index].valor > maior.valor){
        maior = mes[index]
    }
    
}

var media = vlrTotal / qtdeDias

for (index in mes){
    if ( mes[index].valor > media){
        contador++
    }
}
console.log(`O menor valor de faturamento ocorrido em um dia do mês é: ` + menor.valor)
console.log(`O maior valor de faturamento ocorrido em um dia do mês é:` + maior.valor)
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal é: ` + contador)
