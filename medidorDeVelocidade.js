function medidorDeVelocidade(velocidade) {
  const limite = 70;
  const kmPorPonto = 5;

  if (velocidade <= limite) {
    console.log("Ok, dentro do limite");
  } else {
    const pontos = Math.floor((velocidade - limite) / kmPorPonto);
    if (pontos >= 12) {
      console.log("Carteira suspensa");
    } else {
      console.log("Pontos na carteira: " + pontos);
    }
  }
}

medidorDeVelocidade(130);
