// Criar uma função que exibe a quantidade de *
// que aquela linha possui

function exibirAsteriscos(linhas) {
  let padrao = "";
  for (let linha = 1; linha <= linhas; linha++) {
    padrao += "*";
    console.log(padrao);
  }
}

exibirAsteriscos(6);


// outra maneira de resolver é inserindo um
// laço de repetição dentro do outro, assim:

//for (let linha = 1; linha <= linhas; linha++) {
//    let padrao = ''
//    for(let i = 0; i < linha; i++) {
//        padrao += '*'
//    }
//    console.log(padrao)
//}

