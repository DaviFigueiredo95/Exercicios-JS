//function exibirNumerosPrimos(limite) {
//  for (let numero = 2; numero <= limite; numero++) {
//    let ehPrimo = true;
//
//    for (let divisor = 2; divisor < numero; divisor++) {
//      if (numero % divisor === 0) {
//        ehPrimo = false;
//        break;
//      }
//    }
//
//    if (ehPrimo) console.log(numero);
//  }
//}
//
//exibirNumerosPrimos(17);


function exibirNumerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++) {
        if (NumeroPrimo(numero)) console.log(numero)
    }
}

function NumeroPrimo(numero) {
    for(let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false
        }
    }
    return true
}

exibirNumerosPrimos(15)