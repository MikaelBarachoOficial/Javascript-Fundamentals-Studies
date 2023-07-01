const clientes = require("./clientes.json")

function encontraObjeto (lista, chave, valor) {
    return lista.find((objeto) => objeto[chave].includes(valor))
}

console.log(encontraObjeto(clientes, 'nome', 'Olva'))