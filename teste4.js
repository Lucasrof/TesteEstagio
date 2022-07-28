/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. */

const dados = [
{
    sigla: "SP", 
    valor: 67836.43,
    porcento: 0
},
{
    sigla: "RJ", 
    valor: 36678.66,
    porcento: 0
},
{
    sigla: "MG", 
    valor: 29229.88,
    porcento: 0
},
{
    sigla: "ES", 
    valor: 27165.48,
    porcento: 0
},
{
    sigla: "Outros", 
    valor: 19849.53,
    porcento: 0
}]

var ttlMensal = 0

for ( dado in dados ) {
    ttlMensal = (ttlMensal + dados[dado].valor)
}


for ( dado in dados ) {
   dados[dado].porcento = (( dados[dado].valor / ttlMensal) * 100).toFixed(2).concat(`%`);
}
console.log(dados)



