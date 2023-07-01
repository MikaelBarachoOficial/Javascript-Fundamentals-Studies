const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    //enderecos: [],
}

var chavesDoObjeto = Object.keys(cliente)
console.log(chavesDoObjeto)

console.log(cliente)
comprar()

cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
]
console.log(chavesDoObjeto)
chavesDoObjeto = Object.keys(cliente)
console.log(chavesDoObjeto)

console.log(cliente)
comprar()

function comprar() {
  if (!chavesDoObjeto.includes('enderecos') || cliente.enderecos.length === 0) {
    console.error(`Erro. É necessário pelo menos 1 endereço cadastrado.`)
  
    } else {
        console.log(`${cliente.enderecos.length} endereço(s) encontrado(s). Compra Efetuada.`)
    } 
}

cliente.enderecos.pop()
console.log(cliente)