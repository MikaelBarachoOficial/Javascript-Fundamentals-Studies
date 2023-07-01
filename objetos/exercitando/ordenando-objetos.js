const clientes = require('./clientes.json')

function ordenaObjetos (lista, chave) {
    return lista.sort((obj1, obj2) => {
        if (obj1[chave] > obj2[chave]) {
            return 1

        } else if (obj1[chave] < obj2[chave]) {
            return -1

        } else {
            return 0

        }
    })
}

console.log(ordenaObjetos(clientes, 'nome'))