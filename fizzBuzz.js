const resultado = fizzBuzz(61);

function fizzBuzz(entrada) {
  if (typeof entrada !== "number") {
    console.log("Não é um número");
  } else if (entrada % 3 == 0 && entrada % 5 == 0) {
    console.log("FizzBuzz");
  } else if (entrada % 3 == 0) {
    console.log("Fizz");
  } else if (entrada % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(entrada)
  }
}
