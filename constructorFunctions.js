// Pascal Case -> UmDoisTresQuatro

function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log('Ligando...')
    }
}

const celular = new Celular('Asus', 5.5, 5000)
console.log(celular)