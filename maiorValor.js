// Minha execução do exercício
function valor(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
}

valor(34, 71);


// Execução dada pelo professor

let valorMaior = max(15, 8)
console.log(valorMaior)

function max(numero1, numero2) {
    if (numero1 > numero2)
        return numero1
    else return numero2
}


// Outra opção de executar

let maiorValor = maximo(7, 2)
console.log(maiorValor)

function maximo(number1, number2) {
    return number1 > number2 ? number1 : number2;
}