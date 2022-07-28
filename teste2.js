/* Questão 02 ) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
 ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */
function verifyFibonacci (n) {
   if (isFibonacci(n)){
      console.log(`O número ` + n + ` pertence a sequência de Fibonacci`)
      return true
   }else{
      console.log (`O número ` + n + ` não pertence a sequência de Fibonacci`)
      return false
   }   
            
}
function isFibonacci(num, a = 0, b = 1) {
   if(num === 0 || num === 1) {
     return true;
   }
 
   let nextNumber = a+b;
 
   if(nextNumber === num) {
     return true;
   }
   else if(nextNumber > num) {
     return false;
   }
 
  return isFibonacci(num, b, nextNumber);
 }
  console.log(verifyFibonacci(5))

 