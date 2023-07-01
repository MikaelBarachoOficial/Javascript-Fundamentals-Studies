const clientes = require("./clientes.json")

function filtraApartamentosSemComplemento (lista) {
    //return lista.filter((objeto) => objeto.endereco.apartamento === true && objeto.endereco.complemento === undefined)
    return lista.filter(objeto => {
        return objeto.endereco.apartamento &&
        !objeto.endereco.hasOwnProperty('complemento')
    })
}

const apartamentosSemComplemento = filtraApartamentosSemComplemento(clientes)
console.log(apartamentosSemComplemento)