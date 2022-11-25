const filme = {
    titulo: 'Vingadores',
    ano: 2015,
    diretor: 'Will',
    quantidadeDeAtores: 17,
    personagem: 'Iron Man'
}

function soString(obj) {
    for(prop in obj) {
        if(typeof obj[prop] === 'string') {
            console.log(prop,obj[prop])
        }
    }
}

soString(filme)