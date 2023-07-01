const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
}
  
cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
]

function ligaParaCliente(telefoneFixo, celular) {
    console.log(`Ligando para ${telefoneFixo}`)
    console.log(`Ligando para ${celular}`)
}

// Se ativar sem o spread, os dois números irão para telefoneFixo em formato de array.
console.log(...cliente.telefone)
ligaParaCliente(...cliente.telefone) 

//O spread operator também funciona para objetos:
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}
 console.log(encomenda)