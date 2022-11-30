// Média escolar com notas armazenadas em array

const array = [42, 100, 80];

function mediaDoAluno(notas) {
  const media = calcularMedia(notas);

  if (media < 59) return "Nota F";
  if (media < 69) return "Nota D";
  if (media < 79) return "Nota C";
  if (media < 89) return "Nota B";
  return "A";
}

function calcularMedia(array) {
  let soma = 0;
  for (let valor of array) {
    soma += valor;
  }
  let somaFinal = soma / Math.floor(array.length);
  return somaFinal;
}

console.log(mediaDoAluno(array));
