// Maneira sem parâmetros

function multiplos() {
  let multiplosDe3 = 0;
  let multiplosDe5 = 0;

  for (i = 0; i <= 10; i++) {
    if (i % 3 == 0) {
      multiplosDe3 += i;
    }
    if (i % 5 == 0) {
      multiplosDe5 += i;
    }
  }
  let resultado = multiplosDe3 + multiplosDe5;
  return resultado;
}

console.log(multiplos());

// Outra maneira com parâmetros

function multiplo(limite) {
  let multiploDe3 = 0;
  let multiploDe5 = 0;

  for (i = 0; i <= limite; i++) {
    if (i % 3 == 0) {
      multiploDe3 += i;
    }
    if (i % 5 == 0) {
      multiploDe5 += i;
    }
  }
  let resul = multiploDe3 + multiploDe5;
  console.log(resul);
}
multiplo(10);

