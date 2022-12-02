const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75,
    },
    capacidadeBateria: 5000,
    ligar: function() {
        console.log('Ligando...')
    }
}

// De maneira Factory Functions (Função de Fábrica)

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Ligando...')
        }
    }
}

const celular1 = criarCelular('Samsung', 5.7, 5500)
console.log(celular1)